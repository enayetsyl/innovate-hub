import { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";

const SidebarMenuItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="pt-5">
      <div
        className="sidebar-title flex justify-between cursor-pointer hover:bg-gray-300 hover:p-2 hover:rounded-lg transition-all duration-500 group cursor-pointer"
        
      >
        <span className="flex justify-center items-center gap-2 text-lg font-semibold">
          {item.icon && <i className="text-xl">{item.icon}</i>}
          {item.title}
        </span>
        {item.childrens && (
          <i className="toggle-btn cursor-pointer" onClick={toggleOpen}>
            {isOpen ? <FaCaretUp /> : <FaCaretDown />}
          </i>
        )}
      </div>
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
