import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptsearchView } from "../utils/gptSlice";
import lang from "../utils/languageConstants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const gptSearchView = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();

  const baseClasses =
    "absolute top-0 left-0 w-full px-8 py-2 z-30 flex justify-between items-center";

  const browseHeader =
    "bg-gradient-to-b from-black/80 via-black/40 to-transparent";

  const gptHeader = "bg-gradient-to-b from-black to-white";

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
        //navigate("/");
      })
      .catch((error) => {
        // An error happened.
        //navigate("/error");
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        //signOut
        dispatch(removeUser);
        navigate("/");
      }
    });
    //Unsubscribed
    return () => unSubscribe();
  }, []);

  const handleGptSearch = () => {
    dispatch(toggleGptsearchView());
  };

  const handleLanguageChange = (e) => {
    //console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div
      className={`${baseClasses} ${gptSearchView ? gptHeader : browseHeader}`}
    >
      <img className="w-40" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2">
          {gptSearchView && (
            <select
              className="p-2 m-3 bg-gray-900 text-white rounded-lg"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="py-2 px-4 mx-4 my-3 bg-purple-900 text-white rounded-lg"
            onClick={handleGptSearch}
          >
            {gptSearchView ? " to Home" : "GPT Search"}
          </button>
          <img className="w-8 h-8 mt-3" alt="user-icon" src={user?.photoURL} />
          <button className="font-bold text-white ml-2" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
