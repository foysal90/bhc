import React from "react";
import "./Card.css"; // Make sure styles are correctly defined
import img from "../../assets/hc1.jpg"; // Ensure the image path is correct
const Card = () => {
  return (
    <div>
      <figure>
        <section className="banner text-white ">
          <figcaption className="exercise">
            <h1 className="getbody text-white">
              Get body in <br />
              <span className="shape">shape</span> & stay <br />
              healthy
            </h1>

            <p>
              To keep yourself healthy & fit, at least <br />
              exercise 40 mins to an hour every day
            </p>
            <button className="join">Join Club Now!</button>
            <button className="app">Download App</button>
          </figcaption>

          <section className="details">
           

            <img
              className="image my-5 w-lg p-5 rounded-2xl"
              
              
              src={img} // Ensure image exists
              alt="Workout example"
            />

            
          </section>
        </section>
      </figure>
    </div>
  );
};

export default Card;
