from flask import Flask
from flask_restful import Api
from resources.file_management import FileManagement
from resources.transcription import Transcription
from flask_cors import CORS

app = Flask(__name__)
CORS(app,supports_credentials=True)  # Enable CORS for all routes
api = Api(app)

# API Endpoints
api.add_resource(FileManagement, '/files')
api.add_resource(Transcription, '/transcription')

if __name__ == '__main__':
    app.run(debug=False)
