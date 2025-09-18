import { useState, useRef } from "react";
import { NETFLIX_BG_IMG, USER_LOGO } from "../Utils/Constants";
import Header from "./Header";
import { CheckValidData } from "../Utils/Validate";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { use } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";

const Login = () => {
  const [formContent, setformContent] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const message = CheckValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (!message) return;

    if (!formContent) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: USER_LOGO,
                }),
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
          .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + "-" + errorCode);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode - errorMessage)
        });
    }
  };
  const togglesignin = () => {
    setformContent(!formContent);
  };

  return (
   <div className="relative">
  <Header />

  {/* Background image */}
  <div className="absolute inset-0">
  <img
    src={NETFLIX_BG_IMG}
    alt="bgImageMissing"
    className=" h-screen object-cover"
  />
  </div>

 
  <form
    onSubmit={(e) => e.preventDefault()}
    className="absolute w-11/12 sm:w-8/12 md:w-5/12 lg:w-3/12 bg-black/70 my-20 sm:my-32 mx-auto right-0 left-0 flex flex-col items-center text-center rounded-md p-6"
  >
    <h5 className="text-white font-bold text-2xl sm:text-3xl mb-4">
      {formContent ? "Login" : "Sign up"}
    </h5>

    {!formContent && (
      <input
        ref={name}
        type="text"
        placeholder="Full Name"
        className="p-3 m-2 w-full bg-slate-600 rounded-md text-center"
      />
    )}

    <input
      ref={email}
      type="text"
      placeholder={formContent ? "Enter mail" : "Enter new mail"}
      className="p-3 m-2 w-full bg-slate-600 rounded-md text-center"
    />

    <input
      ref={password}
      type="password"
      placeholder={formContent ? "Password" : "New password"}
      className="p-3 m-2 w-full bg-slate-600 rounded-md text-center"
    />

    <p className="text-red-600 font-bold p-2">{ErrorMessage}</p>

    <button
      className="h-12 w-full rounded-md bg-red-600 text-white font-bold hover:bg-red-700 transition mb-4"
      onClick={handleButtonClick}
    >
      {formContent ? "Login" : "Sign up"}
    </button>

    <p onClick={togglesignin} className="text-white cursor-pointer">
      {formContent ? "New to Netflix? Sign up" : "Already a user? Login"}
    </p>
  </form>
</div>

  );
};
export default Login;
