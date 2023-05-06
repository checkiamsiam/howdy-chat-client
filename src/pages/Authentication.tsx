import { useState } from "react";
import LoginForm from "../components/auth/LoginForm";
import SignUpFrom from "../components/auth/SignUpFrom";
import style from "../styles/auth.module.css";

const Authentication = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  return (
    <div className={`min-h-screen ${style.authContainer}`}>
      <div className="py-6 fixed w-full top-0  lg:bg-transparent flex justify-center lg:justify-start lg:px-12">
        <div className="cursor-pointer flex items-center">
          <div>
            <img src="/logo.png" className="w-10 text-indigo-500" alt="" />
          </div>
          <div className="text-2xl text-indigo-400 tracking-wide ml-2 font-semibold">Howdy</div>
        </div>
      </div>
      <div className="lg:flex">
        {!isSignUp && (
          <div className="lg:w-1/2 xl:max-w-screen-sm">
            <div className="mt-24  px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-32 xl:px-24 xl:max-w-2xl">
              <h2
                className="text-center text-4xl text-indigo-400 font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold"
              >
                Log in
              </h2>
              <div className="mt-12">
                <LoginForm />
                <div className="mt-12 text-sm font-display font-semibold text-white text-center">
                  Don't have an account ?{" "}
                  <a onClick={() => setIsSignUp(true)} className="cursor-pointer text-indigo-400 hover:text-indigo-800">
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="hidden lg:flex items-center justify-center flex-1 h-screen">
          <div className="max-w-xs transform duration-200 hover:scale-110 cursor-pointer">
            <img src="/logo.png" className=" mx-auto" alt="" />
          </div>
        </div>
        {isSignUp && (
          <div className="lg:w-1/2 xl:max-w-screen-sm">
            <div className="mt-24 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-20 xl:px-24 xl:max-w-2xl">
              <h2
                className="text-center text-4xl text-indigo-400 font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold"
              >
                Sign Up
              </h2>
              <div className="mt-12">
                <SignUpFrom />
                <div className="mt-12 text-sm font-display font-semibold text-white text-center">
                  Already Have an Account ?{" "}
                  <a onClick={() => setIsSignUp(false)} className="cursor-pointer text-indigo-400 hover:text-indigo-800">
                    Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Authentication;
