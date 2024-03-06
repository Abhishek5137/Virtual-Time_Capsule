import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';


const CapsuleEdit = () => {
    const { capsuleId } = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [reminderDate, setReminderDate] = useState('');
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);

        setSelectedFiles([...selectedFiles, ...files]);
    }
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('reminderDate', reminderDate);

    selectedFiles.forEach((image) => {
      formData.append('selectedFiles', image);
    });

      // for (let [key, value] of formData.entries()) {
      //   console.log(key, value);
      // }

    const handleEdit = async (e) => {
        e.preventDefault();
        try {
          const res= await axios.put(`/api/capsule/update/${capsuleId}`, formData);
          if (res.status === 200) {
            console.log('capsule edited successfully:', res.data);
            setSuccess(true);
            setTimeout(() => {
              navigate(`/timecapsule/${capsuleId}`)
          }, 2000); // Redirect after 2 seconds
            }
        } catch (error) {
          console.error('Error editing capsule:', error);
          setError('Error editing memory. Please try again later.');
        }
      };

      if (error) {
        return <p className="text-red-500">{error}</p>;
      }


      return (
        <div>
          <h2 className="text-2xl font-bold mb-4">Edit Capsule</h2>
          {success && <p className="text-green-500 mb-4">Capsule edited successfully!</p>}
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
              <label htmlFor="reminderDate" className="block text-sm font-medium text-gray-700">Reminder Date</label>
              <input type='date'  id="reminderDate" value={reminderDate} onChange={e => setReminderDate(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-md w-full"></input>
            </div>
            <div className="mb-4">
              <label htmlFor="files" className="block text-sm font-medium text-gray-700">Files</label>
              <input type="file" id="files"  accept="image/*" multiple onChange={handleImageChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
            </div>
            <div className="mt-4">
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-full mr-2 hover:bg-blue-600">
                Save
              </button>
              <button onClick={() => navigate(`/capsule/${capsuleId}`)} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-400">
                Cancel
              </button>
            </div>
          </form>
        </div>
      );
    };

    export default CapsuleEdit;