import SidebarHeader from "./SidebarHeader";
import TeamSection from "./TeamSection";
import { foldersData } from "../constant";
import SidebarMenu from "./SidebarMenu";
import SidebarBottom from "./SidebarBottom";

const Sidebar = () => {
  return (
    <div className="border border-solid border-zinc-400 rounded-xl min-h-screen">

      {/* Container */}
      <div className="p-5">

        {/* Header */}
        <SidebarHeader />

        {/* Team Section */}
        <TeamSection />

        {/* Folder */}
        <div className="flex justify-between pt-5 items-center text-gray-400 text-lg">
          <p className="font-semibold">{foldersData.title}</p>
          <i>{foldersData.icon}</i>
        </div>

        {/* Menu */}
        <SidebarMenu />

        {/* Bottom */}

        <SidebarBottom/>
      </div>
    </div>
  );
};

export default Sidebar;
