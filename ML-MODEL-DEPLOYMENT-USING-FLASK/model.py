import pickle
import pandas as pd
import numpy as np
from geopy.distance import geodesic
from sklearn.model_selection import train_test_split,cross_val_score, GridSearchCV
from sklearn.preprocessing import LabelEncoder,StandardScaler
from sklearn.ensemble import RandomForestRegressor
from scipy import stats

df = pd.read_csv('mail_delivery_time.csv')
print(df.head())
print("Number of rows and columns of Training Dataset :", df.shape)

print(df.info())

print(df.describe().T)

#Data Preprocessing

##Data Cleaning

def update_column_name(df_update):  ##Update Column Names. We changed two column names
    #Renaming Weatherconditions column
    df_update.rename(columns={'Weatherconditions': 'Weather_conditions'},inplace=True)
    df_update.rename(columns={'Time_taken(min)': 'Time_taken(hour)'},inplace=True)

update_column_name(df)
print(df.columns)

# Remove outliers using Z-score
z_scores = np.abs(stats.zscore(df['Time_taken(hour)']))
outlier_indices = np.where(z_scores > 3)[0]  # Threshold set to 3 standard deviations
df_clean = df.drop(outlier_indices)

# Define a function to extract relevant values from a DataFrame
def extract_column_value(df_extract):
    # Extract Weather conditions
    df_extract['Weather_conditions'] = df_extract['Weather_conditions'].apply(lambda x: x.split(' ')[1].strip())
    # We have to changed the Weather_conditions column. Because there were some extra insignificant values before the important data(ex: conditions Sunny)

extract_column_value(df)
print("\n")
print(df[['Weather_conditions']].head())

# Function to drop specified columns from a DataFrame(Droping  Columns which won't be use for building model)
def drop_columns(df_drop):
    df_drop.drop(['ID','Delivery_person_ID', 'Time_Orderd','Time_Order_picked', 'Recieve_Date', 'City'],axis=1,inplace=True)
    # Drop the specified columns ('ID' and 'Delivery_person_ID') along the columns axis (axis=1)
    # inplace=True modifies the original DataFrame without the need to assign it to a new variable

print("Before No. of columns: ",df.shape[1])
drop_columns(df)
print("After No. of columns: ",df.shape[1])



# Check if there are any duplicate rows in the DataFrame
if (len(df[df.duplicated()])>0):
    print("\nThere are Duplicate values present")
else:
    print("\nThere is no duplicate value present")

#Update datatypes
def update_datatype(df_type):

    # Convert 'Delivery_person_Age' column to float64
    df_type['Delivery_person_Age'] = df_type['Delivery_person_Age'].astype('float64')
    df_type['Delivery_person_Ratings'] = df_type['Delivery_person_Ratings'].astype('float64')
    df_type['multiple_deliveries'] = df_type['multiple_deliveries'].astype('float64')

update_datatype(df)

#Convert String 'NaN' to np.nan. numpy library has been used for this part
def convert_nan(df_convert):
    df_convert.replace('NaN', float(np.nan), regex=True,inplace=True)
convert_nan(df)
#  Note: In Python, ‘NaN’ is a string (text), while np.nan is a special floating-point value that represents “Not a Number”.
#        When we’re working with data in pandas, it’s more useful to have missing values represented as np.nan, because pandas
#        understands that this value represents missing or undefined data.
#        So, by converting ‘NaN’ strings to np.nan, we’re making our DataFrame easier to work with when performing mathematical
#        and statistical operations.




#Check null values
print("\nCheck null values")
print(df.isnull().sum().sort_values(ascending=False))
print("\n")


# Function to handle null values in the given DataFrame. numpy library has used for this function

def handle_null_values(df_null):

     # Fill null values in 'Delivery_person_Age' with a random choice from available values
    df_null['Delivery_person_Age'].fillna(np.random.choice(df_null['Delivery_person_Age']), inplace=True)
    df_null['Weather_conditions'].fillna(np.random.choice(df_null['Weather_conditions']), inplace=True)
    df_null['Festival'].fillna(df_null['Festival'].mode()[0], inplace=True)
    df_null['multiple_deliveries'].fillna(df_null['multiple_deliveries'].mode()[0], inplace=True)
    df_null['Road_traffic_density'].fillna(df_null['Road_traffic_density'].mode()[0], inplace=True)
    df_null['Delivery_person_Ratings'].fillna(df_null['Delivery_person_Ratings'].median(), inplace=True)

handle_null_values(df)
print(df.isnull().sum())





#Feature Engineering

#Calculate distance between restaurant location & delivery location. ("geodesic" library hasbeenusedfor this function) )
def calculate_distance(data):
    data['distance']=np.zeros(len(data))
    post_office_coordinates=data[['Post_office_latitude','Post_office_longitude']].to_numpy()
    delivery_location_coordinates=data[['Delivery_location_latitude','Delivery_location_longitude']].to_numpy()
    data['distance'] = np.array([geodesic(postOffice, delivery) for postOffice, delivery in zip(post_office_coordinates, delivery_location_coordinates)])
    # data['distance']= data['distance'].astype("str").str.extract('(\d+)').astype("int64")
    data['distance'] = data['distance'].astype("str").str.extract(r'(\d+)').astype("int64")


calculate_distance(df)
print(df.head())


#'sklearn.preprocessing' library has been used for this function

def label_encoding(data):
    categorical_columns = data.select_dtypes(include='object').columns
    label_encoder = LabelEncoder()
    data[categorical_columns] = data[categorical_columns].apply(lambda col: label_encoder.fit_transform(col))

label_encoding(df)
print(df.head())

#label_encoding function was used to convert categorical data into numerical data.
#There were 3 columns with categorical data.(Type_of_vehicle,Weather_conditions,Road_traffic_density)



#Train test split

#Split features & label
X = df.drop('Time_taken(hour)', axis=1)  # Features
y = df['Time_taken(hour)']  # Target variable

# Split the data into train and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
print(X_train.shape)
print(y_train.shape)
print(X_test.shape)
print(y_test.shape)



         #Standardization/ Feature scaling

#feature scaling has been done  using standardization with StandardScaler

# Create a StandardScaler object
scaler = StandardScaler()

# Fit the scaler on the training data
scaler.fit(X_train)

# Perform standardization on the training data
X_train = scaler.transform(X_train)

# Perform standardization on the testing data
X_test = scaler.transform(X_test)

#Feature scaling is a crucial preprocessing step in machine learning pipelines to ensure that features are on a similar scale.
#This is important for algorithms that are sensitive to the scale of input features, such as gradient descent-based algorithms (e.g., linear regression, logistic regression) and distance-based algorithms (e.g., K-nearest neighbors, support vector machines).
#Stadarlization :  This method rescales features so that they have a mean of 0 and a standard deviation of 1.


from sklearn.model_selection import GridSearchCV, cross_val_score
from sklearn.linear_model import LinearRegression
from sklearn.tree import DecisionTreeRegressor
from sklearn.ensemble import RandomForestRegressor
# import xgboost as xgb

# Find the best model
models = [
    LinearRegression(),
    DecisionTreeRegressor(),
    RandomForestRegressor(),
    # xgb.XGBRegressor(),
]

param_grid = [
    {},
    {'max_depth': [3, 5, 7]},
    {'n_estimators': [100, 200, 300]},
    # {'n_estimators': [20, 25, 30], 'max_depth': [5, 7, 9]},
]

for i, model in enumerate(models):
    grid_search = GridSearchCV(model, param_grid[i], cv=5, scoring='r2')
    grid_search.fit(X_train, y_train)

    print(f"{model.__class__.__name__}:")
    print("Best parameters:", grid_search.best_params_)
    print("Best R2 score:", grid_search.best_score_)
    print()

#Model Building
model = RandomForestRegressor(n_estimators=300, random_state=42)
# Fit the model on the training data
model.fit(X_train, y_train)


# Make pickle file of our model
pickle.dump(model, open("model.pkl", "wb"))

print(df.columns)
