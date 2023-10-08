
import { Link } from "react-router-dom";

 const Sidebar = () => {
    return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">Admin</div>
        </a>
        <hr className="sidebar-divider my-0"/>
        <li className="nav-item active">
            <Link className="nav-link" to={process.env.REACT_APP_NAVIGATION_PREFIX+ "/dashboard"}>Dashboard</Link>
        </li>
        <hr className="sidebar-divider"/>
        <div className="sidebar-heading">
            Interface
        </div>
        <li className="nav-item">
            <Link className="nav-link" to={process.env.REACT_APP_NAVIGATION_PREFIX+ "/users"}>Users</Link>
        </li>
    </ul>

    );
}
export default Sidebar;