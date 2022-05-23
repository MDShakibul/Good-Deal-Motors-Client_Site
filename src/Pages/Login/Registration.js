import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import Loading from './Loading/Loading';
const Registration = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();






  const [signInWithGoogle, googleUser, googleLoading, googleError] =
  useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();


    if (loading || googleLoading || updating) {
        return <Loading></Loading>
    }
    let signUpErrorMessage;
    if (error || googleError || updateError) {
        signUpErrorMessage = <p className="text-red-700">{googleError?.message || error?.message}</p>; 
    }

    if(googleUser || user){
        navigate('/');
      }
   

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
    }


  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:px-40 my-16">
      <div className="flex align-center shadow-xl ">
        <img
          src="https://i.ibb.co/PTXJv4w/registration.jpg"
          className="lg:rounded-l-xl"
          alt=""
        />
      </div>
      <div>
        <div className="card bg-base-100 shadow-xl lg:rounded-l">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-center text-2xl font-bold">Sign Up</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-100">
                  <label className="label">
                    <p className="label-text">Name</p>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-100"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is Required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.name?.type === "required" && (
                      <p className="label-text-alt text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </label>
                </div>

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
                    className="input input-bordered w-100"
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
                {signUpErrorMessage}
                <input
                  className="btn w-full mx-auto text-white btn-success"
                  type="submit"
                  value="Sign Up"
                />
              </form>
              <p>
                <small>
                  Already have an account?{" "}
                  <Link className="text-violet-900" to="/login">
                    Please login
                  </Link>
                </small>
              </p>
              <div className="divider">OR</div>
              <button className="btn btn-outline" onClick={() => signInWithGoogle()}>Login with Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
