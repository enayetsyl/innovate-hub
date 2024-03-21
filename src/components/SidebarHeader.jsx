import { BsBook } from "react-icons/bs";
import userImage from '../../public/user.png'

const SidebarHeader = () => {
  return (
    <div className="pt-3">
       {/* Header */}
  <div className='flex gap-2 items-center justify-between'>
   <div className='flex gap-2 items-center'>
   <button className='p-2 bg-black rounded-lg text-white'><BsBook className="h-8 w-8" /></button>
    {/* name */}
    <div>
      <p className='text-sm'>ING</p>
      <p className='font-bold text-lg'>InnovateHub</p>
    </div>
   </div>
    <img src={userImage} alt="user-image" 
    className='h-10 w-10 rounded-full justify-end'
    />
   </div>
    </div>
  )
}

export default SidebarHeader