import Image from 'next/image';
import headerImg from '../public/header.svg';

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left */}
      <div className="flex relative items-center my-auto h-14 cursor-pointer">
        <Image
          src={headerImg}
          layout='fill'
          alt='hoster'
          objectFit='contain'
          objectPosition='left'
        />
      </div>

      {/* Middle */}
      <div></div>

      {/* Right */}
      <div></div>
    </header>
  )
}

export default Header;
