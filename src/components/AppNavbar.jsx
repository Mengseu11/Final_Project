import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { getProfile } from "../features/auth/authAction";
import { logOut } from "../features/auth/authSlice";
import AddtoCart from "./AddtoCart";
import { NavLink } from "react-router";
import Sidebar from "./Sidebar";

const AvatarMenu = ({ avatar }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState(false);
  const profileRef = useRef();

  const onLogout = () => {
    dispatch(logOut());
  };

  return (
    <div className="relative border-t border-none">
      <div>
        <button
          ref={profileRef}
          className="  sm:w-10 sm:h-10 h-8 w-8  outline-none rounded-full ring-offset-2 ring-gray-200 sm:outline-none sm:rounded-full sm:ring-offset-2 sm:ring-gray-200 lg:focus:ring-2 sm:block "
          onClick={() => setState(!state)}
        >
          <img src={avatar} className="w-full h-full rounded-full sm:w-full sm:h-full sm:rounded-full " />
        </button>
      </div>
      <ul
        className={`right-0 absolute shadow-md mt-0 sm:right-0 sm:absolute sm:shadow-md sm:mt-0${
          state ? "" : "sm:hidden hidden"
        }`}
      >
        <button
          onClick={onLogout}
          className=" w-full  sm:w-full  text-red-600 hover:text-gray-400 border-t py-3 lg:hover:bg-gray-50 lg:p-3  "
        >
          Logout
        </button>
      </ul>
    </div>
  );
};

export default function AppNavbar() {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.cart.items.length); 
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const profile = useSelector((state) => state.auth.profile);
  const accessToken = useSelector((state) => state.auth.accessToken);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const [state, setState] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (isAuthenticated && accessToken) {
      dispatch(getProfile(accessToken));
    }
  }, [isAuthenticated, accessToken]);

  useEffect(() => {
    document.body.className =
      theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white";
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const navigation = [
    { title: "Home", path: "/home" },
    { title: "Men", path: "/men" },
    { title: "Women", path: "/women" },
    { title: "Shoes", path: "/shoes" },
  ];

  return (
    <header className="sticky top-0 left-0 w-full z-50 ">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
        <div className="flex h-16 items-center justify-between">
          <div className="mb-14 gap-96 sm:gap-4">
            <Sidebar />
          </div>
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-8 text-xl  px-6 py-2 bg-black border border-gray-700 rounded-full shadow-lg">
                {navigation.map((item, idx) => (
                  <li key={idx}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `text-gray-300 transition hover:text-gray-500 font-bold ${
                          isActive ? "underline decoration-stone-300" : ""
                        }`
                      }
                    >
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className=" lg:text-4xl font-bold font-serif ">WatchMe</div>

          <div className="flex items-center lg:gap-4">
          <AddtoCart/>
            <Link
              onClick={toggleTheme}
              className="relative inline-block rounded-full "
            >
              {theme === "light" ? "🌙" : "☀️"}
            </Link>

            


            <div className="sm:flex sm:gap-4 ">
              {isAuthenticated ? (
                <AvatarMenu avatar={profile && profile.avatar} />
              ) : (
                <div>
                  <Link onClick={logOut} to="/login" className="font-extrabold">
                    Login
                  </Link>
                </div>
              )}
            </div>
          

            {/* <div className="block md:hidden">
              <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
}
