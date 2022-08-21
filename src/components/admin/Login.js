import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../utils/admin";
import { useUserState } from "../../utils/userState";

export const Login = () => {
  const API_URL = process.env.REACT_APP_API_URL;

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 960;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
     window.addEventListener("resize", handleResizeWindow);
     return () => {
       window.removeEventListener("resize", handleResizeWindow);
     };
   }, []);

  const navigate = useNavigate();
  const [, setUser] = useUserState();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleError = (errorMessage) => {
    setError(errorMessage);
    setTimeout(() => {
      setError(null);
    }, 3000);
  };

  const login = async (email, pass) => {
    logout(setUser);
    try {
      setLoading(true);
      if (!email || email.length === 0 || !pass || pass.length === 0) {
        throw new Error("email or pass not valid");
      }
      const res = await axios.post(`${API_URL}/auth/login`, {
        email,
        password: pass,
      });
      setUser({ token: res.data.token, firstName: res.data.firstName });
      setLoading(false);
      navigate("/admin/create/events", { replace: true });
    } catch (e) {
      handleError(e);
      console.log(e);
      setLoading(false);
    }
  };
  if (width > breakpoint) {
    return (
      <div className="h-screen w-screen flex" id='splitContainer'>
        <div className="relative w-1/2 h-screen m-0" id='form'>
          <div className="relative w-64 h-1/3 m-auto" />
          <div className="relative w-64 h-1/3 m-auto">
            <div className="relative mb-4">
                <div className="text-l font-bold text-[#697E90]">
                  Hoboken Events
                </div>
                <div className="text-4xl font-bold">
                  Log in
                </div>
            </div>
            <input
              type="email"
              name="email"
              onChange={(event) => setEmail(event.target.value)}
              className="border m-1 rounded w-full"
              placeholder="Email address"
            />
            <input
              type="password"
              name="password"
              onChange={(event) => setPass(event.target.value)}
              className="border m-1 rounded w-full"
              placeholder="Password"
            />
            <div className="w-full flex">
              <button
                className="w-full h-6 bg-[#3898EC] border-[#3898EC] text-white mt-2 mb-2 text-xs rounded"
                onClick={async () => await login(email, pass)}
                disabled={loading}
              >
                Log in
              </button>
            </div>
            <div>
              <button
                  className="w-full h-6 bg-[#3898EC] border-[#3898EC] text-white mt-0 mb-2 text-xs rounded"
                  onClick={() => logout(setUser)}>
                    Log out
                </button>
            </div>
          </div>
          <div className="relative w-64 h-1/3 m-auto" id='errors'>
            {error ? <div>{error}</div> : null}
          </div>
        </div>
        <div className="relative w-1/2 m-0 overflow-hidden" id='image'>
          <img className="absolute object-cover h-full" src='https://static01.nyt.com/images/2015/01/04/realestate/20150104-LIVING-slide-5SXM/20150104-LIVING-slide-5SXM-superJumbo.jpg' alt='login'/>
        </div>
      </div>
    );
  } else {
    return (
        <div className="relative w-full h-screen m-0" id='form'>
          <div className="relative w-64 h-1/3 m-auto" />
          <div className="relative w-64 h-1/3 m-auto">
            <div className="relative mb-4" id='headerText'>
                <div className="text-l font-bold text-[#697E90]">
                  Hoboken Events
                </div>
                <div className="text-4xl font-bold">
                  Log in
                </div>
            </div>
            <input
              type="email"
              name="email"
              onChange={(event) => setEmail(event.target.value)}
              className="border m-1 rounded w-full"
              placeholder="Email address"
            />
            <input
              type="password"
              name="password"
              onChange={(event) => setPass(event.target.value)}
              className="border m-1 rounded w-full"
              placeholder="Password"
            />
            <div className="w-full flex">
              <button
                className="w-full h-6 bg-[#3898EC] border-[#3898EC] text-white mt-2 mb-2 text-xs rounded"
                onClick={async () => await login(email, pass)}
                disabled={loading}
              >
                Log in
              </button>
            </div>
            <div>
              <button
                  className="w-full h-6 bg-[#3898EC] border-[#3898EC] text-white mt-0 mb-2 text-xs rounded"
                  onClick={() => logout(setUser)}>
                    Log out
                </button>
            </div>
          </div>
          <div className="relative w-64 h-1/3 m-auto" id='errors'>
            {error ? <div>{error}</div> : null}
          </div>
        </div>
    );
  }
};
