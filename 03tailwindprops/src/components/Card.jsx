import React from "react";

function Card(props) {
  return (
    <div className="flex justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl my-5">
        <figure>
          <img src={props.shoe.path} alt="Shoes" className="h-80 w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{props.shoe.name || "Nike Shoes"}!</h2>
          <p className="text-base">{props.shoe.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
