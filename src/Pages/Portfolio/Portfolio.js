import React from "react";

const Portfolio = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Name: Shakibul Islam</h2>
          <p>
            <small> Email: </small>
          </p>
          <p>
            <small>Education: 4 Year B.Sc in C.S.E </small>
          </p>
          <p>
            <small>
              {" "}
              Technology: HTML,CSS,Bootstrap,Tailwind
              CSS,javascript,React JS,ES6,Node js,Express
              js,jwt,googleFirebase,MongoDB, Laravel{" "}
            </small>
          </p>
          <p>
            Project1: <a href="https://boi-ghor-cc8e7.web.app/">Boi Ghor</a>{" "}
          </p>
          <p>
            Project2: <a href="https://home-tutor-f9e23.web.app/">Home Tutor</a>{" "}
          </p>
          <p>
            Project3: <a href="https://mdshakibul.github.io/WeatherAppNodeJS/home.html">Weather App</a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
