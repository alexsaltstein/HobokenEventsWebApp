import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../utils/admin";
import { useUserState } from "../../utils/userState";

export const Login = () => {
  const API_URL = process.env.REACT_APP_API_URL;

  const navigate = useNavigate();
  const [, setUser] = useUserState();

  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

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
  return (
    <div>
      <div>
        <input
          type="email"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
          className="border"
        />
        <input
          type="password"
          name="password"
          onChange={(event) => setPass(event.target.value)}
          className="border"
        />
        <button
          onClick={async () => await login(email, pass)}
          disabled={loading}
        >
          login
        </button>
      </div>
      <button onClick={() => logout(setUser)}>logout</button>
      {error ? <div>{error}</div> : null}
    </div>
  );
};
