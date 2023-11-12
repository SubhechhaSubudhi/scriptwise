# Import necessary modules in app.py
from flask import request
from flask_restful import Resource
from utils.file_utils import save_file
# from file_utils import save_file
# Modify the FileManagement class in file_management.py
class FileManagement(Resource):
    def get(self):
        # Logic to list files
        return "Hello World"

    def post(self):
        # Logic to upload a file
        if 'file' not in request.files:
            return {'message': 'No file part'}, 400

        file = request.files['file']

        if file.filename == '':
            return {'message': 'No selected file'}, 400

        saved_file = save_file(file)
        return {'message': 'File uploaded successfully', 'saved_file': saved_file}, 201
