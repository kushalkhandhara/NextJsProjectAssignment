import Image from "next/image"
import logo from "../assets/logo.png"

export default function Navbar() {
  return (
    <div className="navbar flex bg-[#6669FE] w-full  overflow-hidden py-8 px-6 justify-between items-center z-index: 50; text-white">
        <div className="navbar-logo">
            <Image src={logo} alt="Logo" className="w-24 h-12.3"  />
        </div>
        <div className="navbar-title text-end md:text-center">
            <h3 className="font-bold text-lg md:text-3xl ">Student Portal</h3>
        </div>
        <div className="navbar-user text-end hidden md:block">
            <div className="user-name ">
                <h4 className="text-base font-semibold text-2xl ">Hello, Gabrisa!</h4>
                <p className="text-xs">Class 7, Math + Science</p>
            </div>
        </div>
    </div>
  )
}

