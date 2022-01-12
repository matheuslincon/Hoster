import Image from 'next/image';
import headerImg from '../public/header.svg';
import { SearchIcon } from '@heroicons/react/solid';

function Header() {
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
          className="flex-grow bg-transparent pl-5 outline-none placeholder-gray-400 text-gray-600"
          type="text"
          placeholder='Start your search'
        />
        <SearchIcon className="hidden md:inline-flex h-8 text-white bg-[#BAA360] rounded-full p-1 cursor-pointer md:mx-2"/>
      </div>

      {/* Right - menu */}
      <div></div>
    </header>
  )
}

export default Header;
