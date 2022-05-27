import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://polar-mountain-70911.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="my-12 lg:px-12">
      <div className="text-center">
        <h2 className="text-4xl text-primary font-bold uppercase">
          Our Products
        </h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.slice(0, 6).map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <Link to="/more_products" className="btn btn-info">
          More Products
        </Link>
      </div>
    </div>
  );
};

export default Products;
