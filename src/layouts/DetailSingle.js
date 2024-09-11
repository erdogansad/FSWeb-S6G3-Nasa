import React from "react";
import LoadingSpinner from "@components/LoadingSpinner";
import Error from "@pages/Error";

const DetailSingle = ({ isLoading, error, single }) => {
  if (isLoading) {
    return <LoadingSpinner screenH={false} />;
  }

  if (error.status !== "" || !single || Object.keys(single).length === 0) {
    return <Error error={error} />;
  }

  return (
    <section className="h-full font-rubik">
      <div className="relative h-full bg-stone-900">
        {single.media_type === "video" ? (
          <img
            className="absolute object-center object-cover h-full w-full blur-md brightness-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src={
              single.url.includes("vimeo")
                ? `https://vumbnail.com/${single.url.split("/").pop().split("?")[0]}_large.jpg`
                : `https://img.youtube.com/vi/${single.url.split("/").pop().split("?")[0]}/maxresdefault.jpg`
            }
            loading="lazy"
            alt=""
          />
        ) : (
          <img
            className="absolute object-center object-cover h-full w-full blur-md brightness-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src={single.hdurl}
            loading="lazy"
            alt=""
          />
        )}
        <div className="relative h-full container flex flex-col xl:flex-row items-center gap-y-10 xl:gap-y-0 xl:gap-x-12 py-8">
          <div className="h-full lg:basis-1/2">
            {single.media_type === "video" ? (
              <iframe
                className="h-full w-full rounded-xl"
                src={single.url}
                title={single.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <img className="h-full rounded-xl" src={single.url} alt={single.title} loading="lazy" />
            )}
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

export default DetailSingle;
