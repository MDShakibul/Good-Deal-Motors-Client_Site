import React from "react";
import { Link } from "react-router-dom";

const product = ({ product }) => {
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={product.img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product.name}</h2>
        <p>
          <small> {product.description} </small>
        </p>
        <p>
          <small>Minimum Order: {product.minimum} </small>
        </p>
        <p>
          <small> Available: {product.available} </small>
        </p>
        <p>Price: {product.price} </p>
        <div className="card-actions">
          <Link to={`/purchase/${product._id}`} className="btn btn-outline btn-success">
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default product;
