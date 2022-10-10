import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../utils/admin";
import { useUserState } from "../../utils/userState";
import { GenericInput } from "../form/GenericInput";

export const Login = () => {
  const API_URL = process.env.REACT_APP_API_URL;

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
      console.log("here");
      console.log("login", res);
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
            <div className="text-lg font-bold text-hoboken-blue">
              Hoboken Events
            </div>
            <div className="text-4xl font-bold">Log in</div>
          </div>
          <div className="relative">
            <GenericInput
              required
              label="Email Address"
              name="emailAddress"
              type="text"
              onChange={(event) => setEmail(event.target.value)}
              error={error}
            />
          </div>
          <div className="relative top-4">
            <GenericInput
              required
              label="Password"
              name="password"
              type="password"
              onChange={(event) => setPass(event.target.value)}
              error={error}
            />
          </div>
          <div className="relative top-6 m-1 w-full">
            <button
              className="w-full h-10 bg-button-blue border-button-blue text-white mt-2 mb-2 text-sm font-semibold rounded"
              onClick={async () => await login(email, pass)}
              disabled={loading}
            >
              Log in
            </button>
          </div>
          <div className="relative top-6 m-1 w-full">
            <button
              className="w-full h-10 bg-button-blue border-button-blue text-white mt-0 mb-2 text-sm font-semibold rounded"
              onClick={() => logout(setUser)}
            >
              Log out
            </button>
          </div>
        </div>
        <div className="w-96 h-1/4 m-auto" id="errors">
          {error ? error : null}
        </div>
      </div>
      <div className="relative w-0 m-0 overflow-hidden lg:w-1/2" id="image">
        <img
          className="absolute object-cover h-full"
          src="/login.jpg"
          alt="login"
        />
      </div>
    </div>
  );
};
