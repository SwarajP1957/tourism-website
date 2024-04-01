import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md"
import { TbGridDots } from "react-icons/tb"
export const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);

    const showDropdown = () => {
        setDropdown(!dropdown);
    };
    return (
        <nav class="w-full h-24 flex flex-col justify-center items-center lg:bg-transparent bg-[url('/Home.jpg')] bg-cover lg:relative fixed z-20">
            <div class="container mx-auto 1g:px-6">
                <div class="1g:w-full w-11/12 mx-auto h-full flex justify-between item-center">
                    <div class="flex flex-col gap-y-4 lg:w-1/3">
                        <spam class="flex items-center gap-x-2 font-bold text-2x1">
                            <h1 class="font-poppins text-white text-3x1 font-bold">GOTO
                                <span class="text-[#ce8a5c]">INDIA.</span>
                            </h1>
                        </spam>
                    </div>
                    <ul class="flex-1 flex justify-center items-center gap-16 max-1g:hidden">
                        <a href="#" class="leading-normal text-lg no-underline text-white">Home</a>
                        <a href="#" className="leading-normal text-lg no-underline text-white">Explore</a>
                        <a href="#" className="leading-normal text-lg no-underline text-white">Articles</a>
                        <a href="#" className="leading-normal text-lg no-underline text-white">Galries</a>
                        <a href="#" className="leading-normal text-lg no-underline text-white">Contact</a>
                    </ul>
                    <div className="lg:black hidden">
                        <TbGridDots className="text:[#ce8a5c] text-4xl" />
                    </div>
                    {dropdown ? (
                        <div onClick={showDropdown} className="lg:hidden text-[22px] cursor-pointer text-black">
                            <MdClose />
                        </div>
                    ) : (
                        <div onClick={showDropdown} className="lg:hidden text-[22px] cursor-pointer text-black">
                            <HiMenuAlt3 />
                        </div>
                    )}
                </div>

                {dropdown ? (
                    <div onClick={showDropdown} className="lg:hidden w-full h-full fixed top-24 bg-[url('/Home.jpg')] bg-cover ease-in-out duration-100">
                        <div className="w-full h-[320px] flex flex-col items-baseline pt-8 gap-4">
                            <ul className="text-center p-0 flex flex-col justify-center w-full gap-y-8">
                                <a href="#" className="leading-normal text-lg no-underline text-white">Home</a>
                                <a href="#" className="leading-normal text-lg no-underline text-white">Explore</a>
                                <a href="#" className="leading-normal text-lg no-underline text-white">Articles</a>
                                <a href="#" className="leading-normal text-lg no-underline text-white">Galries</a>
                                <a href="#" className="leading-normal text-lg no-underline text-white">Contact</a>
                            </ul>
                        </div>
                    </div>
                ) : null}
            </div>
        </nav>
    )
}
