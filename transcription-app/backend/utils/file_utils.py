from werkzeug.utils import secure_filename
import os

def save_file(file):
    # Ensure 'uploads' directory exists
    if not os.path.exists('uploads'):
        os.makedirs('uploads')

    # Use secure_filename to prevent potential security issues
    filename = secure_filename(file.filename)
    file_path = os.path.join('uploads', filename)

    # Save the file to the 'uploads' directory
    file.save(file_path)

    return file_path
