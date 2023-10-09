import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import Dashboard from "../Dashboard/dashboard";
import Register from "../Register/Register";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import Users from "../Users/Users";
import UsersForm from "../Users/UsersForm";
import UsersEditForm from "../Users/UsersEditForm";
import "./routing.css";
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
        <Route
          path={process.env.REACT_APP_NAVIGATION_PREFIX + "/users"}
          element={<Users />}
        />
        <Route
          path={process.env.REACT_APP_NAVIGATION_PREFIX + "/users/add"}
          element={<UsersForm />}
        />
        <Route
          path={process.env.REACT_APP_NAVIGATION_PREFIX + "/users/edit/:id?"}
          element={<UsersEditForm />}
        />
      </Routes>
    </BrowserRouter>
  );
};
