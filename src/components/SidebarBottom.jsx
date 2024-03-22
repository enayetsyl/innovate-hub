import { toast } from "react-toastify"
import { sidebarBottomInfo } from "../constant"

const SidebarBottom = () => {
  return (
    <div className="mt-10 space-y-2 mb-2">
    {
      sidebarBottomInfo.map(item => (
        <div key={item.title}
        className="flex justify-between items-center gap-5 hover:bg-gray-300 p-2 hover:rounded-lg transition-all duration-300 group cursor-pointer"
        onClick={()=> toast(`Imagine you redirected to ${item.title} page.`)}
        >
          <div className="flex justify-center items-center gap-2 text-lg">
            <i className="">{item.icon}</i>
            <p className="font-semibold">{item.title}</p>
          </div>
          <button>{item.button}</button>
        </div>
      ))
    }
    </div>
  )
}

export default SidebarBottom