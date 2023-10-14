import Login from "../Login/Login";
import Register from "../Register/Register";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import Dashboard from "../Dashboard/Dashboard";
import SubAdminList from "../SubAdmin/SubAdminList";
import AddSubAdmin from "../SubAdmin/SubAdminList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersList from "../Users/UsersList";
import AddUser from "../Users/AddUser";
import AllTransaction from "../Transaction/AllTransaction";

export const Routing = () => {
  return (
    // <BrowserRouter>
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/sub-admin-list" element={<SubAdminList />} />
          <Route path="/add-sub-admin" element={<AddSubAdmin />} />

          <Route path="/users-list" element={<UsersList />} />
          <Route path="/add-new-user" element={<AddUser />} />

          <Route path="/all-transaction" element={<AllTransaction />} />
        </Routes>
      </Router>
    </>
    // </BrowserRouter>
  );
};
