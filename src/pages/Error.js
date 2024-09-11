import React from "react";
import { useLocation } from "react-router-dom";

const NotFound = ({ error }) => {
  const location = useLocation();
  const [text, setText] = React.useState({
    title: "404",
    subtitle: "Not Found",
  });

  React.useEffect(() => {
    if (error) {
      setText({
        title: error.status,
        subtitle: error.message,
      });
    }

    if (location.state && location.state.error) {
      setText({
        title: location.state.error.status,
        subtitle: location.state.error.message,
      });
    }

    return () => {
      setText({
        title: "404",
        subtitle: "Not Found",
      });
    };
  }, [error, location]);

  return (
    <section className="bg-stone-900 h-full flex flex-col gap-4 justify-center items-center">
      <h1 className="font-inter font-bold text-4xl text-stone-300">{text.title}</h1>
      <h2 className="font-inter font-bold text-3xl text-stone-300">{text.subtitle}</h2>
    </section>
  );
};

export default NotFound;
