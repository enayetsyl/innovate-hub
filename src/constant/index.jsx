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
import { PiCirclesFourBold} from "react-icons/pi";

import wix from '../../public/wix.png'
import disney from '../../public/disney.jpg'
import evernote from '../../public/evernote.jpg'
import google from '../../public/google.jpg'
import invision from '../../public/invision.jpg'
import intercom from '../../public/intercom.png'
import mailchimp from '../../public/mailchimp.png'
import microsoft from '../../public/microsoft.png'
import paypal from '../../public/paypal.jpg'
import shofify from '../../public/shofify.jpg'
import user1 from '../../public/user1.jpg'
import user2 from '../../public/user2.jpg'
import user3 from '../../public/user3.jpg'
import user4 from '../../public/user4.jpg'
import user5 from '../../public/user5.jpg'
import user6 from '../../public/user6.jpg'




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

export const sidebarBottomInfo = [
  {
    icon: <FaUserPlus/>,
    title: 'Invite Teammates'
  },
  {
    icon: <IoMdHelpCircleOutline/>,
    title: 'Help and first steps',
    button: <div className="bg-gray-300  px-2 rounded-lg gap-1 group-hover:bg-white group-hover:text-black  text-gray-500">0/6</div>
  },
  {
    icon: <div className="bg-gray-300  px-2 rounded-lg gap-1 group-hover:bg-white text-gray-500 group-hover:text-black">7</div>,
    title: 'days left on trial',
    button: <div className="bg-gray-300  px-3 rounded-lg py-2 group-hover:bg-black text-black group-hover:text-white font-semibold">Add billing</div>
  },
]

export const navbarIcon = [
  {
    icon: <LuMessagesSquare/>
  },
  {
    icon: <IoSettingsOutline/>
  },
]

export const dropdownButtonInfo = [
  {
    icon: <PiCirclesFourBold/>,
    name: 'All brands',
  },
  {
    name: 'Desk',
  },
  {
    name: 'Tags',
  },
]
export const dashedButtonInfo = [
  {
    icon: <BsSortNumericDown/>,
    name: 'Sort',
  },
  {
    icon: <BsSliders/>,
    name: 'Filter',
  },
 
]
export const meetingButtonInfo = [
  {
    icon: <div className="rounded-lg border-[3px] border-zinc-400 bg-gray-300 p-[2px] text-gray-500 text-sm"><FaPlus/> </div>,
    name: 'Meeting',
  },
  {
    icon: <CiImport/>,
    name: 'Import/Export',
  },
 
]

export const tableHeadingInfo = [
  {
    checkbox: true,
    heading: 'Brand',
    icon:<FaPlus/>
  },
  {
    heading: 'Description'
  },
  {
    heading: 'Members'
  },
  {
    heading: 'Categories'
  },
  {
    heading: 'Tags'
  },
  {
    heading: 'Next meeting'
  },
  {
    icon:<FaPlus/>
  },
]

export const tableRowInfo = [
[
  {
    checkbox: true,
    image:wix ,
    text: 'Wix',
    message: <LuMessagesSquare/>,
    quantity: 2,
  },
  {
    desc: 'Develop a personalized fitness Programm'
  },
  {
    image: [user5, user1, user3, user6, user4, user2 ]
  },
  {
    categories: ['Automation'],
    catDesign: 'bg-gray-200 border border-gray-400 text-blue-700 rounded-lg py-[1px] px-2 font-semibold'
  },
  {
    tags: ['#DigitalTaransformation', '#OnlineShopping'],
    tagDesign: 'bg-gray-300 px-2 py-[3px] rounded-lg ml-1'
  },
  {
    meeting: 'in 30 minutes',
    meetingDesign: 'bg-green-200 border border-green-400 text-green-800 py-1 px-2 rounded-xl'
  }
 ],
 [
  {
    checkbox: true,
    image:shofify ,
    text: 'Shopify',
  },
  {
    desc: 'Introducing a cloud-based programming'
  },
  {
    image: [user1, user3, user6, user4]
  },
  {
    categories: ['B2B', 'E-commerce'],
    catDesign: 'bg-pink-200 border border-pink-400 text-pink-900 rounded-lg py-[1px] px-2'
  },
  {
    tags: ['#DigitalTaransformation', '#OnlineShopping'],
    tagDesign: 'bg-gray-200 border border-gary-400 px-2 py-[3px] rounded-lg ml-1'
  },
  {
    meeting: 'Tomorrow',
    meetingDesign: 'bg-sky-200 border border-sky-400 text-blue-800 rounded-lg py-[1px] px-2 font-semibold'
  }
 ],
 [
  {
    checkbox: true,
    image: mailchimp ,
    text: 'MailChimp',
  },
  {
    desc: 'Develop a mobile app aming designer.'
  },
  {
    image: [user6, user2,user5, user3]
  },
  {
    categories: ['SAAS', 'Mobile'],
    catDesign: 'bg-yellow-200 border border-yellow-400 text-green-900 rounded-lg py-[1px] px-2'
  },
  {
    tags: ['#TechInnovation', '#CloudService'],
    tagDesign: 'bg-gray-200 border border-gary-400 px-2 py-[3px] rounded-lg ml-1'
  },
  {
    meeting: 'Tomorrow',
    meetingDesign: 'bg-sky-200 border border-sky-400 text-blue-800 rounded-lg py-[1px] px-2 font-semibold'
  }
 ],
 [
  {
    checkbox: true,
    image: paypal ,
    text: 'Paypal',
    message: <LuMessagesSquare/>,
    quantity: 7,
  },
  {
    desc: 'This program could include fresher also.'
  },
  {
    image: [user6, user2, user5, user3, user1, user4]
  },
  {
    categories: ['Marketplace'],
    catDesign: 'bg-green-200 border border-green-400 text-green-900 rounded-lg py-[1px] px-2'
  },
  {
    tags: ['#BuySellOnline', '#OnlineMarketing'],
    tagDesign: 'bg-gray-200 border border-gary-400 px-2 py-[3px] rounded-lg ml-1'
  },
  {
    meeting: 'in 6 hours',
    meetingDesign: 'bg-cyan-200 border border-cyan-400 text-green-800 rounded-lg py-[1px] px-2 font-semibold'
  }
 ],
 [
  {
    checkbox: true,
    image: disney ,
    text: 'Disney',
  },
  {
    desc: 'Introduce a B2B solution for enterprizes.'
  },
  {
    image: [user5, user4]
  },
  {
    categories: ['B2B', 'B2C'],
    catDesign: 'bg-orange-200 border border-orange-400 text-green-900 rounded-lg py-[1px] px-2'
  },
  {
    tags: ['#BusinessPartnership'],
    tagDesign: 'bg-gray-200 border border-gary-400 px-2 py-[3px] rounded-lg ml-1'
  },
  {
    meeting: 'No contact',
    meetingDesign: 'bg-cyan-200 border border-cyan-400 text-green-800 rounded-lg py-[1px] px-2 font-semibold'
  }
 ],
 [
  {
    checkbox: true,
    image: intercom ,
    text: 'Intercom',
    message: <LuMessagesSquare/>,
    quantity: 9,
  },
  {
    desc: 'Implement an AI-driven computer.'
  },
  {
    image: [ user5, user3,  user4, user6, user2]
  },
  {
    categories: ['Technology', 'SAAS'],
    catDesign: 'bg-sky-200 border border-sky-400 text-blue-900 rounded-lg py-[1px] px-2'
  },
  {
    tags: ['#SmartFinance', '#SAASPlatform'],
    tagDesign: 'bg-gray-200 border border-gary-400 px-2 py-[3px] rounded-lg ml-1'
  },
  {
    meeting: 'in 1 hours',
    meetingDesign: 'bg-sky-200 border border-sky-400 text-green-800 rounded-lg py-[1px] px-2 font-semibold'
  }
 ],
 [
  {
    checkbox: true,
    image: google ,
    text: 'Google',
    message: <LuMessagesSquare/>,
    quantity: 5,
  },
  {
    desc: 'Offer a comprehensive cycle of something.'
  },
  {
    image: [user1,user6, user2, user5, user3,user2,  user4]
  },
  {
    categories: ['Finance', 'Automation'],
    catDesign: 'bg-orange-200 border border-orange-400 text-gray-900 rounded-lg py-[1px] px-2'
  },
  {
    tags: ['#SmartFinance', '#Workflow'],
    tagDesign: 'bg-gray-200 border border-gary-400 px-2 py-[3px] rounded-lg ml-1'
  },
  {
    meeting: 'in 30 minutes',
    meetingDesign: 'bg-sky-200 border border-sky-400 text-green-800 rounded-lg py-[1px] px-2 font-semibold'
  }
 ],
 [
  {
    checkbox: true,
    image: evernote ,
    text: 'Evernote',
  },
  {
    desc: 'This could include smart license of something.'
  },
  {
    image: [user5, user3, user2]
  },
  {
    categories: ['Transportation'],
    catDesign: 'bg-orange-200 border border-orange-400 text-gray-900 rounded-lg py-[1px] px-2'
  },
  {
    tags: ['#LogisticsTech', '#UX'],
    tagDesign: 'bg-gray-200 border border-gary-400 px-2 py-[3px] rounded-lg ml-1'
  },
  {
    meeting: 'Next month',
    meetingDesign: 'bg-gray-200 border border-gray-400 text-gray-800 rounded-lg py-[1px] px-2 font-semibold'
  }
 ],
 [
  {
    checkbox: true,
    image: microsoft ,
    text: 'Microsoft',
    message: <LuMessagesSquare/>,
    quantity: 14,
  },
  {
    desc: 'Launch an advisory service of something.'
  },
  {
    image: [user1, user2, user5, user2,  user4]
  },
  {
    categories: ['Publishing', 'B2C'],
    catDesign: 'bg-pink-200 border border-pink-400 text-pink-900 rounded-lg py-[1px] px-2'
  },
  {
    tags: ['#B2CMarketing', '#RetailTrainning'],
    tagDesign: 'bg-gray-200 border border-gary-400 px-2 py-[3px] rounded-lg ml-1'
  },
  {
    meeting: 'No contact',
    meetingDesign: 'bg-pink-200 border border-pink-400 text-red-900 rounded-lg py-[1px] px-2 font-semibold'
  }
 ],
 [
  {
    checkbox: true,
    image: invision ,
    text: 'Invision',
  },
  {
    desc: 'The tool would analyze treashold.'
  },
  {
    image: [ user5, user2]
  },
  {
    categories: ['Web Services'],
    catDesign: 'bg-orange-200 border border-orange-400 text-gray-900 rounded-lg py-[1px] px-2'
  },
  {
    tags: ['#APIIntegration'],
    tagDesign: 'bg-gray-200 border border-gary-400 px-2 py-[3px] rounded-lg ml-1'
  },
  {
    meeting: 'Next month',
    meetingDesign: 'bg-gray-200 border border-gray-400 text-gary-800 rounded-lg py-[1px] px-2 font-semibold'
  }
 ],

]
