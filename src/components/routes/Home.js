import React from 'react';
import "./Home.css";

const Home = props => {
  const {data} = props;
  console.log(data[0])
  return (
      <section className="container">
        <div className="apod-container">
          <img className="apod-background" src={data[0].hdurl} alt=""/>
          <div className="apod-content">
            <img className="apod-image" src={data[0].url} alt=""/>
            <div className="apod-text">
              <h2 className="apod-title">{data[0].title}</h2>
              <h3 className="apod-copyright">{data[0].copyright} <span className="apod-date">({data[0].date})</span></h3>
              <p className="apod-explanation">{data[0].explanation}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

export default Home;