
import pickle
import numpy as np
from flask import Flask, request, jsonify


# Create flask app
app = Flask(__name__)


# Load the model
model = pickle.load(open('model.pkl','rb'))

@app.route('/')
def home():
    return "Mail Delivery Time Prediction API"

@app.route('/predict', methods=['POST'])
def predict():
    # Get JSON data from request
    data = request.json

    # Convert JSON data to numpy array
    features = np.array(list(data.values())).reshape(1, -1)

    # Predict delivery time
    prediction = model.predict(features)

    # Return prediction as JSON response
    return jsonify({'prediction': prediction[0]})

if __name__ == "__main__":
    app.run(debug=True, port=5001)