import React, { useState, useEffect } from "react";

const Home = ({ data }) => {
  const [apodData, setApodData] = useState({});

  useEffect(() => {
    if (data !== undefined && data.date.includes("-")) {
      data.date = data.date.split("-");
      data.date = `(${data.date[2]}.${data.date[1]}.${data.date[0]})`;
      setTimeout(() => {
        setApodData(data);
      }, 1500);
    }
  }, [data]);

  if (!apodData.hdurl) {
    return (
      <section className="bg-stone-900 h-[88vh] flex justify-center items-center">
        <h2 className="font-rubik font-bold text-5xl text-stone-300">Yükleniyor...</h2>
      </section>
    );
  }

  return (
    <section className="font-rubik">
      <div className="relative bg-stone-900 h-full overflow-hidden">
        <img
          className="absolute h-auto w-full blur-md brightness-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src={apodData.hdurl}
          alt=""
        />
        <div className="relative container z-10 flex flex-col xl:flex-row items-center gap-y-10 xl:gap-y-0 xl:gap-x-40 py-8">
          <img className="h-96 md:h-[55vh] lg:h-[81.5vh] w-auto rounded-xl" src={apodData.url} alt="" />
          <div className="bg-stone-900/90 p-10 rounded-xl">
            <h2 className="font-bold text-xl md:text-2xl lg:text-4xl text-stone-300">{apodData.title}</h2>
            <h3 className="font-semibold text-lg md:text-xl lg:text-2xl pt-2 pb-4 text-stone-400">
              {apodData.copyright} <span className="italic">{apodData.date}</span>
            </h3>
            <p className="py-3 text-stone-300 text-justify leading-6 lg:leading-7 text-sm md:text-base lg:text-lg">{apodData.explanation}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
