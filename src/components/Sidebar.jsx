import Paper from '@mui/material/Paper';
import SidebarHeader from './SidebarHeader';
import TeamSection from './TeamSection';
import { foldersData } from '../constant';
import SidebarMenu from './SidebarMenu';


const Sidebar = () => {
  
  return (
    <div 
    className='border border-zinc-400 rounded-lg min-h-screen'
    >
 {/* Container */}
 <div className='p-2'>
 {/* Header */}
 <SidebarHeader/>
  
  {/* Team Section */}
<TeamSection/>
  <div className='flex justify-between pt-5 items-center text-gray-400 text-lg'>
    <p className='font-semibold'>{foldersData.title}</p>
    <i>{foldersData.icon}</i>
  </div>
    <SidebarMenu/>



 </div>
    </div>
  )
}

export default Sidebar


