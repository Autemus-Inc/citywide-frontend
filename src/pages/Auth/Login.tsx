import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg"
import googleIcon from "../../assets/google-icon.svg"

const Login = () => {
  return (
    <main className="lg:min-h-[100vh] md:min-h-[100vh] flex">
      <div className="w-[100%] lg:w-[50%] md:w-[50%] flex flex-col p-12">
        <div className="lg:w-[80%] md:w-[80%] w-[100%] mx-auto">
      <NavLink to="/"><img src={logo} alt="" className="lg:w-[200px] w-[150px] mb-12 lg:mb-0 md:lg-0" /></NavLink>
        </div>
        <div className="lg:w-[80%] md:w-[80%] w-[100%] mx-auto my-auto flex flex-col">
        <h2 className="lg:text-[32px] md:text-[32px] text-[26px] font-[500]">Log In</h2>
        <p className="text-[16px] mt-2 lg:mb-16 md:mb-16 mb-10">New to CityWide? <NavLink to="/signup" className="text-[#4C6DF8]">Sign Up</NavLink></p>
        <button className="border p-4 rounded-md w-full font-[500] text-[18px] mb-6 text-[
#4C6DF8] flex items-center justify-center text-[#4C6DF8]"><img src={googleIcon} alt="" className="mr-4"/> Log in with Google</button>
        <p className="text-center uppercase my-6">Or</p>
        <input type="text" className="border p-4 rounded-md w-full mb-4" placeholder="Email address" />
        <input type="text" className="border p-4 rounded-md w-full mb-4" placeholder="Password" />
        <button className="bg-[#4C6DF8] p-4 rounded-md text-white w-full font-[500] text-[18px]">Log In</button>
        </div>
      </div>
      <div style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/handsome-male-freelancer-glasses-smiling-ecstatic-african-student-holding-laptop-expressing-happiness_197531-20166.jpg?size=626&ext=jpg&ga=GA1.2.1207199826.1690666781&semt=ais)'}} className="bg-cover bg-center h-[100vh] w-[50%] hidden lg:flex md:flex">
      </div>
    </main>
  )
}

export default Login