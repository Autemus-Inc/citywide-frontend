import cwLogo from "../assets/logo.svg"
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header className="bg-white h-[112px] flex justify-center sticky">
        <div className="w-[90%] lg:w-[85%] md:w-[85%] mx-auto flex justify-between items-center">
        <img src={cwLogo} alt="city wide logo" className="w-1/6"/>
        <nav className="flex justify-between items-center w-2/6">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/trips">Trips</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
        <div className="w-1/6 flex justify-between items-center">
            <NavLink to="/login" className="bg-[#4C6DF8] rounded-lg py-4 px-4 text-white">Log In</NavLink>
            <NavLink to="/signup" className="border border-[#4C6DF8] text-[#4C6DF8] rounded-lg py-4 px-6">Sign Up</NavLink>
            </div>
        </div>
    </header>
  )
}

export default Header