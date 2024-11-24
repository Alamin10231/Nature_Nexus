
import './Hero.css'
const Hero = () => {
  return (
    <div
      className=" heroimg relative bg-cover bg-center bg-no-repeat h-[500px] flex items-center container mx-auto my-20 rounded-2xl text-center"
     
    >
      
      
      <div className="absolute inset-0 bg-black bg-opacity-40 rounded-2xl"></div>

      {/* Content */}
      <div className="relative z-10 text-white px-8 md:px-16 lg:px-32  mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Embrace the Beauty of Nature
        </h1>
        <p className="mt-4 text-lg md:text-xl font-medium">
          Look deep into nature, and then you will understand everything
          better - Albert Einstein
        </p>
        <p className="mt-4 text-md md:text-lg">
          Join us in celebrating the wonders of the natural world and
          contributing to its preservation. Together, we can make a difference.
        </p>
        <button className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-500 text-white rounded-md shadow-lg">
          Explore More
        </button>
        {/* <img src="/cover.jpg" alt="" /> */}
      </div>
    </div>
  );
};

export default Hero;
