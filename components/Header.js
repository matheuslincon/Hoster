import Image from 'next/image';
import headerImg from '../public/header.svg';
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';


function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guestNumber, setGuestNumber] = useState(1);
  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection'
  };

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        guestNumber,
      }
    })
  };

  const resetInput = () => {
    setSearchInput('');
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left - Logo */}
      <div onClick={() => router.push('/')} className="flex relative items-center my-auto h-14 cursor-pointer">
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
          placeholder={placeholder || 'Start your search'}
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

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#BAA360"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
            <UsersIcon className="h-5"/>
            <input
              type="number"
              value={guestNumber}
              min={1}
              onChange={(e) => setGuestNumber(e.target.value)}
              className="w-12 pl-2 text-lg outline-none text-[#BAA360]"
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">Cancel</button>
            <button onClick={search} className="flex-grow text-[#BAA360]">Search</button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header;
