import ReactDOM from "react-dom/client";
import React from "react";
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
import { About } from "./routes/About";
import { PowerHour } from "./routes/PowerHour";
import { NotFound } from "./routes/NotFound";
import GlobalStyles from "./styles/GlobalStyles";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Toaster />
    <GlobalStyles />
    <RecoilRoot>
      <BrowserRouter>
        <div>
          <Header />
          <div className="min-h-[100vh] my-14 max-w-full" id="pageContent">
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
              <Route path="/about" element={<About />} />
              <Route path="/powerhour" element={<PowerHour />} />
              {/* <Route path="/contact" element={<Contact />} /> */}
              <Route path="/" element={<App />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <div className="flex" id="footer">
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
);
