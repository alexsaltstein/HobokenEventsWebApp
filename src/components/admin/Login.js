/** @jsxImportSource @emotion/react */
import "twin.macro";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../utils/admin";
import { useUserState } from "../../utils/userState";
import { GenericInput } from "../form/GenericInput";
import { IconLogoBlue, WordmarkLogo } from "../icons/Icons";

export const Login = () => {
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
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        {
          email,
          password: pass,
        }
      );
      if (!res.data) {
        return;
      }
      setUser({ token: res.data.token, firstName: res.data.firstName });
      setLoading(false);
      navigate("/admin/create/events", { replace: true });
    } catch (e) {
      handleError(e.message);
      console.log("error in login", e);
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen flex" id="splitContainer">
      <div className="w-full h-screen m-0 lg:w-1/2" id="form">
        <div className="w-80 lg:w-96 h-1/4 m-auto" />
        <div className="w-80 lg:w-96 h-2/4 m-auto">
          <div className="mb-4">
            <div tw="flex items-start gap-x-2">
              <IconLogoBlue tw="h-10 w-10" />
              <WordmarkLogo tw="w-[200px] fill-button-blue" />
            </div>
            <div className="text-3xl font-bold">Sign In</div>
          </div>
          <div className="relative">
            <GenericInput
              required
              label="Email Address"
              name="emailAddress"
              type="text"
              onChange={(event) => setEmail(event.target.value)}
              error={error}
              placeholder="name@company.com"
            />
          </div>
          <div className="relative top-4 mb-8">
            <GenericInput
              required
              label="Password"
              name="password"
              type="password"
              onChange={(event) => setPass(event.target.value)}
              error={error}
              placeholder="••••••••"
            />
          </div>
          {/* Replace hidden with flex when we have remeber me and forgot password infrastructure */}
          <div class="hidden items-center justify-between text-input-label-gray my-4">
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  class="w-4 h-4 borderborder-gray-300 rounded inline-block bg-gray-50 focus:ring-3 focus:ring-primary-300"
                  required=""
                />
              </div>
              <div class="ml-3 text-sm">
                <label for="remember">Remember me</label>
              </div>
            </div>
            <a href="/about" class="text-sm font-medium text-button-blue hover:underline">Forgot password?</a>
          </div>
          <div className="flex top-6 mt-1 mb-2 w-full">
            <button
              className="w-full h-10 bg-button-blue border-button-blue text-white mt-2 mb-2 text-sm font-semibold rounded"
              onClick={async () => await login(email, pass)}
              disabled={loading}
            >
              Sign in
            </button>
          </div>
          {/* Replace hidden with flex when we have remeber me and forgot password infrastructure */}
          <div className="hidden text-input-label-gray text-sm">
            Not registered?
            <a className="text-button-blue ml-1" href="/admin/register">
              Start contributing
            </a>
          </div>
        </div>
        <div className="w-96 h-1/4 m-auto" id="errors">
          {error ? error : null}
        </div>
      </div>
      <div className="relative w-0 m-0 overflow-hidden lg:w-1/2" id="image">
        <picture>
          <img
            className="absolute object-cover h-full"
            src="/login.jpg"
            alt="login"
          />
        </picture>
      </div>
    </div>
  );
};
