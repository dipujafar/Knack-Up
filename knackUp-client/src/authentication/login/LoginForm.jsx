
import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineMail,
} from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../../hook/useAuth";

const LoginForm = () => {
    const [show, setShow] = useState(false);
    const [error, setError] = useState("");
    const {signIn} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => {
        const {email, password} = data || {};

        signIn(email, password)
        .then(() =>{
          toast.success("Successfully Login");
          navigate(location?.state ? location?.state : '/' )
        })
        .catch(err=>{
          setError(err.message)
        })
      };
    return (
        <div className="md:w-3/4 bg-black bg-transparent bg-opacity-40  mx-auto border  rounded shadow-lg shadow-gray-300 p-5 text-white">
        <h1 className="text-2xl font-medium mb-5 uppercase text-center">
         Login
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email image */}
          <div className="flex items-center mb-5 ">
            <label>
              <AiOutlineMail className="text-2xl"></AiOutlineMail>
            </label>
            <input
              type="email"
              name="email"
              {...register("email", { required: true })}
              id=""
              placeholder="Your Email"
              className="w-3/4 mx-auto py-1 px-2  bg-blue-900 rounded"
            />
          </div>
          {errors.email?.type === "required" && (
            <span className="text-red-600 ml-10">Email is required</span>
          )}
  
          {/* Password input */}
          <div className="flex items-center mb-5 relative">
            <label>
              <RiLockPasswordLine className="text-2xl"></RiLockPasswordLine>
            </label>
            <input
              type={show ? "text" : "password"}
              name="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
              })}
              id=""
              placeholder="Password"
              className="w-3/4 mx-auto py-1 px-2 bg-blue-900  rounded"
            />
            <span onClick={() => setShow(!show)} className="absolute right-10">
              {show ? (
                <AiOutlineEye className="text-2xl"></AiOutlineEye>
              ) : (
                <AiOutlineEyeInvisible className="text-2xl"></AiOutlineEyeInvisible>
              )}
            </span>
          </div>
          {errors.password?.type === "required" && (
            <span className="text-red-600 ml-10">Password is required</span>
          )}
          {errors.password?.type === "minLength" && (
            <span className="text-red-600 ml-10">
              Password must be 6 character.
            </span>
          )}
          {errors.password?.type === "maxLength" && (
            <span className="text-red-600 ml-10">
              Password must less then 20 character.
            </span>
          )}
  
          <button className="w-full btn bg-blue-100 btn-sm">
            <input type="submit" value="Login" className="w-full" />
          </button>
          <p className="mt-2">
            Do not have Account?{" "}
            <Link to="/signup">
              <span className="text-sky-300">Sign Up</span>
            </Link>
          </p>
          <p className="text-xl text-red-700">{error}</p>
        </form>
      </div>
    );
};

export default LoginForm;