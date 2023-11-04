import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { fetchApod } from "../../redux/slices/apodSlice";

const SelectDateRange = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const redirect = useNavigate();
  const { list, isLoading, error } = useSelector((state) => state.apod);

  useEffect(() => {
    if (searchParams.has("start_date") && searchParams.has("end_date")) {
      dispatch(fetchApod({ start_date: searchParams.get("start_date"), end_date: searchParams.get("end_date") }));
    }
  }, [searchParams, dispatch]);

  const handleSingle = (date) => {
    return redirect("/tarih-sec?date=" + date);
  };

  if (isLoading) {
    return (
      <section className="bg-stone-900 h-full flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-gray-50"></div>
      </section>
    );
  }

  if (error || list.length === 0) {
    return (
      <section className="bg-stone-900 h-full flex justify-center items-center">
        <h2 className="text-stone-300 font-semibold text-2xl">{error}</h2>
      </section>
    );
  }

  return (
    <section className="h-full font-rubik">
      <div className="min-h-full bg-stone-900 p-5">
        <div className="container h-fit flex justify-center gap-5 flex-wrap">
          {list.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleSingle(item.date)}
              className="flex basis-1/6 flex-col gap-3 bg-stone-700 p-3 rounded-xl cursor-pointer hover:bg-stone-800"
            >
              <div className="rounded-lg overflow-hidden">
                <img className="object-cover aspect-square" src={item.url || item.hdurl} alt={item.title} loading="lazy" />
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
