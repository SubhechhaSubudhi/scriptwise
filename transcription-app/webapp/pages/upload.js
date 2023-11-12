import { useState } from 'react';
import '../app/globals.css';  // Import the global styles

export default function Upload() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            console.error('No file selected');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await fetch('http://localhost:5000/files', {
                method: 'post',
                body: formData,
                credentials: 'include',
                headers: {
                    'Access-Control-Allow-Origin': 'http://localhost:3000',
                },
            });

            if (response.ok) {
                console.log('File uploaded successfully');
                setUploadStatus('File uploaded successfully!');
            } else {
                console.error('Failed to upload file:', response.statusText);
                setUploadStatus('Failed to upload file. Please try again.');
            }
        } catch (error) {
            console.error('Error uploading file:', error);
            setUploadStatus('An error occurred while uploading the file.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <h1 className="text-4xl font-bold mb-8">Upload File</h1>
            <input type="file" onChange={handleFileChange} className="mb-6 p-4 border rounded" />
            <button onClick={handleUpload} className="bg-blue-500 text-white px-6 py-3 rounded">
                Upload
            </button>
            {uploadStatus && (
                <p className={`mt-6 text-xl ${uploadStatus.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
                    {uploadStatus}
                </p>
            )}
        </div>
    );
}
