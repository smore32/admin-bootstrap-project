import React, { useState } from "react";
import { Link } from "react-router-dom";
import OAuth from "../OAuth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../../firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;
  const navigate = useNavigate();

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      updateProfile(auth.currentUser, {
        displayName: name,
      });
      const user = userCredentials.user;
      //console.log(user, "this is user detaails");
      const formDataCopy = { ...formData };
      //delete password user entry...bcoz password already save in firebase authentication
      delete formDataCopy.password;
      formDataCopy.timeStamp = serverTimestamp();
      await setDoc(doc(db, "users", user.uid), formDataCopy);
      toast.sucess("Sign up was Successfully.");
      navigate("/");
    } catch (error) {
      //console.log(error, "this is catch error");
      toast.error("Something went wrong with the registration.");
    }
  }

  return (
    <>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-10 col-lg-12 col-md-9">
            <div class="card o-hidden border-0 shadow-lg my-5">
              <div class="card-body p-0">
                <div class="row">
                  <div class="col-lg-6 d-none d-lg-block bg-register-image"></div>
                  <div class="col-lg-6">
                    <div class="p-5">
                      <div class="text-center">
                        <h1 class="h4 text-gray-900 mb-4">Register</h1>
                      </div>
                      <form class="user" onSubmit={onSubmit}>
                        <div class="form-group">
                          <input
                            name="name"
                            type="text"
                            class="form-control form-control-user"
                            id="name"
                            onChange={onChange}
                            //value={name}
                            aria-describedby="emailHelp"
                            placeholder="Full Name"
                          />
                        </div>
                        <div class="form-group">
                          <input
                            name="email"
                            type="email"
                            class="form-control form-control-user"
                            id="email"
                            onChange={onChange}
                            //value={email}
                            aria-describedby="emailHelp"
                            placeholder="Email Address"
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="password"
                            id="password"
                            class="form-control form-control-user"
                            onChange={onChange}
                            //value={password}
                            placeholder="Password"
                          />
                        </div>
                        <input
                          type="submit"
                          value="SIGN Up"
                          class="btn btn-primary btn-user btn-block"
                        />
                        <OAuth />
                      </form>
                      <hr />
                      <div class="text-center">
                        <Link
                          className="small"
                          to={
                            process.env.REACT_APP_NAVIGATION_PREFIX +
                            "/forgot-password"
                          }
                        >
                          Forgot Password?
                        </Link>
                      </div>
                      <div class="text-center">
                        <Link
                          className="small"
                          to={
                            process.env.REACT_APP_NAVIGATION_PREFIX + "/login"
                          }
                        >
                          Sign In
                        </Link>
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
export default Register;
