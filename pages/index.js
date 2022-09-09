/* eslint-disable react/jsx-filename-extension */
import Head from 'next/head';
import Image from 'next/image';
import ReactPlayer from 'react-player';
import YouTube from 'react-youtube';

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
      <nav className="flexBetween bg-transparent w-full edei-2 font-kooka z-10 p-4 sm:p-2 flex-row ">
        <div className="nm:text-6xl text-3xl nm:ml-[10rem] ml-2 text-white ">EDEI</div>
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
      <div className="flex edei-2 flex-col nm:flex-row">
        <div className="nm:w-[50%] h-screen flex-col flex justify-start nm:items-center nm:justify-center items-center ">
          <h1 className="font-orkney  nm:flex hidden nm:px-[5rem] px-[3rem] w-full text-white text-2xl nm:text-5xl uppercase ">
            {' '}
            <span className="nm:before:block nm:before:absolute nm:before:-inset-8 nm:before:-skew-y-2 nm:before:bg-gradient-to-r nm:from-edei-100 nm:to-edei-200 nm:relative nm:inline-block">
              <span className="relative text-black font-bold ">BIENVENIDO A EDEI</span>
            </span>
          </h1>
          <div className="flex mt-[4rem] nm:hidden items-center text-edei-200 justify-center flex-col">
            <h1 className="font-orkney mb-2 font-bold text-3xl">BIENVENIDO A EDEI</h1>
            <ReactPlayer url="https://www.youtube.com/watch?v=b6nCwY0i1Mg" width={340} height={200} controls="controls" autoPlay="true" />
          </div>
          <p className="text-white hidden nm:flex nm:text-base px-4 text-sm mt-12 font-orkney w-full nm:px-[5rem]">EDEI es una comunidad de 3333 personas asociadas a la propiedad intelectual de 3333 NFTs. Estos se llaman Edeidades y por cada uno de ellos que adquieras obtienes: 1 Edeidad, 33 DeBooks y 1 acceso al Festival Soldout, un evento exclusivo para los miembros de la comunidad. Todos son NFTs, por ello puedes disfrutarlos y/o venderlos por separado como diferentes utilitarios.</p>
          <div className="nm:flex hidden nm:mt-10 mt-16 w-full justify-center items-center nm:flex-row nm:space-x-10">
            <button className="bg-gradient-to-r from-edei-100 to-edei-200 hover:from-white hover:to-white text-black font-orkney text-center font-bold px-7 nm:px-4 py-4 w-full nm:w-auto  border-2 hover:border-edei-200 rounded-lg">ACCEDER A EDEI (EUROS)</button>
            <button className="bg-gradient-to-r from-edei-100 to-edei-200 hover:from-white hover:to-white text-black font-orkney font-bold text-center px-4 py-4 border-2 w-full nm:w-auto hover:border-edei-200 rounded-lg">ACCEDER A EDEI (CRYPTO)</button>
          </div>
          <svg
            className="arrows flex nm:hidden cursor-pointer"
            handleClick={() => document.getElementById('medium').scrollIntoView({ behavior: 'smooth' })}
          >
            <path className="a1" d="M0 0 L30 32 L60 0" handleClick={() => document.getElementById('medium').scrollIntoView({ behavior: 'smooth' })} />
            <path className="a2" d="M0 20 L30 52 L60 20" handleClick={() => document.getElementById('medium').scrollIntoView({ behavior: 'smooth' })} />
            <path className="a3" d="M0 40 L30 72 L60 40" handleClick={() => document.getElementById('medium').scrollIntoView({ behavior: 'smooth' })} />
          </svg>
          <div className="flex">
            <div className="nm:mt-[2rem] mt-0 flex flex-col rounded-3xl py-10">
              <div className="flex justify-center items-center">
                <p className="nm:text-xl text-lg  font-orkney text-white">EDEIDADES EN PRE-VENTA: 333/3333</p>
              </div>
              <div className="flex mt-6 space-y-4 nm:-space-y-10 flex-col nm:flex-row items-center justify-center w-full nm:space-x-10">
                <div className="flex flex-col nm:w-[90%] bg-zinc-900 rounded-3xl px-10 py-2 nm:py-0 nm:px-5 nm:mb-10 h-full  items-center justify-center border-2 border-slate-700">
                  <p className="text-xl py-2 font-orkney text-white">Edeidades Disponibles</p>
                  <div className="flex flex-row space-x-5 ">
                    <p className="text-xl nm:text-3xl rounded-3xl border-2 px-5 py-5 bg-edei-200">2</p>
                    <p className="text-xl nm:text-3xl rounded-3xl border-2 px-5 py-5 bg-edei-200">0</p>
                    <p className="text-xl nm:text-3xl rounded-3xl border-2 px-5 py-5 bg-edei-200">6</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nm:w-[50%] space-y-5 hidden h-screen nm:flex flex-col justify-center items-center edei-1">
          <p className="text-sm  typing-demo">Este video es todo lo que necesitas para entender EDEI.</p>
          <ReactPlayer url="https://www.youtube.com/watch?v=b6nCwY0i1Mg" width={600} height={300} controls="controls" autoPlay="true" />
        </div>

        <div className="w-full h-screen nm:hidden flex flex-col justify-center items-center edei-1">
          <h1 id="medium" className="font-orkney flex nm:hidden nm:px-[5rem] mb-10 px-[3rem] w-full text-white text-2xl nm:text-6xl uppercase ">
            {' '}
            <span className="before:block before:absolute before:-inset-8 before:-skew-y-2 before:bg-gradient-to-r from-edei-700 to-edei-700 relative inline-block">
              <span className="relative text-edei-200 font-bold ">BIENVENIDO A EDEI</span>
            </span>
          </h1>
          <p className="text-black nm:hidden flex nm:text-base px-4 text-sm mt-10 font-orkney w-full nm:px-[5rem]">EDEI es una comunidad de 3333 personas asociadas a la propiedad intelectual de 3333 NFTs. Estos se llaman Edeidades y por cada uno de ellos que adquieras obtienes: 1 Edeidad, 33 DeBooks y 1 acceso al Festival Soldout, un evento exclusivo para los miembros de la comunidad. Todos son NFTs, por ello puedes disfrutarlos y/o venderlos por separado como diferentes utilitarios.</p>
          <div className="flex nm:hidden nm:mt-10 mt-16 w-full px-8 space-y-4 justify-center items-center flex-col nm:space-x-10">
            <button className="bg-gradient-to-r text-white hover:text-black from-edei-500 to-edei-700 hover:from-white hover:to-white font-orkney text-center px-7 nm:px-4 py-4 w-full  border-2 hover:border-edei-200 rounded-lg">ACCEDER A EDEI (EUROS) </button>
            <button className="bg-gradient-to-r text-white hover:text-black from-edei-500 to-edei-700 hover:from-white hover:to-white font-orkney text-center px-4 py-4 border-2 w-full hover:border-edei-200 rounded-lg">ACCEDER A EDEI  (CRYPTO)</button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Home;
