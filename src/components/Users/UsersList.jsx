import {React, useEffect,useState} from "react";
import { Link } from "react-router-dom";
const UsersList = () => {
const [users,setUsers] = useState([]);
useEffect(()=>{
    const fetchData = async() => {
        const response =  await fetch('https://react-http-8cafd-default-rtdb.firebaseio.com/users_data.json').then();
        const responseData = await response.json();
       
        const users = [];
        for(const key in responseData)
        {
            users.push({
                id : key,
                name:responseData[key].name,
                mobile_no:responseData[key].mobile_no,
                email:responseData[key].email,
            })
        }
        setUsers(users);
        
    }
    fetchData();  
   
},[]);

return(
    <div className="card shadow mb-4">
    <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Users List</h6>
    </div>
    <div className="card-body">
        <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email id</th>
                        <th>Mobile no</th>
                        <th>Action</th>
                    </tr>
                </thead>
              
                <tbody>
                {users.map((userData)=>
                    <tr><td>{userData.id}</td><td>{userData.name}</td><td>{userData.email}</td><td>{userData.mobile_no}</td>
                    <td><Link to={process.env.REACT_APP_NAVIGATION_PREFIX + "/users/edit/"+userData.id} class="btn btn-primary btn-lg">Edit</Link>
                    <Link href="#" class="btn btn-danger  btn-lg">Delete</Link></td>
                    </tr>
                )}
                    
                    
                </tbody>
            </table>
        </div>
    </div>
</div>

);

}
export default UsersList;