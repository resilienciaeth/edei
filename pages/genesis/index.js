/* eslint-disable react/jsx-filename-extension */
import Head from 'next/head';
import Image from 'next/image';
import ReactPlayer from 'react-player';
import YouTube from 'react-youtube';
import React, { useEffect } from 'react';
import countdown from '../../components/Countdown';

import images from '../../public/assets';

import 'aos/dist/aos.css';
import Aos from 'aos';
import Countdown from '../../components/Countdown';

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="w-screen ">
      <nav className="flexBetween bg-transparent w-full edei-2 font-kooka z-10 p-4 sm:p-2 flex-row ">
        <div className="nm:text-6xl text-3xl nm:ml-[10rem] ml-2 text-white cursor-pointer " onClick={() => '/'}>EDEI</div>
        <div className="flex flex-row nm:space-x-[3rem] space-x-4 nm:mr-[10rem]">
          <p
            className="hidden cursor-pointer nm:flex text-edei-200"
            onClick={() => window.open('https://twitter.com/edeiNFT')}
          >
            Twitter

          </p>
          <p
            className="hidden cursor-pointer nm:flex text-edei-200"
            onClick={() => window.open('https://instagram.com/edei.io')}
          >
            Instagram

          </p>
          <div className="flex space-x-6 nm:hidden">
            <div>
              <Image
                src={images.twitter}
                width={30}
                height={30}
                onClick={() => window.open('https://twitter.com/edeiNFT')}
              />
            </div>
            <div>
              <Image
                src={images.instagram}
                width={30}
                height={30}
                onClick={() => window.open('https://instagram.com/edei.io')}
              />
            </div>
          </div>
        </div>
      </nav>
      <div className="flex edei-2 flex-col nm:flex-row h-screen">
        <div id="medium" className="nm:w-[50%] h-screen nm:mt-[2rem] flex-col flex justify-start nm:items-center nm:justify-center items-center">
          <h1 className="font-orkney  nm:flex hidden nm:px-[5rem] px-[3rem] w-full text-white text-2xl nm:text-5xl uppercase ">
            {' '}
            <span className="nm:before:block nm:before:absolute nm:before:-inset-8 nm:before:-skew-y-2 nm:before:bg-gradient-to-r nm:from-edei-100 nm:to-edei-200 nm:relative nm:inline-block">
              <span className="relative text-black font-bold ">BIENVENIDO A EDEI</span>
            </span>
          </h1>
          <div className="flex mt-[4rem] nm:hidden items-center text-edei-200 justify-center flex-col">
            <ReactPlayer url="https://www.youtube.com/watch?v=b6nCwY0i1Mg" width={340} height={200} controls="controls" autoPlay="true" />
          </div>
          <p className="text-white hidden nm:flex nm:text-sm px-4 text-sm mt-12 font-orkney w-full nm:px-[5rem]">EDEI es una comunidad de 3333 personas asociadas a la propiedad intelectual de 3333 Edeidades. Por cada Edeidad precomprada obtienes:</p>
          <p className="text-white font-bold hidden nm:flex nm:text-base px-4 text-sm mt-2 font-orkney w-full nm:px-[5rem]">
            +1 Edeidad
          </p>
          <p className="text-white font-bold hidden nm:flex nm:text-base px-4 text-sm mt-2 font-orkney w-full nm:px-[5rem]">

            +33 debooks

          </p>
          <p className="text-white font-bold hidden nm:flex nm:text-base px-4 text-sm mt-2 font-orkney w-full nm:px-[5rem]">
            +1 Ticket al Festival Soldout

          </p>
          <p className="text-white hidden nm:flex nm:text-sm px-4 text-sm mt-6 font-orkney w-full nm:px-[5rem]">Como todo son NFTs, poseeras 35 utilitarios que podrás vender por separado y disfrutarlos.</p>
          <p className="text-white hidden nm:flex nm:text-sm px-4 text-sm mt-6 font-orkney w-full nm:px-[5rem]">Si obtienes 3 Edeidades vas a tener acceso a los 3 roles subculturales existentes: Disruptor, Emprendedor e Inversor.</p>
          <div className="nm:flex hidden nm:mt-10 mt-16 w-full justify-center items-center nm:flex-row nm:space-x-10">
            <button className="bg-gradient-to-r from-edei-100 to-edei-200 hover:from-white hover:to-white text-black font-orkney text-center font-bold px-7 nm:px-4 py-4 w-full nm:w-auto  border-2 hover:border-edei-200 rounded-lg" onClick={() => window.open('/genesis/fiat')}>
              ACCEDER A EDEI (EUROS)
            </button>
            <button className="bg-gradient-to-r from-edei-100 to-edei-200 hover:from-white hover:to-white text-black font-orkney font-bold text-center px-4 py-4 border-2 w-full nm:w-auto hover:border-edei-200 rounded-lg" onClick={() => window.open('/crypto')}>
              ACCEDER A EDEI (CRYPTO)

            </button>
          </div>
          <svg
            className="arrows flex nm:hidden cursor-pointer"
            handleClick={() => document.getElementById('medium').scrollIntoView({ behavior: 'smooth' })}
          >
            <path className="a1" d="M0 0 L30 32 L60 0" onClick={() => document.getElementById('medium').scrollIntoView({ behavior: 'smooth' })} />
            <path className="a2" d="M0 20 L30 52 L60 20" handleClick={() => document.getElementById('medium').scrollIntoView({ behavior: 'smooth' })} />
            <path className="a3" d="M0 40 L30 72 L60 40" handleClick={() => document.getElementById('medium').scrollIntoView({ behavior: 'smooth' })} />
          </svg>
          <div className="flex">
            <div className="nm:mt-0 mt-0 flex flex-col rounded-3xl py-10">
              <div className="flex justify-center items-center">
                <p className="nm:text-xl text-lg  font-orkney text-white">
                  EDEIDADES EN PREVENTA:
                  {' '}
                  <span className="font-bold text-2xl  text-edei-200">333/3333</span>
                </p>
              </div>
              <Countdown />

            </div>
          </div>
        </div>
        <div className="nm:w-[50%] space-y-5 hidden h-screen nm:flex flex-col justify-center items-center edei-1">
          <p className="text-sm  typing-demo">Este video es todo lo que necesitas para entender EDEI.</p>
          <ReactPlayer url="https://www.youtube.com/watch?v=b6nCwY0i1Mg" width={600} height={300} controls="controls" autoPlay="true" />
        </div>
        <div id="medium" className="w-full h-auto nm:hidden flex flex-col justify-center items-center edei-1 mt-[8rem]">
          <h1 className="font-orkney mt-[7rem]  flex nm:hidden nm:px-[5rem] mb-10 px-[3rem] w-full text-white text-2xl nm:text-6xl uppercase ">
            {' '}
            <span className="before:block before:absolute before:-inset-8 before:-skew-y-2 before:bg-gradient-to-r from-edei-700 to-edei-700 relative inline-block">
              <span className="relative text-edei-200 font-bold ">BIENVENIDO A EDEI</span>
            </span>
          </h1>
          <p className="text-black nm:hidden flex nm:text-base px-4 text-sm mt-10 font-orkney w-full nm:px-[5rem]">EDEI es una comunidad de 3333 personas asociadas a la propiedad intelectual de 3333 Edeidades. Por cada Edeidad precomprada obtienes:</p>
          <p className="text-black nm:hidden flex nm:text-base px-4 text-sm mt-5 font-orkney w-full nm:px-[5rem]">+1 Edeidad</p>
          <p className="text-black nm:hidden flex nm:text-base px-4 text-sm mt-5 font-orkney w-full nm:px-[5rem]">+33 debooks</p>
          <p className="text-black nm:hidden flex nm:text-base px-4 text-sm mt-5 font-orkney w-full nm:px-[5rem]">+1 Ticket al Festival Soldout</p>
          <p className="text-black nm:hidden flex nm:text-base px-4 text-sm mt-10 font-orkney w-full nm:px-[5rem]">Como todo son NFTs, poseeras 35 utilitarios que podrás vender por separado y disfrutarlos.</p>
          <p className="text-black nm:hidden flex nm:text-base px-4 text-sm mt-10 font-orkney w-full nm:px-[5rem]">Si obtienes 3 Edeidades vas a tener acceso a los 3 roles subculturales existentes: Disruptor, Emprendedor e Inversor.</p>
          <div className="flex nm:hidden nm:mt-10 mt-16 w-full px-8 space-y-4 justify-center items-center flex-col nm:space-x-10 mb-[3rem]">
            <button className="bg-gradient-to-r text-white hover:text-black from-edei-500 to-edei-700 hover:from-white hover:to-white font-orkney text-center px-7 nm:px-4 py-4 w-full  border-2 hover:border-edei-200 rounded-lg" onClick={() => window.open('/genesis/fiat')}>
              ACCEDER A EDEI (EUROS)
            </button>
            <button className="bg-gradient-to-r text-white hover:text-black from-edei-500 to-edei-700 hover:from-white hover:to-white font-orkney text-center px-4 py-4 border-2 w-full hover:border-edei-200 rounded-lg" onClick={() => window.open('/crypto')}>
              ACCEDER A EDEI (CRYPTO)
            </button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Home;
