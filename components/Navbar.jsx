import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import images from '../public/assets';

function Navbar() {
  const { theme, setTheme } = useTheme();
  const [active, setActive] = useState('Home');
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flexBetween w-full edei-2 font-kooka z-10 p-4 sm:p-2 flex-row ">
      <div className="nm:text-6xl text-3xl nm:ml-[10rem] ml-2 text-white ">EDEI</div>
      <div className="flex flex-row nm:space-x-[3rem] space-x-4 nm:mr-[10rem]">
        <p className="hidden nm:flex">Twitter</p>
        <p className="hidden nm:flex">Twitter</p>
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
  );
}

export default Navbar;
