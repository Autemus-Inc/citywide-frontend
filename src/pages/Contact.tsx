import contactImg from "../assets/contact-img.svg"

const Contact = () => {
  return (
    <main>
      <div style={{ backgroundImage: 'url(https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/3b9258a932058747863716cbd322659a.jpg)'}} className="bg-cover bg-center bg-[#3c3b3b] bg-blend-overlay h-[60vh] text-center text-white flex  justify-center items-center ">
        <h2 className="lg:text-[48px] md:text-[48px] text-[36px] font-[700]">Contact Us</h2>
      </div>
      <div className="my-16">
      <h2 className="lg:text-[48px] md:text-[48px] text-[28px] font-[500] text-center mb-12">Feel free to drop a message</h2>
      <div className="flex w-[100%] lg:w-[80%] md:w-[80%] mx-auto justify-between items-center flex-col lg:flex-row md:flex-row">
        <div className="w-[90%] lg:w-[40%] md:w-[40%]">
        <input type="text" className="border p-4 rounded-md w-full mb-4" placeholder="Full name" />
        <input type="text" className="border p-4 rounded-md w-full mb-4" placeholder="Phone number" />
        <input type="text" className="border p-4 rounded-md w-full mb-4" placeholder="Email address" />
        <textarea name="" id="" className="w-full h-[20vh] border p-4 rounded-md mb-4" placeholder="Message"/>
        <button className="bg-[#4C6DF8] p-4 rounded-md text-white w-full font-[500] text-[18px]">Send</button>
        </div>
        <div className="w-[100%] lg:w-[50%] md:w-[50%] hidden lg:block md:block">
          <img src={contactImg} alt="" className="w-[100%]"/>
        </div>
      </div>
      </div>
    </main>
  )
}

export default Contact