import React, { useEffect } from 'react';
import Image from 'next/image';
import images from '../public/assets';
import ReactPlayer from 'react-player';
import YouTube from 'react-youtube';

import 'aos/dist/aos.css';
import Aos from 'aos';

const crypto = () => (
  <div className="w-screen h-screen">
    {/* Navbar */}
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

    <div className="flex edei-1 flex-col nm:flex-row">
      {/* Lado izquierdo desktop */}
      <div id="medium" className="nm:w-[50%] h-screen flex-col flex justify-start nm:items-center nm:justify-center items-center ">
        <h1 className="font-orkney  nm:flex hidden nm:px-[5rem] px-[3rem] w-full text-white text-2xl nm:text-5xl uppercase ">
          {' '}
          <span className="nm:before:block text-center nm:before:absolute nm:before:-inset-8 nm:before:-skew-y-2 nm:before:bg-gradient-to-r nm:from-edei-500 nm:to-edei-700 nm:relative nm:inline-block">
            <span className="relative text-edei-200 font-bold ">EDEI WALLET: 3d3e3i.eth</span>
          </span>
        </h1>
        <div className="flex mt-[10rem] nm:hidden items-center text-edei-200 justify-center flex-col">
          <h1 className=" mb-2 font-bold text-black text-xl">COMO COMPRAR CON CRYPTO </h1>
          <ReactPlayer url="https://www.youtube.com/watch?v=nDD0PsLSXBI&feature=youtu.be" width={340} height={200} controls="controls" autoPlay="true" />
        </div>
        <p className="text-black hidden nm:flex nm:text-base px-4 text-sm mt-20 font-orkney w-full nm:px-[5rem]">1. Enviar 375 USDT por cada Edeidad que quieras adquirir a la wallet superior. </p>
        <p className="text-black font-bold hidden nm:flex nm:text-base px-4 text-sm mt-2 font-orkney w-full nm:px-[5rem]">
          Tambien puedes usar la dirección completa: 0xbCfd3ba49A503f051bC5fE06d79C1B8Af8f91A0c)

        </p>
        <p className="text-black hidden nm:flex nm:text-base px-4 text-sm mt-2 font-orkney w-full nm:px-[5rem]">

          Por favor, solo enviar USDT y utilizar la red ERC20

        </p>
        <p className="text-black hidden nm:flex nm:text-base px-4 text-sm mt-5 font-orkney w-full nm:px-[5rem]">
          2. Enviar un email a 3D3E3I@gmail.com con la captura del pago.

        </p>
        <p className="text-black hidden nm:flex nm:text-base px-4 text-sm mt-6 font-orkney w-full nm:px-[5rem]">3. En un plazo de 24 horas recibiras nuestra respuesta y el acceso a la comunidad.</p>

        <svg
          className="arrows-mobile flex nm:hidden cursor-pointer"
        >
          <path className="a1" d="M0 0 L30 32 L60 0" />
          <path className="a2" d="M0 20 L30 52 L60 20" />
          <path className="a3" d="M0 40 L30 72 L60 40" />
        </svg>
      </div>
      {/* Lado derecho desktop */}
      <div className="nm:w-[50%] space-y-5 hidden h-screen nm:flex flex-col justify-center items-center edei-2">
        <p className="text-sm text-white">Descubre las ventajas de comprar con Crypto</p>
        <ReactPlayer url="https://www.youtube.com/watch?v=nDD0PsLSXBI&feature=youtu.be" width={600} height={300} controls="controls" autoPlay="true" />
      </div>
      {/* parte baja mobile */}
      <div id="medium" className="w-full h-screen nm:hidden flex flex-col justify-center items-center edei-2">
        <h1 className="font-orkney text-center flex nm:hidden nm:px-[5rem] mb-10 px-[3rem] w-full text-white text-2xl nm:text-6xl uppercase ">
          {' '}
          <span className="before:block before:absolute before:-inset-8 before:-skew-y-2 before:bg-gradient-to-r from-edei-100 to-edei-200 relative inline-block">
            <span className="relative text-black font-bold ">
              EDEI WALLET:
              {' '}
              <span className="font-bold text-black">3d3e3i.eth</span>
              {' '}
            </span>
          </span>
        </h1>
        <p className="text-white nm:hidden flex nm:text-base px-4 text-sm mt-10 font-orkney w-full nm:px-[5rem]">1. Enviar 375 USDT por cada Edeidad que quieras adquirir a la wallet superior. </p>
        <p className="text-white nm:hidden flex nm:text-base px-4 text-sm mt-5 font-orkney w-full nm:px-[5rem]">
          Tambien puedes usar la dirección completa:
          0xbCfd3ba49A503f051bC5fE06d79C1B8Af8f91A0c
        </p>
        <p className="text-white nm:hidden flex nm:text-base px-4 text-sm mt-5 font-orkney w-full nm:px-[5rem]">Por favor, solo enviar USDT y utilizar la red ERC20</p>
        <p className="text-white nm:hidden flex nm:text-base px-4 text-sm mt-10 font-orkney w-full nm:px-[5rem]">2. Enviar un email a 3D3E3I@gmail.com con la captura del pago.</p>
        <p className="text-white nm:hidden flex nm:text-base px-4 text-sm mt-10 font-orkney w-full nm:px-[5rem]">3. En un plazo de 24 horas recibiras nuestra respuesta y el acceso a la comunidad.</p>
        <div className="flex nm:hidden nm:mt-10 mt-16 w-full px-8 space-y-4 justify-center items-center flex-col nm:space-x-10" />
      </div>
    </div>
  </div>

);

export default crypto;
