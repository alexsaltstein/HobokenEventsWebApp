/** @jsxImportSource @emotion/react */
import "twin.macro";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
        throw new Error("email or password not valid");
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
      setUser({ token: res.data.token, name: res.data.name });
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
        <div className="w-80 lg:w-96 h-2/4 m-auto ">
          <div className="mb-4">
            <div tw="flex items-start gap-x-2">
              <IconLogoBlue tw="h-10 w-10" />
              <WordmarkLogo tw="w-[200px] fill-button-blue" />
            </div>
            <div className="text-4xl font-bold">Welcome!</div>
          </div>
          <div tw="flex flex-col space-y-4">
            <GenericInput
              required
              label="Email Address"
              name="emailAddress"
              type="text"
              onChange={(event) => setEmail(event.target.value)}
              error={error}
            />
            <GenericInput
              required
              label="Password"
              name="password"
              type="password"
              onChange={(event) => setPass(event.target.value)}
              error={error}
            />
            <div className="w-full">
              <button
                className="w-full h-10 bg-button-blue border-button-blue text-white mt-2 mb-2 text-sm font-semibold rounded"
                onClick={async () => await login(email, pass)}
                disabled={loading}
              >
                Sign in
              </button>
            </div>
            <div className="text-red-400 italic" id="errors">
              {error ? `Error: ${error}` : null}
            </div>
            <div tw="italic">
              Already have an account? Please{" "}
              <Link to="/admin/register" tw="text-button-blue hover:underline">
                register here
              </Link>
              !
            </div>
          </div>
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
