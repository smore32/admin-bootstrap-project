import React from "react";
import logo from "./logo.svg";
import { Routing } from "./components/Routing/Routing";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      {" "}
      <div className="App">
        <Routing />
        {/*<button onClick={() => {
          dispatch(increment())
        }}
        className="me-2 btn btn-primary"
      > Increment </button>

        <button onClick={() => {
          dispatch(decrement())
        }}
        className="me-2 btn btn-primary"
      > Decrement </button>*/}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
