import React from "react";
import { useForm } from "react-hook-form";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "@/utils/axios.js";
import useAuth from "@/hooks/useAuth.js";

export default function Login() {
  const navigate = useNavigate();
  const setIsLogin = useAuth((state) => state.setIsLogin);
  const isLogin = useAuth((state) => state.isLogin);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  async function onSubmit(data) {
    try {
      const res = await axios.post("/api/auth/login", data);
      setIsLogin(true)
      navigate("/movies");
    } catch (error) {
      setError("email", {
        message: error.response.data.message,
      });
    }
  }

  if(isLogin){
    return <Navigate to="/movies"/>
  }

  return (
    <div className="grid place-content-center h-screen">
      <div className="w-80">
        <h1 className="text-white font-semibold text-5xl text-center mb-7">
          Sign In
        </h1>
        <form
          className="space-y-6 flex flex-col"
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data"
        >
          <div>
            <Input
              type="text"
              placeholder="Email"
              className="w-full"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-400 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              className="w-full"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <span className="text-red-400 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="flex justify-center">
            <label className="inline-flex items-center text-gray-400 space-x-3">
              <Input
                type="checkbox"
                className="checked:bg-primary focus:checked:bg-primary active:bg-primary focus:active:bg-primary focus:outline-none focus:ring-offset-0 cursor-pointer"
                {...register("rememberMe")}
              />
              <span>Remember Me</span>
            </label>
          </div>
          <Button type="submit" className="w-full block">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
