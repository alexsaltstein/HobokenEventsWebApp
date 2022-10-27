import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { Login } from "./components/admin/Login";
import { RecoilRoot } from "recoil";
import { AuthedRoute } from "./routes/AuthedRoute";
import { ListEventsPage } from "./components/admin/moderate/events/ListEventsPage";
import { Logout } from "./components/admin/Logout";
import { AddEventPage } from "./components/admin/create/events/AddEventPage";
import { Place } from "./routes/Place";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <BrowserRouter>
      <div>
        <Header />
        <div className="flex min-h-[100vh] relative my-14" id="pageContent">
          <Routes>
            <Route path="/admin/login" element={<Login />} />
            <Route
              path="/admin/moderate/events"
              element={
                <AuthedRoute>
                  <ListEventsPage />
                </AuthedRoute>
              }
            />
            <Route
              path="/admin/create/events"
              element={
                <AuthedRoute>
                  <AddEventPage />
                </AuthedRoute>
              }
            />
            <Route
              path="/admin/logout"
              element={
                <AuthedRoute>
                  <Logout />
                </AuthedRoute>
              }
            />
            <Route path="/place/:id" element={<Place />} />
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
        </div>
        <div className="flex" id="footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  </RecoilRoot>
);
