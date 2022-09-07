/* eslint-disable react/jsx-filename-extension */
import Head from 'next/head';
import Image from 'next/image';

import React, { useEffect } from 'react';
import images from '../public/assets';

import 'aos/dist/aos.css';
import Aos from 'aos';

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="w-screen h-screen">
      <nav className="flexBetween w-full edei-2 font-kooka z-10 p-4 sm:p-2 flex-row ">
        <div className="nm:text-6xl text-3xl nm:ml-[10rem] ml-2 text-white ">EDEI</div>
        <div className="flex flex-row nm:space-x-[3rem] space-x-4 nm:mr-[10rem]">
          <p className="hidden cursor-pointer nm:flex text-edei-200">Twitter</p>
          <p className="hidden cursor-pointer nm:flex text-edei-200">Instagram</p>
          <div className="flex space-x-6 nm:hidden">
            <div>
              <Image src={images.twitter} width={30} height={30} />
            </div>
            <div>
              <Image src={images.instagram} width={30} height={30} />
            </div>
          </div>
        </div>
      </nav>
      <div className="flex flex-col nm:flex-row">
        <div className="nm:w-[50%] h-screen flex-col flex justify-start nm:items-center nm:justify-center items-center edei-2">
          <h1 className="font-orkney  nm:flex hidden nm:px-[5rem] px-[3rem] w-full text-white text-2xl nm:text-5xl uppercase ">
            {' '}
            <span className="nm:before:block nm:before:absolute nm:before:-inset-8 nm:before:-skew-y-2 nm:before:bg-gradient-to-r nm:from-edei-100 nm:to-edei-200 nm:relative nm:inline-block">
              <span className="relative text-black font-bold ">BIENVENIDO A EDEI</span>
            </span>
          </h1>
          <div className="flex mt-[12rem] nm:hidden items-center text-edei-200 justify-center flex-col">
            <h1 className="font-orkney font-bold text-4xl">WTF IS EDEI?</h1>
            <p className="text-sm">Este video es todo lo que necesitas para entender EDEI</p>
            <video src="https://youtu.be/Ug0_oLkfsC4" width="340" height="200" controls="controls" autoPlay="false" poster="/public/assets/instagram.png" objectfit="cover" className="nm:hidden flex mt-4" />
          </div>
          <p className="text-white hidden nm:flex nm:text-base px-4 text-sm mt-12 font-orkney w-full nm:px-[5rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <div className="nm:flex hidden nm:mt-10 mt-16 w-full justify-center items-center nm:flex-row nm:space-x-10">
            <button className="bg-gradient-to-r from-edei-100 to-edei-200 hover:from-white hover:to-white text-black font-orkney text-center px-7 nm:px-4 py-4 w-full nm:w-auto  border-2 hover:border-edei-200 rounded-lg">COMPRAR CON FIAT</button>
            <button className="bg-gradient-to-r from-edei-100 to-edei-200 hover:from-white hover:to-white text-black font-orkney text-center px-4 py-4 border-2 w-full nm:w-auto hover:border-edei-200 rounded-lg">COMPRAR CON CRYPTO</button>
          </div>
          <svg className="arrows flex nm:hidden">
            <path className="a1" d="M0 0 L30 32 L60 0" />
            <path className="a2" d="M0 20 L30 52 L60 20" />
            <path className="a3" d="M0 40 L30 72 L60 40" />
          </svg>
        </div>
        <div className="nm:w-[50%] hidden h-screen nm:flex flex-col justify-center items-center edei-1">
          <p className="text-sm typing-demo">Este video es todo lo que necesitas para entender EDEI</p>
          <video src="https://youtu.be/Ug0_oLkfsC4" width="600" height="300" controls="controls" autoPlay="false" poster="/public/assets/instagram.png" />
        </div>
        <div className="w-full h-screen nm:hidden flex flex-col justify-center items-center edei-1">
          <h1 className="font-orkney flex nm:hidden nm:px-[5rem] mb-10 px-[3rem] w-full text-white text-2xl nm:text-6xl uppercase ">
            {' '}
            <span className="before:block before:absolute before:-inset-8 before:-skew-y-2 before:bg-gradient-to-r from-edei-700 to-edei-700 relative inline-block">
              <span className="relative text-edei-200 font-bold ">BIENVENIDO A EDEI</span>
            </span>
          </h1>
          <p className="text-black nm:hidden flex nm:text-base px-4 text-sm mt-10 font-orkney w-full nm:px-[5rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <div className="flex nm:hidden nm:mt-10 mt-16 w-full px-8 space-y-4 justify-center items-center flex-col nm:space-x-10">
            <button className="bg-gradient-to-r text-white hover:text-black from-edei-500 to-edei-700 hover:from-white hover:to-white font-orkney text-center px-7 nm:px-4 py-4 w-full  border-2 hover:border-edei-200 rounded-lg">COMPRAR CON FIAT</button>
            <button className="bg-gradient-to-r text-white hover:text-black from-edei-500 to-edei-700 hover:from-white hover:to-white font-orkney text-center px-4 py-4 border-2 w-full hover:border-edei-200 rounded-lg">COMPRAR CON CRYPTO</button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Home;
