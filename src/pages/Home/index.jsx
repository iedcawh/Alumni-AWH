import React from 'react';
import homeBg from '../../assets/home-bg.png';

function Home() {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${homeBg})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-4 px-4 text-center">
        <h1 className="font-bold uppercase tracking-wider text-white text-4xl md:text-5xl lg:text-6xl">
          Meeting the moment,
        </h1>

        <div className="h-px w-48 bg-white"></div>

        <h1 className="font-bold uppercase tracking-wider text-white text-4xl md:text-5xl lg:text-6xl">
          Together
        </h1>
      </div>
    </div>
  );
}

export default Home;
