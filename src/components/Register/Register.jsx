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

import { useFormik } from "formik";
import { registerSchema } from "../../schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

function Register() {
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: registerSchema,
      onSubmit: async (values, action) => {
        //e.preventDefault();
        try {
          const auth = getAuth();
          const userCredentials = await createUserWithEmailAndPassword(
            auth,
            values.email,
            values.password
          );
          updateProfile(auth.currentUser, {
            displayName: values.name,
          });

          const user = userCredentials.user;
          delete values.password;
          delete values.confirm_password;
          values.timeStamp = serverTimestamp();
          await setDoc(doc(db, "users", user.uid), values);
          navigate("/login");
          toast.success("Sign up was Successfully.");
          action.resetForm();
        } catch (error) {
          toast.error("Something went wrong while registration.");
        }
      },
    });

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
                      <form class="user" onSubmit={handleSubmit}>
                        <div class="form-group">
                          <input
                            name="name"
                            type="text"
                            class="form-control form-control-user"
                            id="name"
                            aria-describedby="emailHelp"
                            placeholder="Full Name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </div>
                        {errors.name && touched.name ? (
                          <p className="error-message">{errors.name}</p>
                        ) : null}
                        <div class="form-group">
                          <input
                            name="email"
                            type="email"
                            class="form-control form-control-user"
                            id="email"
                            aria-describedby="emailHelp"
                            placeholder="Email Address"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </div>
                        {errors.email && touched.email ? (
                          <p className="error-message">{errors.email}</p>
                        ) : null}
                        <div class="form-group">
                          <input
                            type="password"
                            id="password"
                            class="form-control form-control-user"
                            placeholder="Password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </div>
                        {errors.password && touched.password ? (
                          <p className="error-message">{errors.password}</p>
                        ) : null}
                        <div class="form-group">
                          <input
                            name="confirm_password"
                            type="password"
                            id="confirm_password"
                            class="form-control form-control-user"
                            placeholder="Confirm Password"
                            value={values.confirm_password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </div>
                        {errors.confirm_password && touched.confirm_password ? (
                          <p className="error-message">
                            {errors.confirm_password}
                          </p>
                        ) : null}
                        <input
                          type="submit"
                          value="SIGN UP"
                          class="btn btn-primary btn-user btn-block"
                        />
                        <OAuth />
                      </form>
                      <hr />
                      <div class="text-center">
                        <Link className="small" to="forgot-password">
                          Forgot Password?
                        </Link>
                      </div>
                      <div class="text-center">
                        <Link className="small" to="/login">
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
