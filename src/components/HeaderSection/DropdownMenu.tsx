import { useState } from "react"
import { FiMenu } from "react-icons/fi"
import { GoArrowUpRight } from "react-icons/go";
import { MdClose } from "react-icons/md";

const DropdownMenu = () => {

  const [openMenu, setOpenMenu] = useState(false)

  const handleClickMenu = () => setOpenMenu(!openMenu);

  return (
    <>
        <button 
          className="block sm:hidden text-2xl"
          onClick={handleClickMenu}
        >
            {openMenu ? <MdClose color="#636363"/> : <FiMenu color="#636363"/>}
        </button>

        {openMenu && (
            <div className="block sm:hidden absolute -bottom-28 right-0 h-full w-full bg-slate-50 py-14 z-50">
                <div className="flex flex-col items-end gap-6 pr-6 text-3xl font-semibold text-[#121212]">
                    <a onClick={handleClickMenu} href="#home">Home </a>
                    <a onClick={handleClickMenu} href="#teachers">Our teachers</a>
                    <a onClick={handleClickMenu} href="#contact">Contact</a>
                    <a onClick={handleClickMenu} className="text-xl border border-[#704FE6] rounded-full text-[#704FE6] pl-10 pr-3 py-1.5 flex items-center gap-3 group hover:shadow-md hover:shadow-[#704FE6]/50 transition-shadow duration-300">
                        Sign In
                        <div className="bg-[#704FE6] p-3 rounded-full group-hover:rotate-45 transition-transform duration-300">
                            <GoArrowUpRight color="white"/>
                        </div>				
			        </a>
                </div>
            </div>
        )}
    </>
  )
}

export default DropdownMenu