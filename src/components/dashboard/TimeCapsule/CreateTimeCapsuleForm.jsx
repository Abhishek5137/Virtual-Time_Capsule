import { useState } from "react";

const CreateTimeCapsuleForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [reminderDate, setReminderDate] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);


  const handleChangeFiles = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      setSelectedFiles(Array.from(files));
    } else {
      setSelectedFiles([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("reminderDate", reminderDate);
  
    selectedFiles.forEach((file) => {
      formData.append("selectedFiles", file);
    });
  
    // Corrected loop
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
  
    const response = await fetch("api/capsule/create", {
      method: "POST",
      body: formData,
    });
  
    if (response.ok) {
      console.log("Capsule Created");
    } else {
      console.log("Error creating capsule");
    }
  }
  

  return (
    <div className="max-w-xl mx-auto p-8 lg:p-12 bg-blue-50 rounded-lg shadow-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl ">
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
            onChange={handleChangeFiles}
            accept="image/*"
            multiple
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
          Create Time Capsule
        </button>




    </form>
    </div>

  
  )}

export default CreateTimeCapsuleForm;