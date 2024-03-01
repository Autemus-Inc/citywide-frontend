import { 
  createBrowserRouter, 
  Route, 
  createRoutesFromElements, 
  RouterProvider 
} from "react-router-dom";
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Trips from "./pages/Trips";
import HomeLayout from "./components/Layout/HomeLayout"
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<HomeLayout />} >
  <Route index element={<Home />} />
  <Route path='/about' element={<About />} />
  <Route path="/contact"  element={<Contact />} />
  <Route path="/trips"  element={<Trips/>} />
  <Route path="/login"  element={<Login />} />
  <Route path="/signup"  element={<Signup />} />
  </Route>
))

function App() {

    return (
      <div className="App">
        <RouterProvider router={router} />
    </div> 
    )
}

export default App