import { CiSearch } from "react-icons/ci"
import { navbarIcon } from "../constant"
import { toast } from "react-toastify"

const Navbar = ({setSearchQuery, searchQuery}) => {
  return (
    <div className="flex justify-between items-center gap-10 p-5 border-b border-zinc-400">
      {/* Heading */}
        <h1 className="font-semibold text-2xl">Products</h1>
        
        {/* Search bar and icons */}
        <div className="flex justify-center items-center gap-5">

          {/* Search bar */}
          <div className="border border-zinc-400 shadow-lg rounded-xl py-1 px-2 flex justify-start items-center gap-1">
          <CiSearch/> <input type="text" name="" id="" placeholder="Search for.." className="outline-none"
          value={searchQuery}
          onChange={(e) =>setSearchQuery(e.target.value)}
          />
          </div>

          {/* icons */}
          <div className="flex justify-center items-center gap-5">
            {
              navbarIcon.map(icon => (
                <div key={icon}
                className="border border-zinc-400 shadow-lg rounded-xl p-2 cursor-pointer hover:-translate-y-1 transition-all duration-300"
                onClick={()=> toast(`Imagine dropdown list appeared.`)}
                >
                    {icon.icon}
                </div>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default Navbar