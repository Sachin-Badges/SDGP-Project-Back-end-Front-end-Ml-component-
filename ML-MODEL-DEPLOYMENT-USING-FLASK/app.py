import pickle

import numpy as np
from flask import Flask, request, jsonify, render_template

#create flask app
app = Flask(__name__)

# Load the model
model = pickle.load(open('model.pkl','rb'))

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict',methods=['POST'])
def predict():

    float_features = [float(x) for x in request.form.values()]
    features = [np.array(float_features)]
    prediction = model.predict(features)


    return render_template('index.html', prediction_text='Time taken for delivery will be {} hours'.format(prediction))

if __name__ == "__main__":
    app.run(debug=True)