import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './login.css';

const Login = () => {

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
      };

    const { register, formState: { errors }, handleSubmit } = useForm();


    const onSubmit = data => {
        console.log(data.email, data.password);
    }
    return (
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 lg:px-40 my-16'>
        <div className='flex align-center shadow-xl '>
        <img src="https://i.ibb.co/r0mfr9F/login.png" className='lg:rounded-l-xl' alt=""/>
        </div>
        <div>
            <div className="card bg-base-100 shadow-xl lg:rounded-l">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-100">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-100"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-100">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                            type={passwordShown ? "text" : "password"}
                                placeholder="Password"
                                className="input input-bordered w-100 "
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <div className="pr-3">
                                        <span toggle="#password-field"   className={passwordShown ? "fas fa-eye-slash field-icon" : "fas fa-eye field-icon"}  onClick={togglePassword}></span>
                                    </div>
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

                        <input className='btn w-full mx-auto text-white btn-success' type="submit" value="Login" />
                    </form>
                    <small> <Link className='text-violet-900' to="/signup">Create New Account</Link></small>
                    <div className="divider">OR</div>
                    <button
                        className="btn btn-outline"
                    >Continue with Google</button>
                </div>
            </div>
        </div >
        </div>
    );
};

export default Login;