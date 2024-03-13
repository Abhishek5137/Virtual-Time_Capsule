import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const CapsuleDetail = () => {
  const { capsuleId } = useParams();
  const [capsule, setCapsule] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state
  const navigate = useNavigate();



  // back to dashboard
  const handleRedirect = () => {

    navigate('/dashboard');
  }


  useEffect(() => {
    const fetchCapsule = async () => {
      try {
        const response = await axios.get(`/api/capsule/capsule/${capsuleId}`);
        console.log(response.data);
        setCapsule(response.data);
        setLoading(false); // Set loading to false when data is fetched
        setError(null);
      } catch (error) {
        console.error('Error fetching capsule:', error);
        setError('Error fetching capsule. Please try again later.');
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchCapsule();
  }, [capsuleId]);

  const handleEdit = () => {
    navigate(`/capsule/edit/${capsuleId}`);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/capsule/delete/${capsuleId}`); // Corrected endpoint
      // Optionally, show success message or update state
      // Redirect to capsule list or another page
      alert("Deleted sucessfully!")
      navigate('/dashboard');
    } catch (error) {
      console.error('Error deleting capsule:', error);
      // Optionally, show error message
    }
  };

  if (loading) {
    return <p>Loading...</p>; // Show loading indicator while fetching data
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <>
      <div className=' '>
        <div className='flex justify-center items-center flex-col '>
          <div className='w-3/4 flex justify-between  bg-blue-200 mt-5 mb-4 p-1 rounded-md'>
            <button onClick={handleRedirect}
              type="button"
              className=" right-0 p-2  text-white bg-slate-700 hover:bg-slate-900 rounded-md"
            >
              Back
            </button>
            <h2 className="text-2xl font-bold w-full  text-center"> Time Capsule Details</h2>

            <button
              className=" right-0 p-2  text-white bg-slate-700 hover:bg-slate-900 rounded-md">Share</button>
          </div>


          <div className='w-3/4  '>
            <div className="bg-white rounded-lg shadow-md p-4">

              <h3 className="text-lg font-bold mb-2">Title : {capsule.title}</h3>
              <p className="mb-2"> Description :- {capsule.description}</p>
              <p className="mb-2"> Reminder Date : {capsule.reminderDate}</p>
              <div className="grid grid-cols-3 gap-2">
                {capsule.selectedFiles && capsule.selectedFiles.map((file, index) => (
                  <img key={index} src={file} alt={`Memory ${capsuleId} Image ${index + 1}`} className="w-full h-auto" />
                ))}
              </div>
              <div className="mt-4">
                <button onClick={handleEdit} className="bg-blue-500 text-white px-4 py-2 rounded-full mr-2 hover:bg-blue-600">
                  Edit
                </button>
                <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default CapsuleDetail;
