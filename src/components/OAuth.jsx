import React from "react";
import { FcGoogle } from "react-icons/fc";
export default function OAuth() {
  return (
    <button
      class="btn btn-google btn-block btn-user"
      style={{ textTransform: "uppercase" }}
    >
      <FcGoogle
        style={{
          backgroundColor: "white",
          fontSize: "24px",
          borderRadius: "9999px",
          marginRight: "12px",
        }}
      />
      Continue with Google
    </button>
  );
}
