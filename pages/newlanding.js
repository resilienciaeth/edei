import React from 'react';
import Image from 'next/image';
import images from '../public/assets';

const newlanding = () => (
  <div className="h-screen bg-edei-10">
    <div className="flex items-center justify-start flex-col h-full">
      {/* title */}
      <div className="nm:mt-6">
        <h1 className="font-kooka text-[6rem] nm:text-[15rem] text-2 nm:leading-[15rem] text-white">EDEI</h1>
      </div>
      {/* banner */}
      <div className="px-6 nm:px-[10rem]">
        <div className="bg-edei-11 rounded-3xl nm:rounded-[3rem] border-4 nm:border-8 px-4 nm:px-10 ">
          <h1 className="uppercase text-center nm:text-xl mt-4 font-bold">EDEI is a purposed nft culture of disruptors, entrepreneurs and investors around 3333 edeities ip.</h1>
          <p className="mt-4 nm:mt-10 text-base text-center mb-4 nm:text-2xl nm:px-12">An Edeity is a drawn character representing one of the 333 most important things in life to live free from mainstream thinking, money and time.</p>
        </div>
      </div>
      {/* buttons */}
      <div className="flex flex-col items-center justify-center">
        <div className="mt-10 space-x-4 nm:space-x-10">
          <button className="bg-white text-black py-3 px-3 nm:px-10 nm:py-4 rounded-3xl border nm:text-xl font-bold hover:text-white hover:border hover:bg-edei-10 hover:border-white">¿QUÉ ES EDEI?</button>
          <button
            className="bg-white text-black py-3 px-3 nm:px-10 nm:py-4 rounded-3xl border nm:text-xl font-bold hover:text-white hover:border hover:bg-edei-10 hover:border-white"
            onClick={() => window.open('https://www.youtube.com/watch?v=wNU_CU0nXpM')}
          >
            WHAT IS EDEI?
          </button>
        </div>
        <p className="text-center text-[0.5rem] text-[12px] mt-2 text-white px-10">UTILITY WILL BE ANNOUNCED WHEN THE OFFICIAL WEBSITE EXPERIENCE IS LAUNCHED.</p>
      </div>
      {/* WEBUILDING */}
      <div>
        <h1 className="text-center text-white mt-10 text-4xl nm:text-4xl font-bold">EXPECT THE UNEXPECTED #WEBUILDING2023</h1>
        <p className="text-edei-11 font-bold text-center text-sm nm:text-sm px-5">ALREADY PRESOLDOUT 5% OUT OF THE 3333 UNIQUE EDEITIES MADE IN FOUNDER COMMUNITY GENESIS PRESALE</p>
      </div>
      {/* Icons */}
      <div className="mt-10 space-x-2 nm:space-x-6 flex flex-row">
        <div>
          <Image src={images.twitter1} width={30} height={30} />
        </div>
        <div>
          <Image src={images.discord} width={30} height={30} />
        </div>
        <div>
          <Image src={images.facebook} width={30} height={30} />
        </div>
        <div>
          <Image src={images.instagram1} width={30} height={30} />
        </div>
        <div>
          <Image src={images.tiktok} width={30} height={30} />
        </div>
        <div>
          <Image src={images.youtube} width={30} height={30} />
        </div>
      </div>
    </div>
  </div>
);

export default newlanding;
