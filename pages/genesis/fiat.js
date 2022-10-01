import React, { useEffect } from 'react';
import Image from 'next/image';
import images from '../../public/assets';
import ReactPlayer from 'react-player';
import YouTube from 'react-youtube';

import 'aos/dist/aos.css';
import Aos from 'aos';

const fiat = () => (
  <div className="w-screen h-screen">
    {/* Navbar */}
    <nav className="flexBetween bg-transparent w-full edei-2 font-kooka z-10 p-4 sm:p-2 flex-row ">
      <div className="nm:text-6xl text-3xl nm:ml-[10rem] ml-2 text-white cursor-pointer" onClick={() => window.open('/', '_self')}>EDEI</div>
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
        <div className="nm:flex flex-col items-center hidden">
          <p className="text-black text-sm px-[3rem] text-center">
            <span className="font-bold">*IMPORTANTE:</span>
            {' '}
            Si quieres acceder cómo HOLDER OG y pagar sin IVA puedes realizar una transferencia bancaria a nombre de ERNEST VINAS a:
          </p>
          <p className="text-black font-bold text-sm">N. Cuenta:ES5500810076360006567664 </p>
          <p className="text-black font-bold">BIC: BSABESBB </p>
          <p className="px-[3rem] text-sm text-center mb-10 text-black">375€, o multiplicar por la cantidad de Edeidades que desees obtener.</p>
        </div>
        <button className="font-orkney edei-2 rounded-2xl border-2  nm:flex hidden nm:px-[5rem] px-[3rem] py-[2rem] text-white text-xl nm:text-3xl uppercase " onClick={() => window.open('https://buy.stripe.com/fZe5n13TU9qTgMM5kw')}>
          Adquirir EDEIDAD
        </button>
        <div className="flex mt-[10rem] nm:hidden items-center text-edei-200 justify-center flex-col">
          <h1 className="font-orkney mb-2 font-bold text-black text-xl">COMO COMPRAR CON EUROS </h1>
          <ReactPlayer url="https://www.youtube.com/watch?v=KmolGppbniY" width={340} height={200} controls="controls" autoPlay="true" />
        </div>
        <p className="text-black hidden nm:flex nm:text-base px-4 text-sm mt-20 font-orkney w-full nm:px-[5rem]">1. Adquiere tu EDEIDAD desde el botón superior.</p>
        <p className="text-black font-bold hidden nm:flex nm:text-base px-4 text-sm mt-2 font-orkney w-full nm:px-[5rem]">
          Recuerda que puedes adquirir varias Edeidades modificando la cantidad.
        </p>
        <p className="text-black hidden nm:flex nm:text-base px-4 text-sm mt-5 font-orkney w-full nm:px-[5rem]">
          2. Envía un email a 3D3E3I@gmail.com con la captura del pago.

        </p>
        <p className="text-black hidden nm:flex nm:text-base px-4 text-sm mt-6 font-orkney w-full nm:px-[5rem]">3. En un plazo de 24 horas recibirás nuestra respuesta y el acceso a la comunidad.</p>

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
        <p className="text-sm text-white">Descubre las ventajas de comprar con Euros</p>
        <ReactPlayer url="https://www.youtube.com/watch?v=KmolGppbniY" width={600} height={300} controls="controls" autoPlay="true" />
      </div>
      {/* parte baja mobile */}
      <div id="medium" className="w-full h-screen nm:hidden flex flex-col justify-center items-center edei-2">
        <p className="text-white text-sm px-[3rem] text-center">
          <span className="font-bold">*IMPORTANTE:</span>
          {' '}
          Si quieres acceder cómo HOLDER OG y pagar sin IVA puedes realizar una transferencia bancaria a nombre de ERNEST VINAS a:
        </p>
        <p className="text-white font-bold text-sm">N. Cuenta:ES5500810076360006567664 </p>
        <p className="text-white font-bold">BIC: BSABESBB </p>
        <p className="px-[3rem] text-sm text-center mb-10 text-white">375€, o multiplicar por la cantidad de Edeidades que desees obtener.</p>
        <button className="font-orkney edei-1 text-center flex nm:hidden nm:px-[5rem] mb-10 px-[3rem] text-white text-xl border-2 py-[2rem] rounded-2xl  nm:text-6xl uppercase " onClick={() => window.open('https://buy.stripe.com/fZe5n13TU9qTgMM5kw')}>
          ADQUIRIR EDEIDAD
        </button>
        <p className="text-white nm:hidden flex nm:text-base px-4 text-sm mt-10 font-orkney w-full nm:px-[5rem]">1. Aquiere tu EDEIDAD desde el botón superior. </p>
        <p className="text-white nm:hidden flex nm:text-base px-4 text-sm mt-5 font-orkney w-full nm:px-[5rem]">
          Recuerda que puedes adquirir varias Edeidades modificando la cantidad.
        </p>
        <p className="text-white nm:hidden flex nm:text-base px-4 text-sm mt-5 font-orkney w-full nm:px-[5rem]">2. Enviar un email a 3D3E3I@gmail.com con la captura del pago</p>
        <p className="text-white nm:hidden flex nm:text-base px-4 text-sm mt-10 font-orkney w-full nm:px-[5rem]">3. En un plazo de 24 horas recibiras nuestra respuesta y el acceso a la comunidad.</p>

        <div className="flex nm:hidden nm:mt-10 mt-16 w-full px-8 space-y-4 justify-center items-center flex-col nm:space-x-10" />
      </div>
    </div>
  </div>

);

export default fiat;
