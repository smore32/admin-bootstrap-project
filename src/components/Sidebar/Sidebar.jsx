import React, { useState } from "react";
import { SiAirbrakedotio } from "react-icons/si";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [style, setStyle] = useState(
    "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
  );
  const changeStyle = () => {
    if (
      style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
      );
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  };

  const changeStyle1 = () => {
    if (
      style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1"
      );
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  };
  return (
    <>
      {/*<!-- Sidebar -->*/}
      <ul className={style} id="accordionSidebar">
        {/* <!-- Sidebar - Brand --> */}
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/dashboard"
        >
          <div className="sidebar-brand-icon">
            <SiAirbrakedotio />
          </div>
          <div className="sidebar-brand-text mx-3">Admin</div>
        </Link>
        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider my-0" />

        {/*<!-- Nav Item - Dashboard -->*/}
        <li className="nav-item active">
          <Link className="nav-link" to="/dashboard">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider" />

        {/*<!-- Heading -->*/}
        <div className="sidebar-heading">Interface</div>

        {/*<!-- Nav Item - Pages Collapse Menu -->*/}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#sub-admin"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i class="fas fa-solid fa-user-secret"></i>
            <span>Sub Admin</span>
          </a>
          <div
            id="sub-admin"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <Link className="collapse-item" to="/sub-admin-list">
                Sub-Admin List
              </Link>
            </div>
          </div>
        </li>

        {/*<!-- Nav Item - Utilities Collapse Menu -->*/}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#users"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i class="fas fa-solid fa-user"></i>
            <span>Users</span>
          </a>
          <div
            id="users"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <Link className="collapse-item" to="/users-list">
                Users List
              </Link>
            </div>
          </div>
        </li>

        {/*<!-- Nav Item - Utilities Collapse Menu -->*/}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#transaction"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i class="fas fa-regular fa-hospital-user"></i>
            <span>Transactions</span>
          </a>
          <div
            id="transaction"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <Link className="collapse-item" to="/all-transaction">
                All Transaction
              </Link>
            </div>
          </div>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider" />

        {/*<!-- Sidebar Toggler (Sidebar) -->*/}
        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
            onClick={changeStyle}
          ></button>
        </div>

        {/*<!-- Sidebar Message -->*/}
        <div className="sidebar-card d-none d-lg-flex">
          <img
            className="sidebar-card-illustration mb-2"
            src="img/undraw_rocket.svg"
            alt="..."
          />
          <p className="text-center mb-2">
            <strong>SB Admin Pro</strong> is packed with premium features,
            components, and more!
          </p>
          <a
            className="btn btn-success btn-sm"
            href="https://startbootstrap.com/theme/sb-admin-pro"
          >
            Upgrade to Pro!
          </a>
        </div>
      </ul>
      {/*<!-- End of Sidebar -->*/}
    </>
  );
};
export default Sidebar;
