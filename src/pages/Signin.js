import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import darkLogo from "../assets/darkLogo.png"
import { RotatingLines } from "react-loader-spinner";
// import { useDispatch } from "react-redux";
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
// import setUserInfo  from "../redux/amazonSlice";


const Signin = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  // Firebase Error
  const [userEmailErr, setUserEmailErr] = useState("");
  const [userPassErr, setUserPassErr] = useState("");
  // Loading State start here
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
    setUserEmailErr("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
    setUserPassErr("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email) {
      setErrEmail("Enter your email");
    }
    if (!password) {
      setErrPassword("Enter your password");
    }
    if (email && password) {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential?.user;
          // Signed in
          // console.log(user);  
          // dispatch(
          //   setUserInfo({
          //     _id: user?.uid,
          //     userName: user?.displayName,
          //     email: user?.email,
              
          //   })
          // );
          setLoading(false);
          setSuccessMsg("Login Successfull! Welcome you back!");
          console.log(successMsg);
          setLoading(false);
          navigate("/");
          setEmail("");
          setPassword("");
        })
        .catch((err)=>{
          setLoading(false);
           alert(err);
          
        });
          
    }
  };
  return (
    <div className="w-full">
      <div className="w-full bg-[#F5F5F5] pb-10">
        {successMsg ? (
          <div className="w-full flex justify-center items-center py-32">
            <p className="border-[1px] border-[#16A34A] text-[#22C55E] font-titleFont text-lg font-semibold px-6 py-2">
              {successMsg}
            </p>
          </div>
        ) : (
          <form className="w-[350px] mx-auto flex flex-col items-center">
            <Link to="/">
              <img className="w-32" src={darkLogo} alt="darkLogo" />
            </Link>
            <div className="w-full border bg-[#E4E4E7] p-6">
              <h2 className="font-titleFont text-3xl font-medium mb-4">
                Sign in
              </h2>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium">
                    Email or mobile phone number
                  </p>
                  <input
                    onChange={handleEmail}
                    value={email}
                    className="w-full lowercase py-1 border border-[#A1A1AA] px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                    type="email"
                  />
                  {errEmail && (
                    <p className="text-[#DC2626] text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                      <span className="italic font-titleFont font-extrabold text-base">
                        !
                      </span>
                      {errEmail}
                    </p>
                  )}
                  {userEmailErr && (
                    <p className="text-[#DC2626] text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                      <span className="italic font-titleFont font-extrabold text-base">
                        !
                      </span>
                      {userEmailErr}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium">Password</p>
                  <input
                    onChange={handlePassword}
                    value={password}
                    className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                    type="password"
                  />
                  {errPassword && (
                    <p className="text-[#DC2626] text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                      <span className="italic font-titleFont font-extrabold text-base">
                        !
                      </span>
                      {errPassword}
                    </p>
                  )}
                  {userPassErr && (
                    <p className="text-[#DC2626] text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                      <span className="italic font-titleFont font-extrabold text-base">
                        !
                      </span>
                      {userPassErr}
                    </p>
                  )}
                </div>
                <button
                  onClick={handleLogin}
                  className="w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput"
                >
                  Continue
                </button>
                {loading && (
                  <div className="flex justify-center">
                    <RotatingLines
                      strokeColor="#febd69"
                      strokeWidth="5"
                      animationDuration="0.75"
                      width="50"
                      visible={true}
                    />
                  </div>
                )}
              </div>
              <p className="text-xs text-black leading-4 mt-4">
                By Continuing, you agree to Amazon's{" "}
                <span className="text-[#2563EB]">Conditions of Use </span>and{" "}
                <span className="text-[#2563EB]">Privace Notice.</span>
              </p>
              <p className="text-xs text-gray-600 mt-4 cursor-pointer group">
                <ArrowRightIcon />{" "}
                <span className="text-[#2563EB] group-hover:text-orange-700 group-hover:underline underline-offset-1">
                  Need help?
                </span>
              </p>
            </div>
            <p className="w-full text-xs text-[#4B5563] mt-4 flex items-center">
              <span className="w-1/3 h-[1px] bg-[#A1A1AA] inline-flex"></span>
              <span className="w-1/3 text-center">New to Amazon?</span>
              <span className="w-1/3 h-[1px] bg-[#A1A1AA] inline-flex"></span>
            </p>
            <Link className="w-full" to="/registration">
              <button className="w-full py-1.5 mt-4 text-sm font-normal rounded-sm bg-gradient-to-t from-[#E2E8F0] to-[#F1F5F9] hover:bg-gradient-to-b border border-[#A1A1AA] active:border-[#854D0E] active:shadow-amazonInput">
                Create your Amazon account
              </button>
            </Link>
          </form>
        )}
      </div>
      <div className="w-full bg-gradient-to-t from-whiteText via-whiteText to-[#E4E4E7] flex flex-col gap-4 justify-center items-center py-10">
        <div className="flex items-center gap-6">
          <p className="text-xs text-[#2563EB] hover:text-[#EA580C] hover:underline underline-offset-1 cursor-pointer duration-100">
            Conditions of Use
          </p>
          <p className="text-xs text-[#2563EB] hover:text-[#EA580C] hover:underline underline-offset-1 cursor-pointer duration-100">
            Privacy Notice
          </p>
          <p className="text-xs text-[#2563EB] hover:text-[#EA580C] hover:underline underline-offset-1 cursor-pointer duration-100">
            Privacy Notice
          </p>
        </div>
        <p className="text-xs text-[#4B5563]">
          © 1996-2023, ReactBd.com, Inc. or its affiliates
        </p>
      </div>
    </div>
  );
};

export default Signin;
