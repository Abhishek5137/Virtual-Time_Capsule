import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const MemoryEdit = () => {
  const { memoryId } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    // Update selected images
    setSelectedFiles([...selectedFiles, ...files]);

    // Update preview images
    // const previews = files.map((file) => URL.createObjectURL(file));
    // setPreviewImages([...previewImages, ...previews]);
  };


  const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);

    selectedFiles.forEach((image) => {
      formData.append('selectedFiles', image);
    });

    // for (let [key, value] of formData.entries()) {
    //     console.log(key, value);
    //   }

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const res= await axios.put(`/api/memory/update/${memoryId}`, formData);
      if (res.status === 200) {
        console.log('Memory edited successfully:', res.data);
        setSuccess(true);
        setTimeout(() => {
          navigate(`/memory/${memoryId}`)
      }, 2000); // Redirect after 2 seconds
        }
    } catch (error) {
      console.error('Error editing memory:', error);
      setError('Error editing memory. Please try again later.');
    }
  };

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Edit Memory</h2>
      {success && <p className="text-green-500 mb-4">Memory edited successfully!</p>}
      <form onSubmit={handleEdit} className="bg-white rounded-lg shadow-md p-4">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea id="description" value={description} onChange={e => setDescription(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-md w-full"></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="files" className="block text-sm font-medium text-gray-700">Files</label>
          <input type="file" id="files"  accept="image/*" multiple onChange={handleImageChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div className="mt-4">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-full mr-2 hover:bg-blue-600">
            Save
          </button>
          <button onClick={() => navigate(`/memory/${memoryId}`)} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-400">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default MemoryEdit;
