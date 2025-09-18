import { NETFLIX_IMG, USER_LOGO } from "../Utils/Constants";
import { useSelector } from "react-redux";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { toggelGptSearchView } from "../Utils/GptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
   const showGptSearch =useSelector(store=>store.gpt.showGptSearch)
  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };
   useEffect(() => {
    const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName,photoURL } = user;
        dispatch(addUser({
           uid: uid, 
           email: email, 
           displayName: displayName,
          photoURL: USER_LOGO }));
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    return ()=> unsubscribe();
  }, []);
  const handeleGPTSearchClick=()=>{
    dispatch(toggelGptSearchView())
  }

  return (
   <div className="absolute top-0 left-0 w-screen px-8 py-6 bg-gradient-to-b from-black/70 to-transparent z-50 flex flex-col md:flex-row  justify-between">
  <img className="w-44 mx-auto md:mx-0" src={NETFLIX_IMG} alt="logo" />
  {user && (
    <div className="flex items-center space-x-4">
    <button className="focus:outline-none text-white bg-purple-700 ml-2 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
     onClick={handeleGPTSearchClick}
     >{showGptSearch ? "Home page " : "GPT search"}</button>
      <p className="font-semibold text-white">{user.displayName}</p>
      <button
        className="h-8 px-3 rounded-md bg-red-600 text-white font-bold hover:bg-red-700"
        onClick={handleSignout}
      >
        Sign out
      </button>
      <img src={user.photoURL} alt="user" className="w-10 h-10 rounded-full" />
    </div>
  )}
</div>
  )
};
export default Header;
