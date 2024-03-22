import { TbArchive } from "react-icons/tb";
import { AiOutlineDelete } from "react-icons/ai";
import { FaCaretDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";

const BottomBar = ({checkedRows}) => {
  return (
    <div className="rounded-xl p-2 shadow-xl mt-10 mb-3 bg-white/85 flex justify-center items-center gap-5 max-w-xl mx-auto border border-gray-200 ">
      <div className="flex justify-center items-center gap-1">
        {/* Selected item showing */}
        <p className="text-center  font-bold h-8 w-8 rounded-lg bg-black  text-white text-lg">{checkedRows.length}</p>
        <p className="p-1 text-black text-lg">selected</p>
      </div>

      {/* Archive button */}
      <button className="flex justify-center items-center gap-2 p-2 shadow-lg border border-gray-200 rounded-xl font-semibold hover:-translate-y-1 transition-all duration-300"
      onClick={()=> toast(`Imagine selected items Archived.`)}
      >
        <TbArchive/>
        <span className="text-lg text-black">Archive</span>
      </button>

      {/* Delete button */}
      <button className="flex justify-center items-center gap-2 p-2 shadow-lg border border-gray-200 rounded-xl font-semibold hover:-translate-y-1 transition-all duration-300"
      onClick={()=> toast(`Imagine selected items deleted.`)}
      >
        <AiOutlineDelete className="text-red-900"/>
        <span className="text-lg text-red-900">Delete</span>
      </button>

      {/* More button  */}
      <button className="flex justify-center items-center gap-2 p-2 shadow-lg border border-gray-200 rounded-xl font-semibold hover:-translate-y-1 transition-all duration-300"
      onClick={()=> toast(`Imagine dropdown list appeared.`)}
      >
        <span className="text-lg">More</span>
        <FaCaretDown className="text-gray-600"/>
      </button>

      {/* Close button */}
      <IoMdClose className="text-gray-600 cursor-pointer font-bold text-xl hover:size-[30px] transition-all duration-300" onClick={()=> toast(`Imagine the bottom bar closed.`)}/>
      
    </div>
  )
}

export default BottomBar