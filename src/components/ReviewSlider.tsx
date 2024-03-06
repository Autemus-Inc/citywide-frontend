import { useState } from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { RiStarSFill } from "react-icons/ri";
import { BsFillChatQuoteFill } from "react-icons/bs";

const ReviewSlider = () => {
    interface Review {
        id: number,
        message: string,
        name: string,
        location: string
    }

    const review:Review[] = [
        {
            id: 1,
            message: "Seamless booking experience. The user interface was intuitive, making it easy to select travel dates, routes, and classes. The entire process was quick and hassle-free, ensuring a convenient booking experience.",
            name: "adeola faleke",
            location: "lagos"
        },
        {   
            id: 2,
            message: "I appreciated the promptness of ticket confirmations. Within moments of completing the booking, I received a confirmation email and SMS with all the necessary details. The reliability of this service gave me confidence in my travel plans.",
            name: "Oluwafemi Ayanlola",
            location: "Osun"
        },
        {
            id: 3,
            message: "The mobile app for the train e-ticketing service was user-friendly and feature-rich. It allowed me to manage my bookings, check train schedules, and receive real-time updates on my journey. The app's design enhanced the overall user experience.",
            name: "Chukwuma ojukwu",
            location: "Edo"
        },
        {
            id: 4,
            message: "The e-ticketing service offered a variety of payment options, including credit cards, debit cards, and digital wallets. This flexibility made it convenient for users with different preferences, ensuring a smooth and secure payment process.",
            name: "halima basiru",
            location: "lagos"         
        },
        {
            id: 5,
            message: "The customer support team was incredibly responsive and helpful. They addressed my concerns promptly, providing a positive customer service experience. This level of support added to the overall satisfaction with the e-ticketing service.",
            name: "Steven osborne",
            location: "Abuja"
        }
    ]

    function prevReview() {
        setIndex(prev => { 
            if(prev === 0) {
            return  prev = review.length - 1
            }
            return prev - 1
        })
    }

    function nextReview() {
        setIndex(prev => { 
            if(prev === review.length - 1) {
            return  prev = 0
            }
            return prev + 1
        })
    }

    const [index, setIndex] = useState(0);
    let currentIndex = review[index];

    const reviewCard = <div className="bg-white absolute rounded-lg p-8 bottom-[-100px] right-36 border w-[100%] lg:w-[30%] md:w-[30%] text-[16px]">
        <BsFillChatQuoteFill className="absolute left-1/2 transform -translate-x-1/2 top-[-15px] text-4xl" />
        <div className="flex justify-center text-yellow-400 text-2xl my-2"><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill className="text-gray-300"/></div>
        <p className="">{currentIndex.message}</p>
        <p className="capitalize font-[500] mt-6">{currentIndex.name}, {currentIndex.location}</p>
    </div>

  return (
    <section style={{ backgroundImage: 'url("https://i0.wp.com/media.premiumtimesng.com/wp-content/files/2023/01/WhatsApp-Image-2023-01-24-at-13.38.36-1.jpeg?resize=1140%2C570&ssl=1")' }} className="bg-cover bg-center h-[60vh] bg-gray-300 bg-blend-overlay w-full flex justify-center items-center relative">
        <div className="flex justify-between w-[90%] mx-auto items-center">
        <div className="w-[100%] lg:w-2/3 md:w-2/3 ">
            <h2 className="text-[48px] font-[500] mb-8">With our Experience, <br /> we serve you better</h2>
            <p className="text-[16px]">Hear What Our Satisfied Clients Say</p>
            <div className="mt-8">
            <button onClick={prevReview}><IoIosArrowDropleft className="text-4xl mr-4" /></button>
            <button onClick={nextReview}><IoIosArrowDropright className="text-4xl" /></button>
            </div>
        </div>
        <div className="w-[100%] lg:w-1/3 md:w-1/3 ml-4 self-center">
            <img src="https://img.freepik.com/free-photo/medium-shot-man-holding-baggage-tickets_23-2149243462.jpg?t=st=1709678983~exp=1709679583~hmac=da87bbf04da3a6691c76b8ffa1c60ac7eba29b2dac0af1750f8ca88eb6e929d0" alt="" className="rounded-full h-[50vh] object-cover object-center" />
        </div>
        <div>{reviewCard}</div>
        </div>
    </section>
  )
}

export default ReviewSlider