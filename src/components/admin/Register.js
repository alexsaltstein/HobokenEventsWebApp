/** @jsxImportSource @emotion/react */
import "twin.macro";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { logout } from "../../utils/admin";
import { useUserState } from "../../utils/userState";
import { GenericInput } from "../form/GenericInput";
import { IconLogoBlue, WordmarkLogo } from "../icons/Icons";

export const Register = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [, setUser] = useUserState();
  const initialRefToken = searchParams.get("refToken");

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmedPassMatch, setConfirmedPassMatch] = useState(false);
  const [registrationToken, setRegistrationToken] = useState(initialRefToken);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleError = (errorMessage) => {
    setError(errorMessage);
    setTimeout(() => {
      setError(null);
    }, 3000);
  };

  const register = async (email, pass) => {
    logout(setUser);
    try {
      setLoading(true);
      if (!email || email.length === 0) {
        throw new Error("email is required");
      }
      if (!pass || pass.length === 0) {
        throw new Error("password is required");
      }
      if (!confirmedPassMatch) {
        throw new Error("confirm password and password must match");
      }
      if (!registrationToken || registrationToken) {
        throw new Error("registration token is required");
      }
      // TODO: change to register route
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/register`,
        {
          email,
          password: pass,
          refToken: registrationToken,
        }
      );
      if (!res.data) {
        return;
      }
      setUser({ token: res.data.token, firstName: res.data.firstName });
      setLoading(false);
      //TODO: change to route to place that they registered
      navigate("/admin/create/events", { replace: true });
    } catch (e) {
      handleError(e.message);
      console.log("error in register", e);
      setLoading(false);
    }
  };

  return (
    <div
      className="h-screen w-screen overflow-x-hidden flex"
      id="splitContainer"
    >
      <div className="w-full h-screen m-0 lg:w-1/2" id="form">
        <div className="w-80 lg:w-96 h-1/4 m-auto" />
        <div className="w-80 lg:w-96 h-2/4 m-auto">
          <div className="mb-4">
            <div tw="flex items-start gap-x-2">
              <IconLogoBlue tw="h-10 w-10" />
              <WordmarkLogo tw="w-[200px] fill-button-blue" />
            </div>
            <div className="text-4xl font-bold">Register your account!</div>
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
              label="Create Password"
              name="password"
              type="password"
              onChange={(event) => setPass(event.target.value)}
              error={error}
            />
            <div>
              <GenericInput
                required
                label="Confirm Password"
                name="passwordConfirm"
                type="password"
                onChange={(event) =>
                  setConfirmedPassMatch(event.target.value === pass)
                }
                error={error}
              />
              {confirmedPassMatch && pass.length > 0 ? (
                <div tw="text-green-600 italic text-xs">✓ Passwords match</div>
              ) : (
                <div tw="text-red-600 italic text-xs">
                  Passwords do not match
                </div>
              )}
            </div>
            <GenericInput
              required
              label="Registration token"
              name="registrationToken"
              type="text"
              value={registrationToken}
              onChange={(event) => setRegistrationToken(event.target.value)}
              error={error}
            />
            <div className="w-full">
              <button
                className="w-full h-10 bg-button-blue border-button-blue text-white mt-2 mb-2 text-sm font-semibold rounded"
                onClick={async () => await register(email, pass)}
                disabled={loading}
              >
                Register
              </button>
            </div>
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
            src="/register.jpeg"
            alt="Trees with view of nyc skyline"
          />
        </picture>
      </div>
    </div>
  );
};
