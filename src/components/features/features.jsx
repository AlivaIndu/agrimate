import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="text-gray-600 body-font bg-[url(assets\\images\\.jpg)] bg-cover bg-center">
      <div className="container px-20 pt-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Smart Farming Solutions for the Future
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Empowering farmers with intelligent tools, real-time data, and AI-driven insights to boost productivity and sustainability.
          </p>
        </div>
        <div className="flex flex-wrap">
          {[
            {
              title: 'AI Disease Detection',
              description: 'Upload crop images and detect diseases instantly using our AI-powered diagnostic system.'
            },
            {
              title: 'Smart Voice Assistant',
              description: 'Get real-time farming advice and guidance using simple voice commands—hands-free help, anytime.'
            },
            {
              title: 'Yield Prediction',
              description: 'Predict your crop yield with high accuracy based on soil, season, and cultivation methods.'
            },
            {
              title: 'Weather Alerts',
              description: 'Stay updated with timely weather alerts to plan irrigation, sowing, and harvesting better.'
            }
          ].map(({ title, description }, idx) => (
            <div
              key={idx}
              className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 
             hover:border-indigo-500 hover:shadow-lg transition duration-300 ease-in-out rounded-lg"
            >
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">{title}</h2>
              <p className="leading-relaxed text-base mb-4">
                {description}
              </p>
              <a className="text-indigo-500 inline-flex items-center cursor-pointer">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
        <div className="container px-5 py-20 mx-auto mt-10">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              More Features Tailored for Farmers
            </h1>
            <p className="text-xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
              Manage tasks with our <span className="text-indigo-700 text-[25px]">Digital Calendar </span> and get personalized <span className="text-indigo-700 text-[25px]">Farming Tips</span>, helping you grow smarter every day.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>
          <button className="flex mx-auto mt-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Getting started with us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
