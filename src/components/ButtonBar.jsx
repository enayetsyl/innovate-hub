import { BsCaretDown } from "react-icons/bs"
import { dashedButtonInfo, dropdownButtonInfo, meetingButtonInfo } from "../constant"
import { toast } from "react-toastify"

const ButtonBar = () => {
  return (
    // Container
    <div className="p-5 flex justify-between items-center ">
      
      {/* Left side button */}
    <div className="flex justify-center items-center gap-3">
      {
        dropdownButtonInfo.map(item => (
          // First three button
          <button key={item.name}
          className="flex justify-center items-center gap-1 border border-zinc-400 p-2 rounded-xl font-semibold shadow-lg hover:-translate-y-1 transition-all duration-300"
          onClick={()=> toast(`Imagine dropdown list appeared.`)}
          >
            {item.icon && item.icon}
            {item.name}
            <BsCaretDown className="text-gray-600"/>
          </button>
        ))
      }
      {
        // Middle two button
        dashedButtonInfo.map(item => (
          <button key={item.name}
          className="flex justify-center items-center gap-1 border border-dashed border-zinc-400 p-2 rounded-xl font-semibold text-gray-500 bg-gray-300 hover:-translate-y-1 transition-all duration-300"
          onClick={()=> toast(`Imagine dropdown list appeared.`)}
          >
            {item.icon && item.icon}
            {item.name}
           
          </button>
        ))
      }
    </div>


      {/* Right side button */}
      <div className="flex justify-center items-center gap-3">
        {
          meetingButtonInfo.map(item => (
            <button key={item.name}
            className="flex justify-center items-center gap-1 border border-zinc-400 p-2 rounded-xl font-semibold shadow-lg hover:-translate-y-1 transition-all duration-300"
            onClick={()=> toast(`Imagine dropdown list appeared.`)}
            >
              {item.icon && item.icon}
              {item.name}
           
            </button>
          ))
        }
      </div>
    </div>
  )
}

export default ButtonBar