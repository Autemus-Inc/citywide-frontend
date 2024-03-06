import logo from "../assets/logo.svg"
import { NavLink } from "react-router-dom"
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#E3FBFF] lg:h-[428px] md:h-[428px] h-auto flex flex-col">
      <section className="flex flex-col lg:flex-row md:flex-row justify-between lg:w-[85%] md:w-[85%] w-[100%] mx-auto pt-24">
      <div className="w-[100%] lg:w-[30%] md:w-[30%]">
        <img src={logo} alt="" />
        <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsam neque, et omnis harum voluptas?</p>
      </div>
      <div className="w-[100%] lg:w-[15%] md:w-[15%]">
        <p className="font-[500]">Quicklinks</p>
        <NavLink to="/" className="block my-4">Home</NavLink>
        <NavLink to="/" className="block mb-4">About</NavLink>
        <NavLink to="/" className="block mb-4">Trips</NavLink>
        <NavLink to="/" className="block mb-4">Contact Us</NavLink>
      </div>
      <div className="w-[100%] lg:w-[15%] md:w-[15%]">
        <p className="font-[500]">Quicklinks</p>
        <NavLink to="/" className="block my-4">Register</NavLink>
        <NavLink to="/" className="block mb-4">Log In</NavLink>
      </div>
      <div className="w-[100%] lg:w-[30%] md:w-[30%]">
        <h3 className="font-[500]">Subscribe to our newsletter</h3>
        <input type="text" placeholder="email address" className="p-2 rounded-md my-4 lg:w-[70%] md:w-[70%] w-[100%]"/>
        <button className="lg:w-[27%] md:w-[27%] w-[100%] p-2 rounded-md my-4 bg-[#4C6DF8] text-white ml-2">Subscribe</button>
        <div className="flex text-2xl w-[100%] lg:w-[30%] md:w-[30%] justify-between text-[#4C6DF8] mt-6">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><RiTwitterXFill /></a>
          <a href="#"><FaInstagramSquare /></a>
        </div>
      </div>
      </section>
      <div className="mt-auto text-center pb-8">
      <p>&copy; 2023 McClive Copyright Reserved</p>
      </div>  
    </footer>
  )
}

export default Footer