import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { fetchApod } from "@redux/slices/apodSlice";
import Error from "./Error";
import LoadingSpinner from "@components/LoadingSpinner";

const SelectDateRange = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const redirect = useNavigate();
  const { list, isLoading, error } = useSelector((state) => state.apod);

  useEffect(() => {
    let timeDiff = Math.abs(new Date(searchParams.get("end_date")) - new Date(searchParams.get("start_date")));
    if (timeDiff > 86400000 * 31) {
    } else {
      if (searchParams.has("start_date") && searchParams.has("end_date")) {
        dispatch(fetchApod({ start_date: searchParams.get("start_date"), end_date: searchParams.get("end_date") }));
      }
    }
  }, [searchParams, dispatch, redirect]);

  const handleSingle = (date) => {
    return redirect("/tarih-sec?date=" + date);
  };

  if (Math.abs(new Date(searchParams.get("end_date")) - new Date(searchParams.get("start_date"))) > 86400000 * 31) {
    return <Error error={{ status: 400, message: "Date range must be less than 31 days." }} />;
  }

  if (isLoading) {
    return <LoadingSpinner screenH={false} />;
  }

  if (error.status !== "" || list.length === 0) {
    return <Error error={error} />;
  }

  return (
    <section className="h-full font-rubik">
      <div className="min-h-full bg-stone-900 p-5">
        <div className="container h-fit flex flex-col md:flex-row justify-center gap-5 flex-wrap">
          {list.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleSingle(item.date)}
              className="flex basis-full md:basis-1/4 lg:basis-1/6 flex-col gap-3 bg-stone-700 p-3 rounded-xl cursor-pointer hover:bg-stone-800"
            >
              <div className="rounded-lg overflow-hidden">
                {item.media_type === "video" ? (
                  <img
                    className="object-cover aspect-square"
                    src={
                      item.url.includes("vimeo")
                        ? `https://vumbnail.com/${item.url.split("/").pop().split("?")[0]}_large.jpg`
                        : `https://img.youtube.com/vi/${item.url.split("/").pop().split("?")[0]}/maxresdefault.jpg`
                    }
                    alt={item.title}
                    loading="lazy"
                  />
                ) : (
                  <img className="object-cover aspect-square" src={item.url || item.hdurl} alt={item.title} loading="lazy" />
                )}
              </div>
              <div className="flex flex-col gap-2 text-center">
                <span className="text-stone-50 text-lg">{item.title}</span>
                <span className="text-stone-400 italic">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectDateRange;
