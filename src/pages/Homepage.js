import React, { useEffect, useState } from 'react';
import image01 from "../images/ricardo-gomez-angel-7bzbyafVTYg-unsplash.jpg";
import image02 from "../images/saad-salim-PqRvLsjD_TU-unsplash.jpg";
import image03 from "../images/scott-blake-x-ghf9LjrVg-unsplash.jpg";
import image04 from "../images/wall-of-an-ancient-orthodox-church-monument-of-old-brick-russian-architecture-with-texture-of-clay-brick-decorated-with-inserts-of-colored-stones-in-the-shape-of-crosses-photo.jpg";
import image05 from "../images/banginis.jpg";
import imageLOGO from "../images/PONTIFICUS (500 x 300 px) (400 x 200 px) - Copy.png";
import imageWhite from "../images/PONTIFICUS white - Copy.png";
import icon01 from '../images/church - Copy.png'
import icon02 from '../images/machine - Copy.png'
import icon03 from '../images/people - Copy.png'
import icon04 from '../images/plan - Copy.png'
import icon05 from '../images/Untitled (100 x 100 px) - Copy.png'




const Homepage = () => {


    const images = [
        image03,
        image04,
        image05
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [images.length]);

    return (
        <div className={`h-full`}>
                <div className="header w-full h-screen relative">
                    {/* Carousel background images */}
                    <div className="relative h-full w-full">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                                }`}
                            >
                                <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover"/>
                            </div>
                        ))}
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

                    {/* Navigation */}
                    <div id={'start'} className="nav bg-white items-center p-5 fixed top-0 left-0 w-full flex justify-between z-30 shadow-xl">
                        <div className="h-[50px] w-[100px]">
                            <a href="#pradžia"><img src={imageLOGO} className={``} alt=""/></a>
                        </div>
                        <div className="">
                            <ul className="sm:flex gap-3 mb-0 hidden text-black hover:text-gray-600">
                                <li className="me-3">
                                    <a href="#pradžia">Pradžia</a>
                                </li>
                                <li className="me-3">
                                    <a href="#apie-mus">Apie</a>
                                </li>
                                <li className="me-3">
                                    <a href="#paslaugos">Paslaugos</a>
                                </li>
                                <li className="me-3">
                                    <a href="#kontaktai">Kontaktai</a>
                                </li>

                            </ul>
                        </div>
                    </div>

                    {/* Centered Heading */}
                    <div id={`pradžia`}
                        className="absolute mx-[100px] mt-5 inset-0 flex flex-col items-center justify-center text-white z-20 space-y-2 gap-4">
                        <h1 className="headerText lg:text-8xl mt-5 sm:text-6xl text-4xl text-center">Mes Padedame Statyti Jūsų Ateitį, Prižiūrime Dabartį ir Praeitį</h1>
                        <h5 className="text-2xl text-center">Ženkite žingsnį pirmyn kartu su Pontificus</h5>
                        <div className="btn bg-amber-500 py-3 px-12"><a href="#kontaktai">SUSISIEKTI</a>
                        </div>
                    </div>

                </div>

            {/* Padding to prevent content overlap */}
            <div id={`paslaugos`}
                className="p-3 mt-24 flex justify-center services"> {/* Add margin-top to avoid overlapping the fixed navbar */}
                <div className="container flex flex-col items-center mb-24">
                    <p className={`text-4xl`}>Mūsų Paslaugos</p>
                    <div className="w-[600px] text-center mt-6 text-gray-500">
                        <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolor
                            doloremque dolorum et minima.</p>

                    </div>
                    <div className="flex lg:flex-row flex-wrap flex-col justify-center  gap-4 mt-10">
                        <div className="serviceCard flex flex-col items-center gap-1">
                            <img src={icon03} className={`h-[80px]`} alt=""/>
                            <p className={`text-xl`}>Statybos Techninė Priežiūra</p>
                            <p className="text-gray-500 w-72 text-center text-sm mt-2">Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Hic, nesciunt.</p>
                        </div>
                        <div className="serviceCard flex flex-col items-center gap-1">
                            <img src={icon02} className={`h-[80px]`} alt=""/>

                            <p className={`text-xl`}>Pastatų Techninė Priežiūra</p>
                            <p className="text-gray-500 w-72 text-center text-sm mt-2">Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Hic, nesciunt.</p>
                        </div>
                        <div className="serviceCard flex flex-col items-center gap-1">
                            <img src={icon01} className={`h-[80px]`} alt=""/>


                            <p className={`text-xl text-center`}>Tvarkybos Darbų Techninė Priežiūra</p>
                            <p className="text-gray-500 w-72 text-center text-sm mt-2">Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Hic, nesciunt.</p>
                        </div>
                        <div className="serviceCard flex flex-col items-center gap-1">
                            <img src={icon04} className={`h-[80px]`} alt=""/>
                            <p className={`text-xl`}>Statybų Konsultacija</p>
                            <p className="text-gray-500 w-72 text-center text-sm mt-2">Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Hic, nesciunt.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id={`apie-mus`} className=" bg-gray-100 w-full">
                <div className="aboutMe xl:mx-[200px] mx-10 p-5 py-20 flex md:flex-row flex-col lg: gap-4">
                    <div className="">
                        <img src={image01} width={`550px`} className={``} alt=""/>
                    </div>
                    <div className="md:w-1/2 w-full flex flex-col p-3">
                        <p className="text-3xl ">Apie Mus</p>
                        <p className="text-wrap text-gray-500 mt-5">Hello! I'm Alan Walker. I'm a web developer, and I'm
                            very passionate and dedicated to my work. With 20 years experience as a professional web
                            developer, I have acquired the skills and knowledge necessary to make your project a
                            success. I enjoy every step of the design process, from discussion and collaboration.</p>
                    </div>
                </div>
            </div>
            <div className="divider w-full h-[200px] relative">
                <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
                <div
                    className="absolute mx-[100px]  inset-0 flex flex-col items-center justify-center text-white z-10 space-y-2 gap-4">
                </div>
            </div>
            <div className="flex flex-col gap-3 p-6 h-[400px]" id={`kontaktai`}>
                <p className="text-3xl text-center m-2 mt-5 font-semibold">Kontaktai</p>
                <p className="text-center text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolor
                    doloremque dolorum et minima.</p>
                <div
                    className="contacts flex md:justify-center justify-around items-center md:gap-[300px] gap-4 h-full">
                    <div className="flex flex-col gap-3 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="size-14 text-amber-500">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"/>
                        </svg>
                        <p className="font-semibold text-xl">Telefono nr.</p>
                        <p className="text-gray-600">+37068607116</p>
                    </div>
                    <div className="flex flex-col gap-3 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="size-12 text-amber-500">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/>
                        </svg>
                        <p className="font-semibold text-xl">El. paštas</p>
                        <p className="text-gray-600">makaravicius@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className="footer h-[200px] flex items-center justify-between px-[100px]">
                <div className="h-[150px] w-[150px] flex justify-center items-center">
                    <a href="#pradžia"><img src={imageWhite} className={``} alt=""/></a>
                </div>
                <div className="">
                <p className="text-gray-100  cur">© Copyright 2024 by Pontificus</p>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
