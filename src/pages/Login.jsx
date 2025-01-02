import React from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate()

  function handleLogin(){
    navigate("/movies")
  }

  return (
    <div className="grid place-content-center h-screen">
      <div className="w-80">
        <h1 className="text-white font-semibold text-5xl text-center mb-7">
          Sign In
        </h1>
        <div className="space-y-6 flex flex-col">
          <Input type="text" placeholder="Email" className="w-full" />
          <Input type="password" placeholder="Password" className="w-full" />
          <div className="flex justify-center">
            <label className="inline-flex items-center text-gray-400 space-x-3">
              <Input
                type="checkbox"
                className="checked:bg-primary focus:checked:bg-primary active:bg-primary focus:active:bg-primary focus:outline-none focus:ring-offset-0 cursor-pointer"
              />
              <span>Remember Me</span>
            </label>
          </div>
          <Button className="w-full block" onClick={handleLogin}>Login</Button>
        </div>
      </div>
    </div>
  );
}
