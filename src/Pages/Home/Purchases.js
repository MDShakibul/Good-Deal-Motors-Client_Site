import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const Purchases = () => {
  const [product, setProduct] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);


  
  let quantity = (parseInt(product.minimum));

const [count, setCount] = useState(100);

   console.log(count)
  const [disabled, setDisabled] = useState(false);

  const handleInc =()=>{setCount(count+1)};
  const handelDec =()=>{setCount(count-1);};

  useEffect(()=>{
      if(count >= 100)
      setDisabled(false);
      else
      setDisabled(true);
  },[count]);

  let totalPrice = parseInt(product.price) * count;

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = data => {
    let quantity = document.getElementById('quantity').value;
    let total_price = document.getElementById('total_price').value;
    
    console.log(data.name,quantity,total_price)};

  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:px-40 my-16">
      <div className="card lg:max-w-lg bg-base-100 lg:rounded-r">
        <figure className="px-10 pt-10">
          <img
            className="rounded-xl"
            style={{ height: "200px", width: "350px" }}
            src={product.img}
            alt=""
          />
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
          <div className="card-actions"></div>
        </div>
      </div>

      <div>
        <div className="card lg:max-w-lg bg-base-100 lg:rounded-l lg:pl-12">
        
        <div className="flex">
        <p className="pr-12">Quantity</p>
        <button onClick={handelDec} className='btn-error px-3 '> -</button>
            <input type='text' className="text-center" value={count} id='quantity'/>
            <button onClick={handleInc} className='btn-success px-3 '>+</button>
        </div>

       <div className="flex mt-6">
       <p className="pr-12">Total Price: </p>
       <input type='text' className="text-center" value={totalPrice} id='total_price'/>
       </div>
        

            <br />
          <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-100">
                <label className="label">
                  <p className="label-text">name</p>
                </label>
                <input
                  type="text"
                  placeholder="Type Here"
                  className="input input-bordered w-100"
                  {...register("name")}
                />
              </div>

              <div className="form-control w-100">
                <label className="label">
                  <p className="label-text">Email</p>
                </label>
                <input
                  type="text"
                  placeholder="Type Here"
                  className="input input-bordered w-100"
                  {...register("email")}
                />
              </div>

              <div className="form-control w-100">
                <label className="label">
                  <p className="label-text">Address</p>
                </label>
                <input
                  type="text"
                  placeholder="Type Here"
                  className="input input-bordered w-100"
                  {...register("address")}
                />
                </div>


                <div className="form-control w-100">
                <label className="label">
                  <p className="label-text">Contact Number</p>
                </label>
                <input
                  type="text"
                  placeholder="Type Here"
                  className="input input-bordered w-100"
                  {...register("contact_number")}
                />
                </div>
              <input
                className="btn w-full mx-auto text-white btn-success"
                type="submit"
                value="Done"
                disabled={disabled}
              />
            </form>
        </div>
      </div>
    </div>
  );
};

export default Purchases;
