import React from "react";
import clsx from "clsx";

const LoadingSpinner = ({ screenH = true }) => {
  return (
    <section className={clsx("bg-stone-900 flex justify-center items-center", screenH ? "h-screen" : "h-full")}>
      <div
        className="inline-block h-32 w-32 animate-spin rounded-full border-8 border-solid border-slate-50 border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-slate-50"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
      </div>
    </section>
  );
};

export default LoadingSpinner;
