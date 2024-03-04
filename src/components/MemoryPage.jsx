


import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import Auth from './auth/Auth';

function MemoryPage() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const myStyle = {
    //backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/656e185ff07cdc7282e3b6e3/1701714195106-BK1Y13O24UJEQ3H5GKU7/image-asset.jpeg?format=2500w')",
    // ... other styles
    //className:"object-cover h-full w-full -m-10"
    backgroundImage: "url('https://images.pexels.com/photos/1129615/pexels-photo-1129615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
  };

  const toggleAuthModal = () => {
    setIsAuthModalOpen((prev) => !prev);
  };

  return (
    <>
      <Navbar toggleAuthModal={toggleAuthModal} auth="Login/Signup" className="w-full" />
      {isAuthModalOpen && <Auth closeModal={toggleAuthModal} />}

      <div className=" mx-auto bg-[#e393e63d]  -mt-24 -mb-5 "> {/* Wrap content in a responsive container */}

        <div style={myStyle} className="  bg-cover bg-no-repeat bg-center h-screen flex justify-center items-center shadow-slate-700 rounded-bl-[15rem]">

          <div className=' w-full'>
            <div className='w-1/2  '>
              <h1 className="text-6xl text-white font-bold  font-sans pl-5 m-1 ">
                Celebrate Life.
              </h1 >
              <p className=" text-slate-200 font-bold m-2  text-center  ">Collect your most precious memories and share them online with future generations.</p>

              <div className='m-4'>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600">
                  Create your Memory
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


<div className=' bg-[#e393e63d] -mb-8'>
      <div className="min-h-screen flex items-center justify-center flex-col mt-5">
        <div className="max-w-6xl p-8  shadow-md rounded-md flex">
          {/* Image Section 1 */}
          <div className="w-1/2 pr-8">
            <img
              src="https://images.squarespace-cdn.com/content/v1/656e185ff07cdc7282e3b6e3/5ff31c7d-549d-4dab-b387-3753a27314f0/drake+harrison.jpeg?format=1500w" // Replace with the actual path to your first image
              alt="Virtual Time Capsule Image 1"
              className="w-full h-auto rounded-md"
            />
          </div>
          {/* Text Section 1 */}
          <div className="w-1/2">
            <div className=" mt-4  m-8 p-6 rounded-md">
              <h1 className="text-5xl font-bold mb-4">Share precious memories about a <u className='text-slate-700 '>Person.</u></h1>
              <div >
                <p className="text-gray-700 p-4">
                  Remembering someone we loved can be a bittersweet experience that brings both joy and sadness.
                  The memories we have of them are treasures that live on long after they are gone. They can bring
                  a smile to our face, make us laugh, and even bring us to tears. It is important to hold onto
                  these memories and keep the love we shared with them alive in our hearts.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
      

      {/* 2nd section */}
      <div className="min-h-screen flex items-center justify-center flex-col mt-5 ">
        <div className="max-w-6xl p-8  shadow-md rounded-md flex">

          {/* Text Section 1 */}
          <div className="w-1/2">
            <div className=" mt-4  m-8 p-6 rounded-md">
              <h1 className="text-5xl font-bold mb-4">Revisit a favourite  <u className='text-slate-700 '>Place.</u></h1>
              <div >
                <p className="text-gray-700 p-4">
                Once your virtual time capsule is complete, you can share it with friends and family, 
                providing them with a unique and engaging way to experience your vacation memories. 
                This virtual memento can be revisited in the future, bringing back the joy and nostalgia
                 of your special trip.
                </p>
              </div>
            </div>
          </div>

          {/* Image Section 1 */}
          <div className="w-1/2 pr-8">

            <img
              src="https://cdn.firstcry.com/education/2022/07/30182856/My-Favorite-Place-Essay-10-Line-Short-and-Long-Essay-For-Kids.jpg" // Replace with the actual path to your first image
              alt="Virtual Time Capsule Image 1"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      </div>


      <div className="min-h-screen flex items-center justify-center flex-col mt-5">
        <div className="max-w-6xl p-8  shadow-md rounded-md flex">
          {/* Image Section 1 */}
          <div className="w-1/2 pr-8">
            <img
              src="https://shaadiwish.com/blog/wp-content/uploads/2020/07/event-planning.jpg" // Replace with the actual path to your first image
              alt="Virtual Time Capsule Image 1"
              className="w-full h-auto rounded-md"
            />
          </div>
          {/* Text Section 1 */}
          <div className="w-1/2">
            <div className=" mt-4  m-8 p-6 rounded-md">
              <h1 className="text-5xl font-bold mb-4">Relive a special  <u className='text-slate-700 '>Moment.</u>.</h1>
              <div >
                <p className="text-gray-700 p-4">
                After the virtual time capsule is created, it can be shared with the participants and their
                 loved ones, serving as a digital treasure trove of memories from the day of the special event.
                  This unique and interactive way of commemorating the event allows for revisiting and reliving
                   the joyous moments for years to come.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      </div>
    </>
  );
}

export default MemoryPage;
