// // EditMemory.jsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const EditMemory = ({ match }) => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [selectedImages, setSelectedImages] = useState([]);
//   const [previewImages, setPreviewImages] = useState([]);

//   useEffect(() => {
//     // Fetch memory details based on the ID from the URL params
//     const fetchMemoryDetails = async () => {
//       try {
//         const response = await axios.get(`/api/memories/${match.params.id}`); // Adjust the endpoint based on your API
//         const memory = response.data;

//         // Set memory details in the state
//         setTitle(memory.title);
//         setDescription(memory.description);
//         // Assuming `memory.images` is an array of image URLs
//         setPreviewImages(memory.images.map((imageUrl) => ({ preview: imageUrl })));
//       } catch (error) {
//         console.error('Error fetching memory details:', error);
//       }
//     };

//     fetchMemoryDetails(); // Fetch data when the component mounts
//   }, [match.params.id]);

//   const handleTitleChange = (e) => {
//     setTitle(e.target.value);
//   };

//   const handleDescriptionChange = (e) => {
//     setDescription(e.target.value);
//   };

//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);

//     // Update selected images
//     setSelectedImages([...selectedImages, ...files]);

//     // Update preview images
//     const previews = files.map((file) => ({ preview: URL.createObjectURL(file) }));
//     setPreviewImages([...previewImages, ...previews]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Create a FormData object to send the file
//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('description', description);

//     selectedImages.forEach((image) => {
//       formData.append('images', image);
//     });

//     try {
//       // Use axios to send a PUT request to your server for memory update
//       const response = await axios.put(`/api/memories/${match.params.id}`, formData);

//       // Handle success, e.g., show a success message
//       console.log('Memory updated successfully:', response.data);
//     } catch (error) {
//       // Handle errors, e.g., show an error message
//       console.error('Error updating memory:', error);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Edit Memory</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="title" className="block text-gray-700">
//             Title:
//           </label>
//           <input
//             type="text"
//             id="title"
//             className="w-full border rounded px-3 py-2"
//             value={title}
//             onChange={handleTitleChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="description" className="block text-gray-700">
//             Description:
//           </label>
//           <textarea
//             id="description"
//             className="w-full border rounded px-3 py-2"
//             value={description}
//             onChange={handleDescriptionChange}
//             required
//           ></textarea>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="images" className="block text-gray-700">
//             Upload Images:
//           </label>
//           <input
//             type="file"
//             id="images"
//             className="w-full border rounded px-3 py-2"
//             onChange={handleImageChange}
//             accept="image/*"
//             multiple
//           />
//         </div>
//         {previewImages.length > 0 && (
//           <div className="mb-4">
//             <label className="block text-gray-700">Image Previews:</label>
//             <div className="flex space-x-2">
//               {previewImages.map((preview, index) => (
//                 <img key={index} src={preview.preview} alt={`Preview ${index}`} className="w-20 h-20 object-cover rounded" />
//               ))}
//             </div>
//           </div>
//         )}
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
//           Update Memory
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditMemory;
 



// EditMemory.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditMemory = ({ match }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  useEffect(() => {
    if (match && match.params && match.params.id) {
      // Fetch memory details based on the ID from the URL params
      const fetchMemoryDetails = async () => {
        try {
          const response = await axios.get(`/api/memories/${match.params.id}`);
          const memory = response.data;

          setTitle(memory.title);
          setDescription(memory.description);
          setPreviewImages(memory.images.map((imageUrl) => ({ preview: imageUrl })));
        } catch (error) {
          console.error('Error fetching memory details:', error);
        }
      };

      fetchMemoryDetails();
    }
  }, [match]);

  const handleFileChange = (e) => {
    const files = e.target.files;

    // Set the selected images
    setSelectedImages([...selectedImages, ...files]);

    // Generate preview URLs for the selected images
    const previews = Array.from(files).map((file) => URL.createObjectURL(file));
    setPreviewImages([...previewImages, ...previews]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to send the updated memory data
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);

    // Append each image file to the FormData
    selectedImages.forEach((image) => {
      formData.append('images', image);
    });

    try {
      // Use axios to send a PUT request to update the memory
      const response = await axios.put(`/api/memories/${match.params.id}`, formData);

      // Handle success, e.g., show a success message
      console.log('Memory updated successfully:', response.data);
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error('Error updating memory:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Edit Memory</h2>
      <form onSubmit={handleSubmit}>
        {/* Title and Description fields */}
        {/* ... (same as CreateMemoryForm) */}

        {/* File input for uploading images */}
        <div className="mb-4">
          <label htmlFor="images" className="block text-gray-700">Upload Images:</label>
          <input
            type="file"
            id="images"
            className="w-full border rounded px-3 py-2"
            onChange={handleFileChange}
            accept="image/*"
            multiple
          />
        </div>

        {/* Display image previews */}
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

        {/* Submit button */}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
          Update Memory
        </button>
      </form>
    </div>
  );
};

export default EditMemory;
