// Dashboard.jsx
import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import UserDashboard from './UserDashboard';
import TimeCapsuleList from './TimeCapsule/TimeCapsuleList';
import CreateTimeCapsuleForm from './TimeCapsule/CreateTimeCapsuleForm';
import EditTimeCapsuleForm from './TimeCapsule/EditTimeCapsule';
import CreateMemory from './MemorySection/CreateMemory'
import EditMemory from './MemorySection/EditMemory';
import MemoryList from './MemorySection/MemoryList';
import Navbar from '../Navbar/Navbar';
import Card from '../Card';

const Dashboard = () => {
  return (
    <>
      <Navbar auth="logout" />
      <div className="  flex w-full h-screen  bg-slate-50">
        {/* Aside or Sidebar */}
        <aside className="w-1/6 h-3/6 m-3 border rounded bg-slate-100 relative">
          {/* List of Operations or Links */}
          <ul>
            <li className=' p-2 m-1 rounded-md  bg-slate-50 hover:bg-blue-200'> 
              <Link to="/dashboard" className="text-gray-700  font-bold hover:underline">
                Dashboard
              </Link>
            </li>
            <li className=' p-2 m-1 rounded-md  bg-slate-50 hover:bg-blue-200'>
              <Link to="/dashboard/timecapsulelist" className="text-gray-700  font-bold hover:underline">
                Time Capsules
              </Link>
            </li>
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
              <Link to="/dashboard/memorylist" className="text-gray-700  font-bold hover:underline">
                Memories
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
            {/* Add more links or operations as needed */}
          </ul>
        </aside>

        {/* Main Content */}
        <div className=" w-full  flex overflow-y-scroll no-scrollbar ">
        <div className="w-1/2 border  rounded-md p-4 m-3">
        <main >
          {/* Routes for Main Content */}
          <Routes>
            <Route path="/" element={<UserDashboard />} />
            <Route path="/timecapsulelist" element={<TimeCapsuleList />} />
            <Route path="/createtimecapsule" element={<CreateTimeCapsuleForm />} />
            <Route path="/edittimecapsule" element={<EditTimeCapsuleForm />} />
            <Route path="/creatememory" element={<CreateMemory />} />
            <Route path="/editmemory" element={<EditMemory />} />
            <Route path="/memorylist" element={<MemoryList />} />
            {/* Add more routes for other dashboard sections as needed */}
          </Routes>
        </main>
        </div>


        <div className='w-1/2 bg-blue-100 border p-2 m-3 rounded-md flex flex-col '>
          <div>
            <div className='p-1 m-1 rounded-md bg-slate-100'>
          <h1 className="text-gray-700  font-bold text-center ">Timecapsule</h1>
          </div>
           <div className='flex flex-wrap bg-slate-50 rounded-md m-1 p-2 shadow-xl  items-center justify-center'> 
               
               <Card title="abhishek" backgroundImage="\src\assets\myvtc-logo.png"/>
               <Card title="abhishek" backgroundImage="\src\assets\memoriesimg.png"/>
               <Card title="Your Title" backgroundImage="url('/path/to/your/image.jpg')"/>
               <Card title="Your Title" backgroundImage="url('/path/to/your/image.jpg')"/>
               <Card title="Your Title" backgroundImage="url('/path/to/your/image.jpg')"/>
            </div>
            </div>


            <div>
              <div className='p-1 m-1 rounded-md bg-slate-100'>
                <h1 className="text-gray-700  font-bold text-center ">Memories</h1>
              </div>

             <div className='flex flex-wrap bg-slate-50 rounded-md m-1 p-2 shadow-xl justify-center items-center'> 
                 <Card title="Your Title" backgroundImage="url('/path/to/your/image.jpg')"/>
                 <Card title="Your Title" backgroundImage="url('/path/to/your/image.jpg')"/>
               
              </div>
            </div>
        

          
         </div>

      </div>
      
      
      
      
      
      </div>
    </>
  );
};

export default Dashboard;
