import { TiFlowSwitch } from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";
import { createTeamInfo, teamTitleInfo } from "../constant";

const TeamSection = () => {
  return (
    <div className="border rounded-lg mt-3 border-zinc-400 ">
      <div className="space-y-2 p-3">
        {
          teamTitleInfo.map(item => (
            <div key={item.title}
            className="flex justify-between items-center gap-3 hover:bg-gray-300 hover:p-2 hover:rounded-lg transition-all duration-500 group cursor-pointer "
            >
              {/* Icon and title */}
              <div className="flex justify-between items-center gap-2">
              <span>{item.icon}</span>
              <p className="font-semibold text-lg">{item.title}</p>
              </div>
              {/* Box */}
              <div className="bg-gray-300 flex justify-center items-center px-2 rounded-lg gap-1 group-hover:bg-white">
                <TiFlowSwitch className="h-3 w-3"/>
                <FaPlus className="h-3 w-3"/>
                <span>{item.quantity}</span>
              </div>
            </div>
          ))
        }
      <hr className="w-full h-[2px]
      bg-zinc-400" />
      {/* Create team */}
      <div className="flex justify-start items-center gap-2">
        <div className="rounded-lg border-[3px] border-zinc-400 bg-gray-300 p-[2px] text-gray-500 text-sm">{createTeamInfo.icon}</div>
        <div className="font-bold text-gray-500 text-lg">{createTeamInfo.title}</div>
      </div>
      </div>
    </div>
  )
}

export default TeamSection