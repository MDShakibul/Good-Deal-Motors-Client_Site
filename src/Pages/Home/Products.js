import React, { useEffect, useState } from "react";
import Product from './Product';


const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('fakedb.json')
        .then(res => res.json())
        .then(data => setProducts(data));
}, [])

  return (
    <div className="my-12 px-12">
      <div className="text-center">
        <h2 className="text-4xl text-primary">Our Products</h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        { products.slice(0,6).map(product =><Product
            key={product._id}
            product={product}></Product>)}
      </div>
    </div>
  );
};

export default Products;
