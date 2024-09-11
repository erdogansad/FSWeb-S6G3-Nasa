import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Datepicker from "tailwind-datepicker-react";

const Header = () => {
  const [value, setValue] = useState();
  const [range, setRange] = useState();
  const redirect = useNavigate();
  const [showSelectDate, setShowSelectDate] = useState(false);
  const [showSelectModal, setShowSelectModal] = useState(false);
  const [showSelectStartDate, setShowSelectStartDate] = useState(false);
  const [showSelectEndDate, setShowSelectEndDate] = useState(false);
  const [showSelectRangeModal, setShowSelectRangeModal] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  useEffect(() => {
    if (range?.start_date > range?.end_date) {
      setSubmitDisabled(true);
    } else {
      if (range?.start_date && range?.end_date) {
        setSubmitDisabled(false);
      }
    }
  }, [range]);

  function generateRandomDate(from, to) {
    let timeDiff = to.getTime() - from.getTime(),
      randomTime = Math.random() * timeDiff,
      randomDate = new Date(from.getTime() + randomTime);

    return randomDate;
  }

  const handleDate = () => {
    const val = value || new Date();
    const date = val.getFullYear() + "-" + (val.getMonth() + 1) + "-" + val.getDate();
    setShowSelectModal(false);
    return redirect("/date-single?date=" + date);
  };

  const handleDateRange = () => {
    const start = range.start_date || new Date();
    const end = range.end_date || new Date();
    const startDate = start.getFullYear() + "-" + start.getMonth() + "-" + start.getDate();
    const endDate = end.getFullYear() + "-" + end.getMonth() + "-" + end.getDate();
    setShowSelectRangeModal(false);
    return redirect("/date-range?start_date=" + startDate + "&end_date=" + endDate);
  };

  return (
    <header className="bg-stone-900 z-10 font-inter">
      <div className="container flex flex-col gap-y-4 lg:gap-y-0 lg:flex-row items-center justify-between py-8">
        <Link to="/" className="h-full flex flex-col gap-y-4 items-center lg:flex-row lg:gap-y-0 lg:gap-x-2 cursor-pointer">
          <img className="h-8 lg:h-12" src="https://mystatic-bay.vercel.app/img/nasa/logo.png" alt="logo" />
          <span className="text-stone-300 font-semibold">APOD</span>
        </Link>
        <nav className="relative flex flex-col items-center lg:flex-row gap-y-5 lg:gap-y-0 lg:gap-x-10 text-stone-300  font-semibold lg:text-xl">
          <Link to="/" className="hover:text-punch hover:underline hover:underline-offset-4 hover:decoration-punch hover:decoration-2">
            Today
          </Link>
          <button
            onClick={() => {
              setValue(generateRandomDate(new Date("1995-06-16"), new Date()));
              handleDate();
            }}
            className="hover:text-punch hover:underline hover:underline-offset-4 hover:decoration-punch hover:decoration-2"
          >
            Random Date
          </button>
          <div>
            <button
              onClick={() => {
                setShowSelectModal(!showSelectModal);
                setShowSelectRangeModal(false);
              }}
              className="hover:text-punch hover:underline hover:underline-offset-4 hover:decoration-punch hover:decoration-2 font-semibold"
            >
              Select Date
            </button>
            <div
              className={`${
                showSelectModal ? "block" : "hidden"
              } absolute bg-stone-900 p-4 rounded-b-xl w-60 flex flex-col gap-5 top-44 lg:top-16 start-1/2 -translate-x-1/2`}
            >
              <Datepicker
                options={{
                  minDate: new Date("1995-06-16"),
                  maxDate: new Date(),
                  todayBtn: true,
                  clearBtn: true,

                  theme: {
                    background: "bg-stone-800 dark:bg-stone-800",
                    todayBtn: "bg-punch/80 hover:bg-punch/50 dark:bg-punch/80 dark:hover:bg-punch/50",
                    clearBtn: "border-0 bg-stone-600 hover:bg-stone-600/50 dark:bg-stone-600 dark:hover:bg-stone-600/50",
                    icons: "bg-stone-600 hover:bg-stone-600/50 dark:bg-stone-600 dark:hover:bg-stone-600/50",
                    text: "dark:hover:bg-stone-500",
                    disabledText: "text-stone-400 dark:text-stone-400",
                    input: "bg-stone-800 border-0 dark:bg-stone-800",
                    inputIcon: "text-stone-500 dark:text-stone-500",
                    selected: "bg-punch/80 dark:bg-punch/80 hover:bg-punch/50 dark:hover:bg-punch/50",
                  },
                  datepickerClassNames: "top-16",
                  inputNameProp: "date",
                  inputIdProp: "date",
                  inputDateFormatProp: {
                    day: "numeric",
                    month: "numeric",
                    year: "numeric",
                  },
                }}
                onChange={setValue}
                show={showSelectDate}
                setShow={setShowSelectDate}
              />
              <button onClick={() => handleDate()} className="text-stone-50 py-2 bg-punch rounded-lg hover:bg-punch/50">
                Search
              </button>
            </div>
          </div>
          <div>
            <button
              onClick={() => {
                setShowSelectModal(false);
                setShowSelectRangeModal(!showSelectRangeModal);
              }}
              className="hover:text-punch hover:underline hover:underline-offset-4 hover:decoration-punch hover:decoration-2 font-semibold"
            >
              Select Date Range
            </button>
            <div
              className={`${
                showSelectRangeModal ? "block" : "hidden"
              } absolute bg-stone-900 p-4 rounded-b-xl w-60 lg:w-96 flex flex-col gap-5 top-44 lg:top-16 start-1/2 -translate-x-1/2`}
            >
              <div className="flex flex-col lg:flex-row gap-5">
                <Datepicker
                  options={{
                    minDate: new Date("1995-06-16"),
                    maxDate: new Date(range?.end_date || ""),
                    todayBtn: true,
                    clearBtn: true,
                    theme: {
                      background: "bg-stone-800 dark:bg-stone-800",
                      todayBtn: "bg-punch/80 hover:bg-punch/50 dark:bg-punch/80 dark:hover:bg-punch/50",
                      clearBtn: "border-0 bg-stone-600 hover:bg-stone-600/50 dark:bg-stone-600 dark:hover:bg-stone-600/50",
                      icons: "bg-stone-600 hover:bg-stone-600/50 dark:bg-stone-600 dark:hover:bg-stone-600/50",
                      text: "dark:hover:bg-stone-500",
                      disabledText: "text-stone-400 dark:text-stone-400",
                      input: "bg-stone-800 border-0 dark:bg-stone-800",
                      inputIcon: "text-stone-500 dark:text-stone-500",
                      selected: "bg-punch/80 dark:bg-punch/80 hover:bg-punch/50 dark:hover:bg-punch/50",
                    },
                    datepickerClassNames: "top-16",
                    inputNameProp: "start_date",
                    inputIdProp: "start_date",
                    inputDateFormatProp: {
                      day: "numeric",
                      month: "numeric",
                      year: "numeric",
                    },
                  }}
                  onChange={(e) => setRange({ ...range, start_date: e })}
                  show={showSelectStartDate}
                  setShow={setShowSelectStartDate}
                />
                <Datepicker
                  options={{
                    maxDate: new Date(),
                    todayBtn: true,
                    clearBtn: true,
                    theme: {
                      background: "bg-stone-800 dark:bg-stone-800",
                      todayBtn: "bg-punch/80 hover:bg-punch/50 dark:bg-punch/80 dark:hover:bg-punch/50",
                      clearBtn: "border-0 bg-stone-600 hover:bg-stone-600/50 dark:bg-stone-600 dark:hover:bg-stone-600/50",
                      icons: "bg-stone-600 hover:bg-stone-600/50 dark:bg-stone-600 dark:hover:bg-stone-600/50",
                      text: "dark:hover:bg-stone-500",
                      disabledText: "text-stone-400 dark:text-stone-400",
                      input: "bg-stone-800 border-0 dark:bg-stone-800",
                      inputIcon: "text-stone-500 dark:text-stone-500",
                      selected: "bg-punch/80 dark:bg-punch/80 hover:bg-punch/50 dark:hover:bg-punch/50",
                    },
                    datepickerClassNames: "top-16",
                    inputNameProp: "end_date",
                    inputIdProp: "end_date",
                    inputDateFormatProp: {
                      day: "numeric",
                      month: "numeric",
                      year: "numeric",
                    },
                  }}
                  value={range?.end_date > range?.start_date ? range?.end_date : ""}
                  onChange={(e) => setRange({ ...range, end_date: e })}
                  show={showSelectEndDate}
                  setShow={setShowSelectEndDate}
                />
              </div>
              <button
                onClick={() => handleDateRange()}
                disabled={submitDisabled}
                className="text-stone-50 py-2 bg-punch rounded-lg hover:bg-punch/50 disabled:bg-punch/20 disabled:cursor-not-allowed"
              >
                Search
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
