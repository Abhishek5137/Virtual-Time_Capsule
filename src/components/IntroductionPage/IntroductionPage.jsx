// IntroductionPage.jsx
import React , { useState }  from 'react';
import Navbar from '../Navbar/Navbar';
import Auth from '../auth/Auth';

const IntroductionPage = () => {

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const toggleAuthModal = () => {
    setIsAuthModalOpen((prev) => !prev);
  };


  const myStyle = {
    // backgroundImage:
    //     "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
    height: "100vh",
    backgroundImage:
    "url(/src/assets/vtc.jpg)",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
}
  return (
    <>
    <Navbar toggleAuthModal={toggleAuthModal} auth ="Login/Signup"/>
      {/* Auth Modal */}
      {isAuthModalOpen && <Auth closeModal={toggleAuthModal} />}


  <div style={myStyle} className="  flex items-center justify-center flex-col  ">
    <div className=' bg-slate-200 rounded-xl h-14    -mt-24 mb-16 flex items-center justify-center'>
             <h2 className="text-xl text-blue-900 font-bold font-serif text-center  p-2 ">
                      Unveiling Memories: A Journey Through Time with Virtual Time Capsules
              </h2>

                      <button className="bg-blue-500 text-white px-4 py-2 m-1 rounded-xl text-sm hover:bg-blue-600">
                         Create VTC
                      </button>
      </div>
            
      <div className="  w-full shadow-lg rounded-md items-center justify-center  flex ">
            
        
        <div className="w-[30%] ">
          <div className="text-center p-3 rounded-md shadow-xl pb-12 bg-gray-200">
            <h2 className="text-3xl font-bold mb-2">Our Mission and Vision</h2>
            <p className="text-gray-700  text-2xl">
              Virtual Time Capsule is committed to preserving and sharing your thoughts, memories, and ideas with anyone in the future. Our vision is to create an easy-to-use system for preserving life's memories throughout the years.
            </p>
            <button
            className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-600"
          >
            Create VTC
          </button>
          </div>
        </div>
        <div className="w-[60%] mt-4">
          <img
            //src="\src\assets\vtc.jpg" // Replace with the actual path to your third image
            //alt="Virtual Time Capsule Image 3"
            className="w-full h-auto rounded-md"
          />
        </div>
      </div>
  </div>


    <div className="min-h-screen flex items-center justify-center flex-col mt-8">
      <div className="max-w-5xl p-8  shadow-md rounded-md flex">
        {/* Text Section 1 */}
        <div className="w-1/2">
          <div className="text-center mt-4 bg-gray-300 m-8 p-6 rounded-md">
          <h1 className="text-3xl font-bold mb-4">Preserving Your Story</h1>
            
            <p className="text-gray-700 p-4">
              The ability to send your life stories to anyone at a later date in the future. Simply upload the memory, enter the recipient's information, and pick a date in the future. These files are then safely stored and sent back until the desired date; creating a nice nostalgic surprise.
            </p>
            <button
            className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-600"
          >
            Preserve Your Stories
          </button>
          </div>
        </div>
        {/* Image Section 1 */}
        <div className="w-1/2 pr-8">
          
          <img
            src="https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/website/uploaded/blogimagestimecapsule1-1632271858.jpg" // Replace with the actual path to your first image
            alt="Virtual Time Capsule Image 1"
            className="w-full h-auto rounded-md"
          />
        </div>
      </div>

      {/* Image Section 2 */}
      <div className="max-w-5xl p-8  shadow-md rounded-md flex mt-8">
        <div className="w-1/2 pr-8">
          <img
            src="\src\assets\memoriesimg.png" // Replace with the actual path to your second image
            alt="Virtual Time Capsule Image 2"
            className="w-full h-auto rounded-md"
          />
        </div>
        <div className="w-1/2 bg-gray-300 rounded-md">
          <div className="text-center mt-4 bg-gray-400 m-8 p-6 rounded-md">
            <h2 className="text-2xl font-bold mb-2">Cherish Everyday Moments</h2>
            <p className="text-gray-700">
              Life goes by so fast. Sometimes you will never know the value of a moment until it becomes a memory. Preserve and share those memories with Virtual Time Capsule. Relive special moments or see loved ones long after they're gone.
            </p>
          </div>
        </div>
      </div>

      {/* Image Section 3 */}
      <div className="max-w-5xl p-8 bg-gray-300 shadow-md rounded-md flex mt-8">
        
        <div className="w-1/2">
          <div className="text-center mt-4 border shadow-lg rounded-md p-8 m-4">
            <h2 className="text-2xl font-bold mb-2">Our Mission and Vision</h2>
            <p className="text-gray-700">
              Virtual Time Capsule is committed to preserving and sharing your thoughts, memories, and ideas with anyone in the future. Our vision is to create an easy-to-use system for preserving life's memories throughout the years.
            </p>
          </div>
        </div>
        <div className="w-1/2 pr-8">
          <img
            src="\src\assets\timecapsuleImg.jpeg" // Replace with the actual path to your third image
            alt="Virtual Time Capsule Image 3"
            className="w-full h-auto rounded-md"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default IntroductionPage;
