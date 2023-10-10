import React from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { db } from "../firebase";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";

export default function OAuth() {
  async function onGoogleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      //console.log(user);
      //check for the user
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
    } catch (error) {
      toast.error("Could not authorize with google");
      //console.log(error, "catch error");
    }
  }
  return (
    <button
      class="btn btn-google btn-block btn-user"
      style={{ textTransform: "uppercase" }}
      onClick={onGoogleClick}
      type="button"
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
