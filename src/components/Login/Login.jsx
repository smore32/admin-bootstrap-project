import React, { useState } from "react";
import "../assets/css/sb-admin-2.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { login_success } from '../../reducers/authSlice';
function Login()
{   
    const isLogin = useSelector((state) => state.auth.isLogin);
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [isvisible, setIsVisible] = useState(false);
    const dispatch = useDispatch()

    const validateEmail = (email) => {
        const re =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      };
    const loginSubmitHandler = (e) =>{
        e.preventDefault();
        if(!validateEmail(email))
        {
            toast.error("Please Enter Valid Email Address");
        }
        else if(password === "")
        {
            toast.error("Please Enter Valid Email Address");
        }
        else
        {
            setIsVisible(true);
            dispatch(login_success())
            navigate(process.env.REACT_APP_NAVIGATION_PREFIX + "/dashboard");
            /*fetch(process.env.REACT_APP_API_URL + "/api/vendor/login", {
                method: "POST",
                body: JSON.stringify({ email: email, password: password }),
                headers: { "content-type": "application/json" },
              })
                .then((d) => d.json())
                .then((res) => 
                {
                  setIsVisible(false);
                  let status = res.status;
                  if (status == true) 
                  {
                        localStorage.clear();
                        toast(`${res.message}`, {
                        type: "success",
                        });
                        navigate(process.env.REACT_APP_NAVIGATION_PREFIX + "/dashboard");
                  } 
                  else 
                  {
                        toast(`${res.message}`, {
                        type: "error",
                        });
                  }
                })
                .catch((err) => {
                  setIsVisible(true);
                  console.log("e", err);
                });*/
        }
    }

    return (
        <>
        <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-10 col-lg-12 col-md-9">
            <ToastContainer autoClose={false} />
                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                    </div>
                                    <form class="user" onSubmit={loginSubmitHandler}>
                                        <div class="form-group">
                                            <input type="email" class="form-control form-control-user"
                                                id="exampleInputEmail" onChange={(e)=>setEmail(e.target.value)} aria-describedby="emailHelp"
                                                placeholder="Enter Email Address..." />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" onChange={(e)=>setPassword(e.target.value)} class="form-control form-control-user"
                                                id="exampleInputPassword" placeholder="Password" />
                                        </div>
                                        <div class="form-group">
                                            <div class="custom-control custom-checkbox small">
                                                <input type="checkbox" class="custom-control-input" id="customCheck" />
                                                <label class="custom-control-label" htmlFor="customCheck">Remember
                                                    Me</label>
                                            </div>
                                        </div>
                                        <input type="submit" value=" Login" class="btn btn-primary btn-user btn-block"/>
                                       
                                    </form>
                                    <hr/>
                                    <div class="text-center">
                                        <Link className="small" to={process.env.REACT_APP_NAVIGATION_PREFIX+ "/forgetpassword"}>Forgot Password?</Link>
                                    </div>
                                    <div class="text-center">
                                        <a className="small" href="register.html">Create an Account!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
    </>
    );
}
export default Login;