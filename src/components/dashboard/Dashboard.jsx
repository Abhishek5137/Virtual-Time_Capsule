// Dashboard.jsx
import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import UserDashboard from './UserDashboard';
import TimeCapsuleList from './TimeCapsule/VirtualTimeCapsuleList';
import CreateTimeCapsuleForm from './TimeCapsule/CreateTimeCapsuleForm';
import EditTimeCapsuleForm from './TimeCapsule/EditTimeCapsuleForm';
import CreateMemory from './MemorySection/CreateMemory'
import EditMemory from './MemorySection/EditMemory';
import MemoryList from './MemorySection/MemoryList';
import Navbar from '../Navbar/Navbar';
import Card from '../Card';

const Dashboard = () => {

  const links = [
    { to: '/dashboard/createtimecapsule', label: 'Create Time Capsule' },
    { to: '/dashboard/edittimecapsule', label: 'Edit Time Capsules' },
    { to: '/dashboard/', label: 'Show VTC' },
    { to: '/dashboard/creatememory', label: 'Create Memory' },
    { to: '/dashboard/editmemory', label: 'Edit Memory' },
    { to: '/dashboard/memorylist', label: 'Memories' },
  ];


  return (
    <>
      <Navbar auth="logout" />
      <div className="  flex h-screen  bg-slate-50 md:w-full lg:w-full xl:w-full mx-auto p-4">
        {/* Aside or Sidebar */}
        <aside className="w-1/6 h-3/6 m-3 border rounded bg-slate-100 relative">
          {/* List of Operations or Links */}
          <ul>
            {/* <li className=' p-2 m-1 rounded-md  bg-slate-50 hover:bg-blue-200'> 
              <Link to="/dashboard" className="text-gray-700  font-bold hover:underline">
                Dashboard
              </Link>
            </li> */}
            {/*
            <li className=' p-2 m-1 rounded-md bg-slate-50 hover:bg-blue-200'>
              <Link to="/dashboard/createtimecapsule" className="text-gray-700  font-bold hover:underline">
                Create Time Capsule
              </Link>
            </li>
            <li className=' p-2 m-1 rounded-md  bg-slate-50 hover:bg-blue-200'>  
              <Link to="/dashboard/edittimecapsule" className="text-gray-700  font-bold hover:underline">
                Edit Time Capsules
              </Link>
            </li>
            <li className=' p-2 m-1 rounded-md  bg-slate-50 hover:bg-blue-200'>
              <Link to="/dashboard/" className="text-gray-700  font-bold hover:underline">
                Show VTC
              </Link>
            </li>
            
            <li className=' p-2 m-1 rounded-md  bg-slate-50 hover:bg-blue-200'>
              <Link to="/dashboard/creatememory" className="text-gray-700  font-bold hover:underline">
                Create Memory
              </Link>
            </li>
            <li className=' p-2 m-1 rounded-md  bg-slate-50 hover:bg-blue-200'>
              <Link to="/dashboard/editmemory" className="text-gray-700  font-bold hover:underline">
                Edit Memory
              </Link>
            </li>
            <li className=' p-2 m-1 rounded-md  bg-slate-50 hover:bg-blue-200'>
              <Link to="/dashboard/memorylist" className="text-gray-700  font-bold hover:underline">
                Memories
              </Link>
            </li>
          */}
            {/* Add more links or operations as needed */}
          </ul>


          <ul>
            {links.map((link) => (
              <li key={link.to} className='p-2 m-1 rounded-md  
        transition ease-in-out  bg-slate-50 hover:-translate-y-1 hover:scale-105 hover:bg-blue-200 duration-300
        '>
                <Link to={link.to} className='text-gray-700 font-bold hover:underline'>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

        </aside>

        {/* Main Content */}
        <div className=" w-full  flex  ">
          <div className="w-4/5 border  rounded-md p-4 m-3     overflow-y-scroll no-scrollbar ">
            <main >
              {/* Routes for Main Content */}
              <Routes>
                {/* <Route path="/" element={<UserDashboard />} /> */}
                <Route path="/" element={<TimeCapsuleList />} />
                <Route path="/createtimecapsule" element={<CreateTimeCapsuleForm />} />
                <Route path="/edittimecapsule" element={<EditTimeCapsuleForm />} />
                <Route path="/creatememory" element={<CreateMemory />} />
                <Route path="/editmemory" element={<EditMemory />} />
                <Route path="/memorylist" element={<MemoryList />} />
                {/* Add more routes for other dashboard sections as needed */}
              </Routes>
            </main>
          </div>


          <div className='w-1/5 bg-blue-100 border p-2 m-3 rounded-md flex flex-col  overflow-y-scroll no-scrollbar'>
            <div>
              <div className='p-1 m-1 rounded-md bg-slate-100 '>
                <h1 className="text-gray-700  font-bold text-center  ">Timecapsule</h1>
              </div>
                  <div className='flex flex-wrap bg-slate-50 rounded-md m-1 p-2 shadow-xl  items-center justify-center'>
                    <Card title="abhishek" backgroundImage="\src\assets\myvtc-logo.png" />
                    <Card title="abhishek" backgroundImage="\src\assets\memoriesimg.png" />
                    <Card title="Your Title" backgroundImage="url('/path/to/your/image.jpg')" />
                    <Card title="Your Title" backgroundImage="url('/path/to/your/image.jpg')" />
                  </div>
            </div>


            <div>
              <div className='p-1 m-1 rounded-md bg-slate-100'>
                <h1 className="text-gray-700  font-bold text-center ">Memories</h1>
              </div>
              <div className='flex flex-wrap bg-slate-50 rounded-md m-1 p-2 shadow-xl justify-center items-center'>
                <Card title="Your Title" backgroundImage="url('/path/to/your/image.jpg')" />
                <Card title="Your Title" backgroundImage="url('/path/to/your/image.jpg')" />
              </div>
            </div>
          </div>

        </div>





      </div>
    </>
  );
};

export default Dashboard;
