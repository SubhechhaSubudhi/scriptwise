import { useState } from 'react';

export default function upload() {
    const [selectedFile, setSelectedFile] = useState(null);

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
                mode: 'cors',
                credentials: 'include',  // Include credentials such as cookies
                headers: {'Access-Control-Allow-Origin': 'http://localhost:3000',  // Allow requests from any origin
                },
            });

            if (response.ok) {
                console.log('File uploaded successfully');
                // Add any additional logic or redirection here
            } else {
                console.error('Failed to upload file', response.statusText);
            }
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div>
            <h1>Upload File</h1>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
}
