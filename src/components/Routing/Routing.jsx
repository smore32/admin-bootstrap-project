import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ForgotPassword from "../ForgotPassword/ForgotPassword";

import Dashboard from "../Dashboard/Dashboard";
export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Login />} />
        <Route
          path={process.env.REACT_APP_NAVIGATION_PREFIX + "/register"}
          element={<Register />}
        />
        <Route
          path={process.env.REACT_APP_NAVIGATION_PREFIX + "/forgot-password"}
          element={<ForgotPassword />}
        />
        <Route
          path={process.env.REACT_APP_NAVIGATION_PREFIX + "/dashboard"}
          element={<Dashboard />}
        />
      </Routes>
    </BrowserRouter>
  );
};
