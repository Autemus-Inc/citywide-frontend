import train1 from "../assets/train.svg"
import train2 from "../assets/train2.svg"
import train3 from "../assets/train3.svg"
import icon from "../assets/icon.svg"
import AccordionUsage from "../components/AccordionUsage"
import ReviewSlider from "../components/ReviewSlider"

const Home = () => {
  return (
    <main>
     <div className="relative w-full h-[70vh] bg-gradient-to-r from-[#3248A3] to-gray-200 overflow-hidden">
  <div className="absolute inset-0 w-full h-full object-cover object-center-top bg-[#433e3e] bg-blend-overlay opacity-60"  style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/side-view-man-traveling-by-train_23-2150578050.jpg?w=1800&t=st=1709326742~exp=1709327342~hmac=3ddc2b753e3c3320aa6a571a21cac16dd8e483656a6622557fba7ae1316793bd")' }}>
  </div>
  <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
    <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">Plan Your Trip <br /> Without Queueing</h1>
    <p className="text-lg lg:text-xl">Explore new destinations without the hassle of waiting in line.</p>
  </div>

</div> 
    <section className="relative p-36 bg-gradient-to-b from-[#E3FBFF] to-gray-200">
          <div className="w-[100%] lg:w-[80%] md:w-[80%] mx-auto py-8 px-4 rounded-lg flex justify-between items-center flex-col lg:flex-row md:flex-row bg-white absolute left-1/2 transform -translate-x-1/2 top-[-10%]">
        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 w-full lg:w-1/3 mr-4 p-4 rounded-lg">
        <option selected>From</option>
        <option value="US">Abeokuta - Lagos</option>
        <option value="CA">Lagos - Ibadan</option>
        <option value="FR">Ibadan - Abeokuta</option>
        <option value="DE">Ibadan - Lagos</option>
        <option value="DE">Lagos - Abeokuta</option>
        <option value="US">Abeokuta - Ibadan</option>
    </select>
    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 w-full lg:w-1/3 mr-4 p-4 rounded-lg">
        <option selected>To</option>
        <option value="US">Abeokuta - Lagos</option>
        <option value="CA">Lagos - Ibadan</option>
        <option value="FR">Ibadan - Abeokuta</option>
        <option value="DE">Ibadan - Lagos</option>
        <option value="DE">Lagos - Abeokuta</option>
        <option value="US">Abeokuta - Ibadan</option>
    </select>
    <input type="date" className="bg-gray-50 border border-gray-100 text-gray-900 w-full lg:w-1/3 p-4 rounded-lg" />
    </div>
    <div className="text-[#333333]">
      <h2 className="text-[48px] font-[500] mb-8 text-center">Our Destination</h2>
      <div className="flex flex-col lg:flex-row md:flex-row justify-between bg-[#6f9fff27] rounded-lg w-[100%] mx-auto p-4">
        <div className="mr-4">
          <img src={train1} alt="" className="rounded-lg" />
          <p className="my-2 text-[32px]">Lagos</p>
        </div>
        <div className="mr-4">
          <img src={train2} alt="" className="rounded-lg" />
          <p className="my-2 text-[32px]">Abeokuta</p>
        </div>
        <div>
          <img src={train3} alt="" className="rounded-lg" />
          <p className="my-2 text-[32px]">Ibadan</p>
        </div>
      </div>
    </div>
    </section>
    <section className="w-[100%] h-full bg-cover py-16 px-10 bg-center bg-no-repeat bg-[#000000] bg-opacity-70 bg-blend-overlay text-white"  style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1523351445-626ec3a80d21?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>
      <h2 className="text-[48px] font-bold text-center leading-[58px] uppercase mb-8">upcoming schedules</h2>
    <div className="flex justify-between items-center w-[90%] mx-auto text-center text-[24px] ">
      <div>
        <p className="uppercase">Monday</p>
        <h2 className="text-[48px] font-[500] mb-8">Jan 3</h2>
        <p className="mt-4">12:00PM</p>
        <p className="border-b  border-white mb-8 px-20">Lagos - Abeokuta</p>
        <p className="mt-4">02:00PM</p>
        <p className="border-b  border-white  mb-8">Ibadan - Abeokuta</p>
        <p className="mt-4">07:00PM</p>
        <p className="border-b  border-white ">Abeokuta - Lagos</p>
      </div>
      <div>
      <p className="uppercase">Tuesday</p>
        <h2 className="text-[48px] font-[500] mb-8">Jan 4</h2>
        <p className="mt-4">12:00PM</p>
        <p className="border-b  border-white pb-2 px-20 mb-8">Lagos - Abeokuta</p>
        <p className="mt-4">02:00PM</p>
        <p className="border-b  border-white  mb-8">Ibadan - Abeokuta</p>
        <p className="mt-4">07:00PM</p>
        <p className="border-b  border-white ">Abeokuta - Lagos</p>
      </div>
      <div>
      <p className="uppercase">Wednesday</p>
        <h2 className="text-[48px] font-[500] mb-8">Jan 5</h2>
        <p className="mt-4">12:00PM</p>
        <p className="border-b  border-white  mb-8 px-20">Lagos - Abeokuta</p>
        <p className="mt-4">02:00PM</p>
        <p className="border-b  border-white  mb-8">Ibadan - Abeokuta</p>
        <p className="mt-4">07:00PM</p>
        <p className="border-b  border-white ">Abeokuta - Lagos</p>
      </div>
    </div>
    </section>
    <section className="flex justify-between lg:w-[85%] md:w-[85%] w-[100%] mx-auto py-28">
      <div className="flex flex-wrap justify-between w-[100%] lg:w-[60%] md:w-[60%]">
        <div className="lg:w-[45%] md:w-[45%] w-[90%] mb-16">
          <img src={icon} alt="" />
          <h3 className="font-[500] mt-6 mb-2 capitalize">Online booking</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt nesciunt maiores iure. Quibusdam facilis, suscipit nihil cupiditate totam repudiandae. Alias!</p>
        </div>
        <div className="lg:w-[45%] md:w-[45%] w-[90%] mb-16">
          <img src={icon} alt="" />
          <h3 className="font-[500] mt-6 mb-2 capitalize">Flexibility</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt nesciunt maiores iure. Quibusdam facilis, suscipit nihil cupiditate totam repudiandae. Alias!</p>
        </div>
        <div className="lg:w-[45%] md:w-[45%] w-[90%] mb-8">
          <img src={icon} alt="" />
          <h3 className="font-[500] mt-6 mb-2 capitalize">Comfortable Trips</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt nesciunt maiores iure. Quibusdam facilis, suscipit nihil cupiditate totam repudiandae. Alias!</p>
        </div>
        <div className="lg:w-[45%] md:w-[45%] w-[90%] mb-8">
          <img src={icon} alt="" />
          <h3 className="font-[500] mt-6 mb-2 capitalize">FirstHand Updates</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt nesciunt maiores iure. Quibusdam facilis, suscipit nihil cupiditate totam repudiandae. Alias!</p>
        </div>
      </div>
      <div className="w-[100%] lg:w-[38%] md:w-[38%] self-center">
    <h2 className="text-[40px]  font-[500] text-right">We are offering the best hassle-free online train ticketing system</h2>
      </div>
    </section>
    <section>
    <ReviewSlider />
    </section>
    <section className="lg:w-[85%] md:w-[85%] w-[100%] mx-auto pb-24 pt-36">
    <h2 className="text-[48px] font-[500] mb-8 capitalize text-center">frequently asked questions</h2>
      <AccordionUsage />
    </section>
    
    </main>
  )
}

export default Home