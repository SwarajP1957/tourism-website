import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { SlArrowRight } from "react-icons/sl";


export default function About() {
    return (
        <div id="about" className="bg-[#cca479] relative">
            <div className="container mx-auto pt-24 px-3">
                <p className="text-center text-sm pb-4">10 THINGS</p>
                <h1 className="lg:text-3xl text-white font-poppins text-center">
                    You probably didn't know <br />
                    about <span>ancient India</span>
                </h1>
                <section className="lg:flex py-[10%] justify-center gap-x-[10%]">
                    <div className="text-white lg:w-1/4">
                        <h2 className="lg:text-3xl">MAHARASHTRA</h2>
                        <p className="leading-7 py-6">
                            GANESH MANDIR
                        </p>
                        <a href="a" className="text-black">
                            Read more
                        </a>
                    </div>
                    <div className="relative lg:h-[25rem] h-[230px] w-[230px] lg:w-[230px] lg:mx-0 mx-auto">
                        <div className="linear-gradient absolute h-full w-full rotate"></div>
                        <img src="/pexels-ankit-rainloure-15658375.jpg" alt="image of kjdwow" className="absolute w-full h-full object-contain lg:-top-20 lg:-left-8" />
                        <div className="absolute -right-8 top-0 flex vertical-text ">
                            <p className="text-sm rotate-text">GANESH</p>
                            <SlArrowRight className="text-white text-2xl rotate-45" />
                        </div>

                    </div>
                </section>
                <div className="flex lg:flex-row flex-col-reverse pt-[10%] pb-[5%] justify-center gap-x-[10%]">
                    <div className="relative lg:h-[25rem] h-[250px] lg:w-[25rem] w-[250px] lg:mx-0 mx-auto lg:py-0 flex justify-center item-center">
                        <div className="linear-gradient absolute h-full w-full rounded-full"></div>
                        <img src="/pexels-ankush-rathi-925067.jpg" alt="image of" className="absolute lg:w-[120%] w-full h-full object-contain lg:-top-20 lg:-left-0" />

                        <div className="absolute -left-8 flex vertical-text ">
                            <p className="text-sm ritate-text">Stepwell</p>
                            <SlArrowRight className="text-white text-2xl rotate-135" />
                        </div>
                    </div>
                    <div className="text-white lg:w-1/4">
                        <h2 className="lg:text-3xl">JAIPUR</h2>
                        <p className="leading-7 py-6"> Panna Meena Kund </p>
                        <a href="a" className="text-black">
                            Read more
                        </a>
                    </div>
                </div>
                <div className="flex justify-center lg:pt-0 py-[10%]">
                    <button className="border border-solid border-black flex items-center justify-center gap-x-2 h-14 bg-transparent px-16 text-lg hover-Button">
                        SHOW MORE <HiArrowLongRight /></button>
                </div>
                <section className="ld:py-0 py-[10%]">
                    <p className="text-center text-sm pb-4">
                        THE ANCIENT
                    </p>
                    <h1 className="lg:text-3xl text-white font-poppins text-center">
                        INDIAN <span className="text-black">ARCHITECHTURE</span>
                    </h1>
                    <div className="lg:flex lg:w-3/4 mx-auto text-white py-[5%] leading-7 gap-x[10%]">
                        <p>The structure was built in 1799 by the Maharaja Sawai Pratap Singh, grandson 
                        of Maharaja Sawai Jai Singh, the founder of the city of Jhunjhunu in the state of 
                        Rajasthan.He was so inspired by the unique structure of Khetri Mahal that he built 
                        this grand and historical palace.
 </p>
                        <p>This palace is a five-story pyramidal shaped monument that rises to about 50 feet (15 m).
                         The top three floors of the structure have the width of a single room, while the first and
                          second floors have patios in front of them. The front elevation, as seen from the street, 
                          is like a honeycomb with small portholes.</p>
                    </div>
                    <div className="lg:w-3/4 lg:h-[40rem] mx-auto">
                        <img src="\pexels-jayesh-singh-15395061.jpg" alt="image of " className="w-full h-full object-cover" />
                    </div>
                </section>

                <section className="py-[10%]">
                    <p className="text-center text-sm pb-4">GO BACK IN TIME</p>
                    <h1 className="lg:text-3xl text-white font-poppins text-center">with our top <span className="text-black">experiences</span></h1>
                    <p className="text-white lg:w-1/3 py-8 mx-auto text-center leading-7">
                        magnificent monuments, lush delta, and with its long past and welcoming, story-loving people
                    </p>
                    <div className="relative flex flex-col items-center justify-center pt-12">
                        <div className="flex lg:flex-row flex-col lg:w-4/5 w-full mx-auto gap-y-4">
                            <div className="relative lg:w-1/3 lg:h-[40rem] h-80 flex flex-col justify-center items-center hoverBtn">
                                <img src="\pexels-shubham-jana-14629732.jpg" alt="image of " className="absolute w-full h-full object-cover" />
                                <span className="absolute button-8 text-white text-center">
                                    <p className="text-sm">DELHI</p>``
                                    <p className="lg:text-3xl font-poppins">HUMAYUN'S TOMB</p>
                                </span>
                            </div>
                            <div className="relative lg:w-1/3  lg:h-[40rem] h-80 flex flex-col justify-center items-center hoverBtn">
                                <img src="\pexels-victor-lavaud-3361480.jpg" alt="image of " className="absolute w-full h-full object-cover" />
                                <span className="absolute button-8 text-white text-center">
                                    <p className="text-sm">AGRA</p>
                                    <p className="lg:text-3xl font-poppins">TAJ MAHAL</p>
                                </span>
                            </div>
                            <div className="relative lg:w-1/3  lg:h-[40rem] h-80 flex flex-col justify-center items-center hoverBtn">
                                <img src="\pexels-prabhala-raghuvir-57901.jpg" alt="image of " className="absolute w-full h-full object-cover" />
                                <span className="absolute button-8 text-white text-center">
                                    <p className="text-sm">MADHYA PRADESH</p>
                                    <p className="lg:text-3xl font-poppins">GANGA AARTI</p>
                                </span>
                            </div>
                        </div>
                        <button className="absolute left-4 lg:flex hidden flex-col bg-transparent border-none outline-none cursor-pointer"> 
                        <HiArrowLongLeft className="text-2xl"/>BACK</button>
                        <button className="absolute right-4 lg:flex hidden flex-col bg-transparent border-none outline-none cursor-pointer">
                        <HiArrowLongRight className="text-2xl"/>NEXT</button>
                    </div>
                </section>
            </div>
        </div>
    );
}
