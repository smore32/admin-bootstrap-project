import {React,useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import Card from "../assets/Card";
 const UsersForm = (props) => {
    let navigate = useNavigate();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [mobile_no,setMobileNo] = useState("");
    const [isValidForm,setValidForm] = useState(false);
    const validateEmail = (email) => {
        const re =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      };
    const userSubmitHandler = (event) =>{
        console.log(email);
        event.preventDefault();
        if(name === "")
        {
            toast.error("Please Enter Name");
        }
        else if(mobile_no === "")
        {
            toast.error("Please Enter Mobile No");
        }
        else if(!validateEmail(email))
        {
            toast.error("Please Enter Valid Email Address");
        }
        else if(password === "")
        {
            toast.error("Please enter password");
        }
        else
        {
            setValidForm(true);
            const usersData = {
                name:name,
                email:email,
                mobile_no:mobile_no,
                password:password
            };
            const response = fetch('https://react-http-8cafd-default-rtdb.firebaseio.com/users_data.json',{
                method:'POST',
                body : JSON.stringify(usersData)
            });
            if(response)
            {
                toast.success("User details added successfully");
                navigate('/users');
            }
        }
    }
    return (
    <Card>
        <div class="container-fluid"> 
        <div class="row">
            <div class="col-lg-6">
             <ToastContainer/>
                <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Add new user</h6>
                </div>
                <div class="card-body">
                    <form class="user" onSubmit={userSubmitHandler}>
                    <div class="form-group row">
                        <div class="col-sm-6 mb-3 mb-sm-0">
                            <input type="text" onChange={(e)=>setName(e.target.value)}  class="form-control form-control-user" id="namee" placeholder="Name"/>
                        </div>
                        <div class="col-sm-6">
                            <input type="number" onChange={(e)=>setMobileNo(e.target.value)}  class="form-control form-control-user" id="mobile_no" placeholder="Mobile No"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <input type="email"  onChange={(e)=>setEmail(e.target.value)} class="form-control form-control-user" id="email" placeholder="Email Address"/>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-6">
                            <input type="password"  onChange={(e)=>setPassword(e.target.value)}  class="form-control form-control-user" id="password" placeholder="Password"/>
                        </div>
                    </div>
                    {!isValidForm && <input type="submit" value="Submit" class="btn btn-primary btn-user btn-block"/>}
                    
                </form>
                </div>
                </div>
            </div>
        </div>
        </div>        
    </Card>
    );
}
export default UsersForm;