FROM python:3.7
COPY . /app
WORKDIR /app
RUN pip install -r requirements.txt
EXPOSE $PORT
CMD gunicorn --workers=4 --bind 0.0.0.0:$PORT app:app




# # Use an official Python runtime as a parent image
# FROM python:3.8

# # Set the working directory in the container to /app
# WORKDIR /app

# # Add the current directory contents into the container at /app
# ADD . /app

# # Install any needed packages specified in requirements.txt
# RUN python -m pip install --upgrade pip
# RUN pip install -r requirements.txt

# # Make port 5001 available to the world outside this container
# EXPOSE 5001

# # Run app.py when the container launches
# CMD ["python", "app.py"]