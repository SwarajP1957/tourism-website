import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export default function Hero() {
  return (
    <div className="bg-[url('/Home.jpg')] bg-cover bg-center bg-no-repeat" >
        <div className="container mx-auto flex flex-col justify-between min-h-screen lg:pt-0 pt-24">
            <div  className="flex flex-col items-center justify-center text-center gap-y-4 pt-[10%]">
                <p className="text[#ce8a5c]">THE ANCIENT WORLD</p>
                <h1 className="lg:text-4xl font-bold lg:leading-normal text-white font-poppins"> Discover the awe-inspiring <br />
                    Chittorgarh Fort Rajasthan and ancient India's
                </h1>
                <a href="#about" className="text-white no-underline"/>
                    <MdKeyboardDoubleArrowDown className="text-2xl"/>
                SCROLL DOWN<a/>

            </div>
            <div className="flex flex-col items-center justify-center text-center">
                <p className="text-white">THE ANCIENT</p>
                <h4 className="text-white text-2x1 py-4 font-poppins">Indian <span className="text-[#ce8a5c]" >tourism</span></h4>
            </div>
        </div>
    </div>
  )
}
