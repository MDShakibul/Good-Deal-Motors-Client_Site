import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./login.css";
import {
  useSignInWithGoogle,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "./Loading/Loading";
import useToken from "../../hooks/useToken";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
    const [token] = useToken(googleUser || user);
    useEffect(() => {
      if (token) {
          navigate('/');
      }
  }, [token, navigate])

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (googleLoading || loading) {
    return <Loading></Loading>
  }



 /*    let from = location.state?.from?.pathname || "/";


    if(!googleUser || user) {
        return null;
    } else {
        useEffect( () =>{
            if (googleUser || user) {
                navigate(from, { replace: true });
            }
        }, [user, googleUser, from, navigate])
    } */
    
    let from = location.state?.from?.pathname || "/";

    /* if(googleUser || user){
      navigate(from, { replace: true });
    } */

    


  let loginErrorMessage;
  if(googleUser || error){
    loginErrorMessage = <p className="text-red-700">{googleError?.message || error?.message}</p>; 
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
    
  };
  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:px-40 my-16">
      <div className="flex align-center shadow-xl ">
        <img
          src="https://i.ibb.co/r0mfr9F/login.png"
          className="lg:rounded-l-xl"
          alt=""
        />
      </div>
      <div>
        <div className="card bg-base-100 shadow-xl lg:rounded-l">
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-100">
                <label className="label">
                  <p className="label-text">Email</p>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-100"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <p className="label-text-alt text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                  {errors.email?.type === "pattern" && (
                    <p className="label-text-alt text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </label>
              </div>
              <div className="form-control w-100">
                <label className="label">
                  <p className="label-text">Password</p>
                </label>
                <input
                  type={passwordShown ? "text" : "password"}
                  placeholder="Password"
                  className="input input-bordered w-100 "
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                  })}
                />
                <div className="pr-3">
                  <p
                    toggle="#password-field"
                    className={
                      passwordShown
                        ? "fas fa-eye-slash field-icon"
                        : "fas fa-eye field-icon"
                    }
                    onClick={togglePassword}
                  ></p>
                </div>
                <label className="label">
                  {errors.password?.type === "required" && (
                    <p className="label-text-alt text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="label-text-alt text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </label>
              </div>

              <input
                className="btn w-full mx-auto text-white btn-success"
                type="submit"
                value="Login"
              />
            </form>
            <small>
              {loginErrorMessage}
              <Link className="text-violet-900" to="/registration">
                Create New Account
              </Link>
            </small>
            <div className="divider">OR</div>
            <button
              className="btn btn-outline"
              onClick={() => signInWithGoogle()}
            >
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
