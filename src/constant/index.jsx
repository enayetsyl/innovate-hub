import userImage from '../../public/user.png'
// import { CiPen } from "react-icons/ci";
// import { GoMegaphone } from "react-icons/go"
// import { TbBracketsAngle } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
import { CiPen, CiSquarePlus } from "react-icons/ci";
import { TbBracketsAngle, TbFolder } from "react-icons/tb";
import { FaUserPlus } from "react-icons/fa";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { LuMessagesSquare } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { CiImport } from "react-icons/ci";
import { BsSortNumericDown } from "react-icons/bs";
import { BsSliders } from "react-icons/bs";
import { TbArchive } from "react-icons/tb";
import { AiOutlineDelete } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { TiFlowSwitch } from "react-icons/ti";
import { GoMegaphone } from 'react-icons/go';
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";

export const teamTitleInfo = [
  {
    icon: <CiPen/>,
    title: 'Design team',
    quantity: 1
  },
  {
    icon: <GoMegaphone/>,
    title: 'Marketing team',
    quantity: 2
  },
  {
    icon: <TbBracketsAngle/>,
    title: 'Development team',
    quantity: 3
  },
]

export const createTeamInfo = {
  icon: <FaPlus/>,
  title: "Create a team"
}

export const foldersData = {
  title: 'FOLDERS',
  icon: <FaPlus/>
}

export const menuData = [
  {
    title:'Products',
    icon: <TbFolder/>,
    childrens: [
      {
        title:'Roadmap',
      },
      {
        title:'Feedback',
      },
      {
        title:'Perfomance',
      },
      {
        title:'Team',
      },
      {
        title:'Analytics',
      },
      {
        title:<div className="font-bold text-gray-500 text-lg">Add new sub</div>,
        icon: <div className="rounded-lg border-[3px] border-zinc-400 bg-gray-300 p-[2px] text-gray-500 text-sm"><FaPlus/></div>
      },
    ]
  },
  {
    title:'Sales',
    icon: <TbFolder/>,
    childrens: [
      {
        title:'Roadmap',
      },
      {
        title:'Feedback',
      },
      {
        title:'Perfomance',
      },
      {
        title:'Team',
      },
      {
        title:'Analytics',
      },
      {
        title:'Add new sub',
        icon:<FaPlus/>
      },
    ]
  },
  {
    title:'Design',
    icon: <TbFolder/>,
    childrens: [
      {
        title:'Roadmap',
      },
      {
        title:'Feedback',
      },
      {
        title:'Perfomance',
      },
      {
        title:'Team',
      },
      {
        title:'Analytics',
      },
      {
        title:'Add new sub',
        icon:<FaPlus/>
      },
    ]
  },
  {
    title:'Office',
    icon: <TbFolder/>,
  },
  {
    title:'Legal',
    icon: <TbFolder/>,
  },


]