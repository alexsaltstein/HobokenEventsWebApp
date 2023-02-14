import ReactDOM from "react-dom/client";
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { RecoilRoot } from "recoil";
import { AuthedRoute } from "./routes/AuthedRoute";
import { ListEventsPage } from "./components/admin/moderate/events/ListEventsPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import GlobalStyles from "./styles/GlobalStyles";
import { Toaster } from "react-hot-toast";

const Login = lazy(() => import("./components/admin/Login"));
const Logout = lazy(() => import("./components/admin/Logout"));
const AddEventPage = lazy(() => import("./components/admin/create/events/AddEventPage"));
const Place = lazy(() => import("./routes/Place"));
const About = lazy(() => import("./routes/About"));
const PowerHour = lazy(() => import("./routes/PowerHour"));
const NotFound = lazy(() => import("./routes/NotFound"));




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Toaster />
    <GlobalStyles />
    <RecoilRoot>
      <BrowserRouter>
        <div>
          <Header />
          <div
            className="flex min-h-[100vh] my-14 overflow-x-hidden overflow-y-scroll max-w-full"
            id="pageContent"
          >
            <Suspense fallback={<div>Loading...</div>}>
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
            </Suspense>
          </div>
          <div className="flex" id="footer">
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
