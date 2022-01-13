import Image from 'next/image';
import headerImg from '../public/header.svg';
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid';
import { useState } from 'react';

function Header() {
  const [searchInput, setSearchInput] = useState('');

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left - Logo */}
      <div className="flex relative items-center my-auto h-14 cursor-pointer">
        <Image
          src={headerImg}
          layout='fill'
          alt='hoster'
          objectFit='contain'
          objectPosition='left'
        />
      </div>

      {/* Middle - Search */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={ (e) => setSearchInput(e.target.value) }
          className="flex-grow bg-transparent pl-5 outline-none placeholder-gray-400 text-gray-600"
          type="text"
          placeholder='Start your search'
        />
        <SearchIcon className="hidden md:inline-flex h-8 text-white bg-[#BAA360] rounded-full p-1 cursor-pointer md:mx-2"/>
      </div>

      {/* Right - menu */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a Host</p>
        <GlobeAltIcon className="h-6 cursor-pointer"/>
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6"/>
          <UserCircleIcon className="h-6"/>
        </div>
      </div>
    </header>
  )
}

export default Header;
