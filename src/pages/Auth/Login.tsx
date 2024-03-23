import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg"

const Login = () => {
  return (
    <main className="min-h-[100vh] flex">
      <div className="w-[100%] lg:w-[50%] md:w-[50%] flex flex-col">
      <img src={logo} alt="" className="h-[50px] m-8" />
        <div className="lg:w-[70%] md:w-[70%] mx-auto">
        <h2>Log In</h2>
        <p>New to CityWide <NavLink to="/login">Sign Up</NavLink></p>
        <button>Log in with Google</button>
        <input type="text" />
        <input type="text" />
        <button className="">Log In</button>
        </div>
      </div>
      <div style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/handsome-male-freelancer-glasses-smiling-ecstatic-african-student-holding-laptop-expressing-happiness_197531-20166.jpg?size=626&ext=jpg&ga=GA1.2.1207199826.1690666781&semt=ais)'}} className="bg-cover bg-center h-[100vh] w-[50%] hidden lg:flex">
      </div>
    </main>
  )
}

export default Login