import { BsBook } from "react-icons/bs";
import userImage from '../../public/user.jpg'

const SidebarHeader = () => {
  return (
    <div className="pt-3">

       {/* Header */}
  <div className='flex gap-2 items-center justify-between'>
   <div className='flex gap-2 items-center'>

    {/* Logo */}
   <button className='p-2 bg-black/80 rounded-lg text-white'><BsBook className="h-8 w-8" /></button>

    {/* Company Name */}
    <div>
      <p className='text-sm text-gray-600 font-semibold'>INC</p>
      <p className='font-bold text-lg'>InnovateHub</p>
    </div>

    {/* User Image */}
   </div>
    <img src={userImage} alt="user-image" 
    className='h-10 w-10 rounded-full justify-end'
    />
   </div>
    </div>
  )
}

export default SidebarHeader