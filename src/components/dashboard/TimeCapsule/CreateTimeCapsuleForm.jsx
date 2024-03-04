// CreateTimeCapsuleForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const CreateTimeCapsuleForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewURLs, setPreviewURLs] = useState([]);
  const [reminderDate, setReminderDate] = useState('');

  const handleFileChange = (e) => {
    const files = e.target.files;

    // Set the selected files
    setSelectedFiles([...selectedFiles, ...files]);

    // Generate preview URLs for the selected files
    const newPreviewURLs = Array.from(files).map(file => URL.createObjectURL(file));
    setPreviewURLs([...previewURLs, ...newPreviewURLs]);
  };

  const removeImage = (index) => {
    const updatedFiles = [...selectedFiles];
    const updatedPreviews = [...previewURLs];

    updatedFiles.splice(index, 1);
    updatedPreviews.splice(index, 1);

    setSelectedFiles(updatedFiles);
    setPreviewURLs(updatedPreviews);
  };

  const handleSubmit = async (e) => {
   // e.preventDefault();

    // Create a FormData object to send the files
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('reminderDate', reminderDate);

    // Append each selected file to the FormData object
    selectedFiles.forEach((file, index) => {
      formData.append(`file${index + 1}`, file);
    });

    try {
      // to checks the upload data
      for (const entry of formData.entries()) {
        console.log(entry);
      }


      // Use axios to send a POST request to your server for file upload
      const response = await axios.post('/api/upload', formData);

      // Handle success, e.g., show a success message
      console.log('Files uploaded successfully:', response.data);

      // Reset form fields and previews after successful upload
      setTitle('');
      setDescription('');
      setReminderDate('');
      setSelectedFiles([]);
      setPreviewURLs([]);
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error('Error uploading files:', error);
    }
  };

  

  return (
    <div className="max-w-xl mx-auto p-8 lg:p-12 bg-blue-50 rounded-lg shadow-lg  sm:max-w-xl  md:max-w-2xl lg:max-w-3xl ">
      <h2 className="text-2xl font-bold mb-4">Create Time Capsule</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700">Title:</label>
          <input
            type="text"
            id="title"
            className="w-full border rounded px-3 py-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700">Description:</label>
          <textarea
            id="description"
            className="w-full border rounded px-3 py-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="reminderDate" className="block text-gray-700">Reminder Date:</label>
          <input
            type="date"
            id="reminderDate"
            className="w-full border rounded px-3 py-2"
            value={reminderDate}
            onChange={(e) => setReminderDate(e.target.value)}
            required
          />
        </div>




        <div className="mb-4">
          <label htmlFor="file" className="block text-gray-700">Upload Images:</label>
          <input
            type="file"
            id="file"
            className="w-full border rounded px-3 py-2"
            onChange={handleFileChange}
            accept="image/*"
            multiple
            required
          />
        </div>
        {previewURLs.length > 0 && (
          <div className="mb-4">
            <label className="block text-gray-700">Image Previews:</label>
            <div className="flex flex-wrap gap-2">
              {previewURLs.map((previewURL, index) => (
                <div key={index} className="relative   ">
                  <img src={previewURL} alt={`Preview ${index + 1}`} className="w-32 h-24 object-cover rounded" />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-0 right-0   h-6 w-6  text-red-500 bg-slate-700 rounded-full"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}



        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600    focus:outline-none focus:ring focus:border-blue-300">
          Create Time Capsule
        </button>
      </form>
    </div>
  );
};

export default CreateTimeCapsuleForm;
