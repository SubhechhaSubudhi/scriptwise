# Transcription Web App

## Overview
This Transcription Web App is designed to provide an efficient and user-friendly interface for transcribing, managing, and editing audio and video files. It features a robust frontend built with Next.js and a powerful Python Flask backend.

## Features
- File Upload and Management
- Automatic Speech-to-Text Transcription
- Time-Synced Transcript Display
- Editable Transcripts with Time Codes
- Search Functionality within Transcript
- Automatic Caption Generation
- Customization Options for Captions
- Export Options for Transcripts and Captions
- Basic Analytics

## Getting Started

### Prerequisites
- Node.js (for Next.js frontend)
- Python 3 (for Flask backend)
- Git (optional, for cloning the repository)

### Installation

1. **Clone the Repository (Optional)**
   ```bash
   git clone [URL_of_Your_Repository]
   cd transcription-app
   ```

2. **Set up the Backend**
   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Install the required dependencies (creating virtual env is recommended):
     ```bash
     pip install flask jinja2 markupsafe flask_restful
     ``` 
   - Start the Flask server:
     ```bash
     python app.py
     ```

3. **Set up the Frontend**
   - Open a new terminal and navigate to the frontend directory:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the Next.js development server:
     ```bash
     npm run dev
     ```

### Usage
After starting both the frontend and backend servers, you can access the web app at `http://localhost:3000` in your browser.

## Contributing
Contributions to this project are welcome. Please follow the standard fork-and-pull request workflow.
