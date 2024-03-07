import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Modal from "react-modal";





const CreateTimeCapsuleForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [reminderDate, setReminderDate] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

// handle file submit
  // const handleChangeFiles = (e) => {
  //   const files = e.target.files;
  //   if (files.length > 0) {
  //     setSelectedFiles(Array.from(files));
  //   } else {
  //     setSelectedFiles([]);
  //   }
  // };


  const handleChangeFiles = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      setSelectedFiles((prevFiles) => [...prevFiles, ...Array.from(files)]);
    }
  };

  const handleDeleteFile = (index) => {
    setSelectedFiles((prevFiles) => {
      const updatedFiles = [...prevFiles];
      updatedFiles.splice(index, 1);
      return updatedFiles;
    });
  };

  const renderImagePreviews = () => {
    return selectedFiles.map((file, index) => (
      <div key={index} className="relative inline-block">
        <img
          src={URL.createObjectURL(file)}
          alt={`Preview ${index + 1}`}
          className="w-32 h-24 mr-2 mb-2 object-cover rounded"
        />
        <button
          type="button"
          onClick={() => handleDeleteFile(index)}
          className="absolute top-0 right-0 h-6 w-6  text-red-500 bg-slate-300 hover:bg-slate-700 rounded-full"
        >
          X
        </button>
      </div>
    ));
  };


// redirect to dashboard
  const navigate = useNavigate();
  const handleRedirect = () => {
    
    navigate('/dashboard');
  }

// for the dialogbox
const handleModalClose = () => {
  setIsModalOpen(false);
};

const handleModalOpen = () => {
  setIsModalOpen(true);
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
      handleModalOpen();
      //alert(" Time Capsule Created Successfully!");
      //console.log("Capsule Created");
    } else {
      console.log("Error creating capsule");
    }
  }


  return (
    <>
    <div className=" bg-slate-700">
    <div className="md:flex  max-w-md mx-auto my-auto sm:max-w-6xl xl:h-screen">
      <div className="my-auto mx-auto p-8  bg-blue-50 rounded-lg shadow-lg sm:w-2/3  ">
      <div className='w-full flex  items-center justify-end '>
      <button onClick={handleRedirect}
              type="button"
              className=" right-0 h-6 w-6  text-red-500 bg-slate-300 hover:bg-slate-700 rounded-full"
            >
              X
            </button>
            </div>
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




              {  /* image preview section */}
 
        <div className="flex mb-4">{renderImagePreviews()}</div>

          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
            Create Time Capsule
          </button>

        
        </form>
      </div>
    </div>
    </div>

      

    <Modal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        contentLabel="Capsule Created Modal"
        className={{}}

      >
        <div className="flex justify-center h-screen items-center">
        <div className=" container shadow-2xl w-1/2 flex justify-center items-center flex-col rounded-xl bg-slate-400">
        <h2 className="font-bold text-gray-900 m-5 text-4xl">Time Capsule Created Successfully!</h2>
        <p>What would you like to do?</p>
        <button onClick={handleRedirect}
        className="bg-blue-500 text-white px-4 py-2 rounded-md m-3 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >Go to Dashboard</button>
        <button onClick={handleModalClose}
        className="bg-blue-500 text-white px-4 py-2 rounded-md m-3 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >Create Another</button>
        </div>
        </div>
      </Modal>
    </>

  )
}

export default CreateTimeCapsuleForm;