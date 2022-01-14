import Image from 'next/image';
import HeroImg from '../public/hero.jpg';

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src={HeroImg}
        alt='Hero Banner'
        layout="fill"
        objectFit="cover"
        className="brightness-50"
      />
      <div className="absolute top-1/2 w-full text-center space-y-8">
        <h1 className="text-white text-sm sm:text-lg lg:text-4xl font-bold">Not sure where to go ? Perfect.</h1>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-bold text-gray-900 rounded-lg group bg-gradient-to-br from-[#ba6069] to-[#BAA360] group-hover:from-[#ba6069] group-hover:to-[#BAA360] hover:text-white dark:text-black active:scale-90 transition duration-100">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-white rounded-md group-hover:bg-opacity-0">
            I am Flexible
          </span>
        </button>
      </div>
    </div>
  )
}

export default Banner;
