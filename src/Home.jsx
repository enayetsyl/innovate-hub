import { IoIosMenu } from "react-icons/io";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import ButtonBar from "./components/ButtonBar";
import { useState } from "react";
import BottomBar from "./components/BottomBar";
import { IoMdClose } from "react-icons/io";
const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); 
  const [searchQuery, setSearchQuery] = useState(''); // State for search string storage
  const [checkedRows, setCheckedRows] = useState([]);
  // Function for sidebar open in small and medium screen

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  
  return (
    <div className="relative flex justify-start items-start gap-4 lg:p-5 p-2 ">
      {/* Side bar */}
      {/* Hamburger menu icon  */}
      <div className={`absolute top-2 left-5 text-3xl lg:hidden ${sidebarOpen ? 'hidden' : 'block'}`}  onClick={toggleSidebar}>
        <IoIosMenu/>
      </div>

      {/* small screen sidebar close icon */}
      <div className={`duration-700 absolute top-2 left-80  text-3xl lg:hidden z-20 ${sidebarOpen ? 'block' : 'hidden'}`}  onClick={toggleSidebar}>
        <IoMdClose/>
      </div>

    {/* Sidebar */}
      <div className={`duration-500 min-w-[350px] max-w-[350px] ${sidebarOpen ? 'absolute bg-white z-10 top-0 left-0' : 'absolute -left-[200%]'} lg:block lg:relative lg:left-0`} >
        {/* absolute -left-[200%] */}
        <Sidebar  />
      </div>

      {/* Main bar */}
      <div className=" border border-zinc-400 rounded-xl flex-auto min-w-[760px] ">
        <div>
          {/* Nav bar */}
          <div>
            <Navbar setSearchQuery={setSearchQuery}/>
          </div>

          {/* Button Bar */}
          <div>
            <ButtonBar />
          </div>

          {/* Table */}
          <div className="flex-1">
            <Table searchQuery={searchQuery}
            setCheckedRows={setCheckedRows}
            checkedRows={checkedRows}
            />

          </div>
            {/* Bottom Bar */}
            <BottomBar
            checkedRows={checkedRows}
            />
        </div>
      </div>
    </div>
  );
};

export default Home;
