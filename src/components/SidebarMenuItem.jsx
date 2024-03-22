import { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";
import { toast } from "react-toastify";

const SidebarMenuItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="pt-2">

      {/* Container div */}
      <div className=" flex justify-between cursor-pointer hover:bg-gray-300 p-2 hover:rounded-lg transition-all duration-500 group">
      
        {/* Parent Menu */}
        <span className="flex justify-center items-center gap-2 text-lg font-semibold"
        onClick={()=> toast(`Imagine you redirected to ${item.title} page.`)}
        >
          {item.icon && <i className="text-xl">{item.icon}</i>}
          {item.title}
        </span>
      
      {/* Toggle button */}
        {item.childrens && (
          <i className=" cursor-pointer" onClick={toggleOpen}>
            {isOpen ? <FaCaretUp /> : <FaCaretDown />}
          </i>
        )}
      </div>

      {/* Sub Menu */}
      <div className="ml-2.5 pl-6 border-l-2  border-zinc-400 rounded-b-xl">
        {isOpen &&
          item.childrens &&
          item.childrens.map((child, index) => (
            <SidebarMenuItem key={index} item={child} />
          ))}
      </div>
    </div>
  );
};

export default SidebarMenuItem;
