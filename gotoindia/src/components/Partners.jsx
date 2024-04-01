import {  HiArrowLongRight } from "react-icons/hi2";

export default function Partners() {
  return (
    <div className="pb-[5%] relative bg-[#cca479]">
    <img src="" alt="" className="absolute h-full w-full opacity-10"/>
    <div className="relative z-10">
        <p className="text-center text-sm pb-4">Thank You</p>
        <h1 className="lg:text-3xl text-white font-poppins text-center">To Our Sponsors and <br/>Event 
        <span className="text-black"> Partners</span></h1>
    </div>
    <div className="py-[5%] flex flex-wrap items-center justify-center gap-x-8">
        <img src="\Natgeologo.svg.png" alt="national geographic logo" className="lg:w-52 w-40 lg:h-52 object-contain"/>
        <img src="\Official_Logo_of_Maharashtra_tourism_Development_Corporation_Orange_on_white_logo.png" alt="maharashtra tourism logo" className="lg:w-52 w-40 lg:h-52 object-contain"/>
        <img src="\BBC_Logo_2021.svg.png" alt="national geographic logo" className="lg:w-52 w-40 lg:h-52 object-contain"/>
        <img src="\Ministry_of_Tourism_India.svg.png" alt="national geographic logo" className="lg:w-52 w-40 lg:h-52 object-contain"/>
    </div>
    <div className="flex justify-center pb-[5%]">
        <button className="border border-solid border-black flex items-center justify-center gap-x-2 h-14 bg-transparent px-16 text-lg hoverButton">
            BOOK NOW <HiArrowLongRight/>
        </button>
    </div>
    </div>
  )
}
