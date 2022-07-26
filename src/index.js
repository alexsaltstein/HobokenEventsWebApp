import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { Login } from "./components/admin/Login";
import { RecoilRoot } from "recoil";
import { AuthedRoute } from "./routes/AuthedRoute";
import { AddEvent } from "./components/admin/AddEvent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/add"
          element={
            <AuthedRoute>
              <AddEvent />
            </AuthedRoute>
          }
        />
        <Route path="/" element={<App />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </RecoilRoot>
);
