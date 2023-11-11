from flask import Flask
from flask_restful import Api
from resources.file_management import FileManagement
from resources.transcription import Transcription

app = Flask(__name__)
api = Api(app)

# API Endpoints
api.add_resource(FileManagement, '/files')
api.add_resource(Transcription, '/transcription')

if __name__ == '__main__':
    app.run(debug=False)
