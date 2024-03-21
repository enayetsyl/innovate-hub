import Paper from '@mui/material/Paper';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Table from './components/Table';
import ButtonBar from './components/ButtonBar';
import { useState } from 'react';
const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true); // Sidebar open by default on larger screens

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="flex justify-start items-start gap-5 p-5">

      {/* Side bar */}
    <div className="min-w-[20%] ">
    <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar}/>
    </div>

    {/* Main bar */}
    <div className="lg:min-w-[80%] flex-1">
<Paper elevation={3}>
    {/* Nav bar */}
    <div>
    <Navbar/>
    </div>

    {/* Button Bar */}
    <div>
<ButtonBar/>
    </div>

    {/* Table */}
    <div>
    <Table/>
    </div>
    </Paper>
    </div>

    </div>
  )
}

export default Home