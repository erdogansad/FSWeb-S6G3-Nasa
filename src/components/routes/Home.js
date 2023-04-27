import React, {useState, useEffect} from 'react';
import "./Home.css";

const Home = ({data}) => {
  const [apodData, setApodData] = useState({});

  useEffect(() => {
    if(data !== undefined){
      data.date = data.date.split("-");
      data.date = `(${data.date[2]}.${data.date[1]}.${data.date})`
      setTimeout(() => {
        setApodData(data);
      }, 1500);
    }
  }, [data]);     

  if (!apodData.hdurl){
    return (
      <section className="container">
        <div className="apod-container">
          <div className="apod-content">
            <h2 className="loading-text">Yükleniyor...</h2>
          </div>
        </div>
      </section>
    );
  }

  return (
      <section className="container">
        <div className="apod-container">
          <img className="apod-background" src={apodData.hdurl} alt=""/>
          <div className="apod-content">
            <img className="apod-image" src={apodData.url} alt=""/>
            <div className="apod-text">
              <h2 className="apod-title">{apodData.title}</h2>
              <h3 className="apod-copyright">{apodData.copyright} <span className="apod-date">{apodData.date}</span></h3>
              <p className="apod-explanation">{apodData.explanation}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

export default Home;