/* eslint-disable no-unused-vars */
/** @jsxImportSource @emotion/react */
import "twin.macro";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../utils/admin";
import { useUserState } from "../../utils/userState";
import { GenericInput } from "../form/GenericInput";
import { IconLogoBlue, WordmarkLogo } from "../icons/Icons";

export const Register = () => {
  const navigate = useNavigate();
  const [, setUser] = useUserState();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleError = (errorMessage) => {
    setError(errorMessage);
    setTimeout(() => {
      setError(null);
    }, 3000);
  };

  /*
  REPLACE WITH REGISTRATION LOGIC
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
  */

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
            <div className="text-3xl font-bold">Create an account</div>
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
          <div className="relative top-4 mb-4">
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
          <div className="relative top-4 mb-8">
            <GenericInput
              required
              label="Confirm Password"
              name="confirm"
              type="password"
              onChange={(event) => setConfirm(event.target.value)}
              error={error}
              placeholder="••••••••"
            />
          </div>
          <div className="flex top-6 mt-1 mb-2 w-full">
            <button
              className="w-full h-10 bg-button-blue border-button-blue text-white mt-2 mb-2 text-sm font-semibold rounded"
              /* onClick={async () => await login(email, pass)} */
              disabled={loading}
            >
              Create an account
            </button>
          </div>
          <div className="relative text-input-label-gray text-sm">
            Already have an account?
            <a className="text-button-blue ml-1" href="/admin/login">
              Sign in here
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
