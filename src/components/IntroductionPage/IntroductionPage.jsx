// IntroductionPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    // height: "",
    // width:"100%",
    backgroundImage:
      "url(./src/assets/vtc.jpg)",
    // fontSize: "50px",
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
  }
  return (
    <>
      <Navbar toggleAuthModal={toggleAuthModal} auth="Login/Signup" />
      {/* Auth Modal */}
      {isAuthModalOpen && <Auth closeModal={toggleAuthModal} />}

<div className='bg-[#e393e63d] -mb-6 '>
      <div style={myStyle} className="  bg-cover bg-no-repeat bg-center h-screen flex items-center justify-center flex-col shadow-2xl   ">
        
      <div className=' w-full'>
            <div className='w-1/2  '>
              <h1 className="text-5xl text-emerald-50 font-bold  font-sans m-1 ">
              Virtual Time Capsule App : 
              </h1 >
              <h2 className='font-bold  font-sans m-1 text-3xl'>Relieving Your Memories In Future</h2>
              <p className=" text-emerald-100 font-bold m-2   ">
              Virtual Time Capsule is committed to preserving  <br />
              and sharing your thoughts,memories, and ideas <br />
              with  anyone in the future. Our vision is to <br />
              create an   easy-to-use system for preserving  <br />
              life's memories throughout the years.
                </p>

              <div className='m-4'>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600">
                  Create your virtual time Capsule
                </button>
              </div>
            </div>
      </div>
        
        
        
        
        
        
        {/* Unveiling Memories: A Journey Through Time with Virtual Time Capsules */}
        
        {/* <div className=' bg-slate-200 rounded-xl h-14    -mt-24 mb-16 flex items-center justify-center'>
          <h2 className="text-2xl text-blue-900 font-bold font-serif text-center  p-2 ">
            Virtual Time Capsule App : Relieving Your Memories In Future
            
          </h2>

          <button className="bg-blue-500 text-white px-4 py-2 m-1 rounded-xl text-sm hover:bg-blue-600">
            Create VTC
          </button>
        </div> */}

        {/* <div className="  w-full  rounded-md items-center justify-center  flex ">
          <div className="w-[30%] ">
            <div className="text-center p-3 rounded-md  pb-12 ">
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
        </div> */}
      </div>


      <div className="min-h-screen flex items-center justify-center flex-col mt-8  p-8">
        <div className="max-w-5xl p-8  shadow-2xl rounded-md flex">
          {/* Text Section 1 */}
          <div className="w-1/2">
            <div className=" mt-4  m-8 p-6 shadow-2xl rounded-md">
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
          <div className="w-1/2 rounded-md">
            <div className="shadow-2xl mt-4  m-8 p-6 rounded-md">
              <h2 className="text-2xl font-bold mb-2">Cherish Everyday Moments</h2>
              <p className="text-gray-700">
                Life goes by so fast. Sometimes you will never know the value of a moment until it becomes a memory.
                Preserve and share those memories with Virtual Time Capsule.
                Relive special moments or see loved ones long after they're gone.
              </p>

              <h2 className="text-2xl font-bold mb-2">Relive a special moment</h2>
              <p className="text-gray-700">
                After the virtual time capsule is created,
                it can be shared with the participants and their loved ones,
                serving as a digital treasure trove of memories from the day of the special event.
                This unique and interactive way of commemorating the event allows for revisiting and reliving the joyous moments for years to come
              </p>

            </div>
          </div>
        </div>

        {/* Image Section 3 */}
        <div className="max-w-5xl p-8 shadow-2xl rounded-md flex mt-8">

          <div className="w-1/2">
            <div className="mt-4 border shadow-2xl rounded-md p-8 m-4">
              <h2 className="text-2xl font-bold mb-2">Benefits of Digital Memory Preservation</h2>
              <p className="text-gray-700">
                {/* Virtual Time Capsule is committed to preserving and sharing your thoughts, memories, and ideas with anyone in the future. Our vision is to create an easy-to-use system for preserving life's memories throughout the years. */}
                Preserving memories is a timeless endeavor that has been cherished by generations.
                From handwritten letters and photo albums to scrapbooks and diaries,
                we have long sought ways to capture the essence of our lives and create lasting
                legacies for future generations. But as technology continues to evolve, so too does our
                approach to digital memory preservation.

                In this digital age, traditional methods are being complemented  and in
                some cases even replaced  by the wonders of digital memory preservation.
                With the help of innovative apps and platforms, we now have the ability to not only preserve our
                stories but also curate them in a way that is tailored and meaningful. So, join us as we explore how these new
                tools can revolutionize the way we capture, store, and share our most precious memories!


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
        <div className='mt-4 border shadow-2xl rounded-md p-8 m-4'>
        <h2 className="text-2xl font-bold mb-2">upcoming Create your VR video</h2>
        <button
                className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-600"
              >
                Create VR
              </button>
        </div>
      </div>
      </div>
    </>
  );
};

export default IntroductionPage;
