
import { Link } from "react-router-dom";
import Card from "../assets/Card";
import UsersList from "./UsersList";
 const Users = () => {
    return (
        <Card>
        <div className="container-fluid">
        <div className="text-right" style={{padding: "5px"}}>
        <Link to={process.env.REACT_APP_NAVIGATION_PREFIX + "/users/add"} className="btn btn-primary btn-icon-split">
            <span class="text">Add user</span>
        </Link>
        </div>
        {/*<p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
            For more information about DataTables, please visit the <a target="_blank"
    href="https://datatables.net">official DataTables documentation</a>.</p>*/}
      <UsersList></UsersList>
       </div>
    </Card>
    );
}
export default Users;