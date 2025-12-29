import React, { useState, useRef } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKG_IMG, PHOTO_URL } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };
  const formSubmit = () => {
    //console.log(email);
    setErrorMessage(validateData(email.current.value, password.current.value));
    if (errorMessage) return;
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          //console.log(user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: PHOTO_URL,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              //navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    }
    if (isSignIn) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          //console.log(user);
          //navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="fixed inset-0 -z-10">
        <img src={BACKG_IMG} />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign UP"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-800 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800 rounded-lg"
        />
        <p className="text-red-500 font-bold text-lg py-4">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-600 w-full rounded-lg"
          onClick={formSubmit}
        >
          {isSignIn ? "Sign In" : "Sign UP"}
        </button>
        <p className="p-4 cursor-pointer" onClick={toggleForm}>
          {isSignIn
            ? "New to Netfix? Sign UP First"
            : "Already Registered! Sign In "}
        </p>
      </form>
    </div>
  );
};

export default Login;
