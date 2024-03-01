// CreateMemory.jsx
import React, { useState } from 'react';
import axios from 'axios';

const CreateMemory = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    // Update selected images
    setSelectedImages([...selectedImages, ...files]);

    // Update preview images
    const previews = files.map((file) => URL.createObjectURL(file));
    setPreviewImages([...previewImages, ...previews]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to send the file
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);

    selectedImages.forEach((image) => {
      formData.append('images', image);
    });

    try {
      // Use axios to send a POST request to your server for memory creation
      const response = await axios.post('/api/memories', formData);

      // Handle success, e.g., show a success message
      console.log('Memory created successfully:', response.data);
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error('Error creating memory:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Create Memory</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700">
            Title:
          </label>
          <input
            type="text"
            id="title"
            className="w-full border rounded px-3 py-2"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700">
            Description:
          </label>
          <textarea
            id="description"
            className="w-full border rounded px-3 py-2"
            value={description}
            onChange={handleDescriptionChange}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="images" className="block text-gray-700">
            Upload Images:
          </label>
          <input
            type="file"
            id="images"
            className="w-full border rounded px-3 py-2"
            onChange={handleImageChange}
            accept="image/*"
            multiple
            required
          />
        </div>
        {previewImages.length > 0 && (
          <div className="mb-4">
            <label className="block text-gray-700">Image Previews:</label>
            <div className="flex space-x-2">
              {previewImages.map((preview, index) => (
                <img key={index} src={preview} alt={`Preview ${index}`} className="w-20 h-20 object-cover rounded" />
              ))}
            </div>
          </div>
        )}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
          Create Memory
        </button>
      </form>
    </div>
  );
};

export default CreateMemory;
