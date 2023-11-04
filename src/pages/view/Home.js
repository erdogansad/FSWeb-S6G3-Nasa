import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchApod } from "../../redux/slices/apodSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { single, isLoading, error } = useSelector((state) => state.apod);

  useEffect(() => {
    dispatch(fetchApod());
  }, [dispatch]);

  if (isLoading) {
    return (
      <section className="bg-stone-900 h-full flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-gray-50"></div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-stone-900 h-full flex justify-center items-center">
        <h2 className="text-stone-300 font-semibold text-2xl">{error}</h2>
      </section>
    );
  }

  return (
    <section className="h-full font-rubik">
      <div className="relative h-full bg-stone-900">
        <img
          className="absolute object-center object-cover h-full w-full blur-md brightness-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src={single.hdurl}
          loading="lazy"
          alt=""
        />
        <div className="relative h-full container flex flex-col xl:flex-row items-center gap-y-10 xl:gap-y-0 xl:gap-x-12 py-8">
          <div className="lg:basis-1/2">
            <img className="w-full h-full rounded-xl" src={single.url} alt={single.title} loading="lazy" />
          </div>
          <div className="lg:basis-1/2 bg-stone-900/90 p-10 rounded-xl">
            <h2 className="font-bold text-xl md:text-2xl lg:text-4xl text-stone-300">{single.title}</h2>
            <h3 className="font-semibold text-lg md:text-xl lg:text-2xl pt-2 pb-4 text-stone-400">
              {single.copyright} <span className="italic">{single.date}</span>
            </h3>
            <p className="py-3 text-stone-300 text-justify leading-6 lg:leading-7 text-sm md:text-base lg:text-lg">{single.explanation}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
