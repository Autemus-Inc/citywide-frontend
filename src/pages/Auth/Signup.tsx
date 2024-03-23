import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg"
import googleIcon from "../../assets/google-icon.svg"

const SignUp = () => {
  return (
    <main className="lg:min-h-[100vh] md:min-h-[100vh] flex">
      <div className="w-[100%] lg:w-[50%] md:w-[50%] flex flex-col p-12">
        <div className="lg:w-[80%] md:w-[80%] w-[100%] mx-auto">
      <NavLink to="/"><img src={logo} alt="" className="lg:w-[200px] w-[150px] mb-12 lg:mb-12 md:lg-12" /></NavLink>
        </div>
        <div className="lg:w-[80%] md:w-[80%] w-[100%] mx-auto my-auto flex flex-col">
        <h2 className="lg:text-[32px] md:text-[32px] text-[26px] font-[500]">Sign Up</h2>
        <p className="text-[16px] mt-2 lg:mb-8 md:mb-8 mb-10">Already have an account? <NavLink to="/signup" className="text-[#4C6DF8]">Log In</NavLink></p>
        <button className="border p-4 rounded-md w-full font-[500] text-[18px] text-[
#4C6DF8] flex items-center justify-center text-[#4C6DF8]"><img src={googleIcon} alt="" className="mr-4"/> Sign up with Google</button>
        <p className="text-center uppercase my-6">Or</p>
        <input type="text" className="border p-4 rounded-md w-full mb-6" placeholder="Full name" />
        <input type="text" className="border p-4 rounded-md w-full mb-6" placeholder="Email address" />
        <input type="text" className="border p-4 rounded-md w-full mb-6" placeholder="Phone number" />
        <input type="text" className="border p-4 rounded-md w-full mb-6" placeholder="NIN" />
        <input type="text" className="border p-4 rounded-md w-full mb-6" placeholder="Create password" />
        <p className="mb-6 text-[14px]">By Signing Up, you  accept our <a href="#" className="text-[#4C6DF8]">Policy Privacy</a> and  <a href="" className="text-[#4C6DF8]">Terms of Use</a></p>
        <button className="bg-[#4C6DF8] p-4 rounded-md text-white w-full font-[500] text-[18px]">Sign Up</button>
        </div>
      </div>
      <div style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/handsome-male-freelancer-glasses-smiling-ecstatic-african-student-holding-laptop-expressing-happiness_197531-20166.jpg?size=626&ext=jpg&ga=GA1.2.1207199826.1690666781&semt=ais)'}} className="bg-cover bg-center h-auto w-[50%] hidden lg:flex md:flex">
      </div>
    </main>
  )
}

export default SignUp