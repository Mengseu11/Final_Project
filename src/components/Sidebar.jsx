import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { ChevronDown, ChevronUp, LogOut, Settings, User, Menu, MessageSquare, ShoppingBag, Heart } from "lucide-react";
import { logOut } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../features/auth/authAction";


const AvatarMenu = ({ avatar }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState(false);
  const profileRef = useRef();

  const onLogout = () => {
    dispatch(logOut());
  };

  return (
    <div className="relative border-t lg:border-none">
      <div>
        <button
          ref={profileRef}
          className="hidden w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 lg:focus:ring-2 lg:block"
          onClick={() => setState(!state)}
        >
          <img src={avatar} className="w-full h-full rounded-full" />
        </button>
      </div>
      <ul
        className={`right-0 lg:absolute lg:shadow-md lg:mt-0 ${
          state ? "" : "lg:hidden"
        }`}
      >
        <button
          onClick={onLogout}
          className="block w-full text-justify text-red-600 hover:text-gray-400 border-t py-3 lg:hover:bg-gray-50 lg:p-3"
        >
          Logout
        </button>
      </ul>
    </div>
  );
};
export default function Sidebar  (){
  const dispatch = useDispatch();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const profile = useSelector((state) => state.auth.profile);
  const accessToken = useSelector((state) => state.auth.accessToken);
  const [state, setState] = useState(false);
  
    useEffect(() => {
      if (isAuthenticated && accessToken) {
        dispatch(getProfile(accessToken));
      }
    }, [isAuthenticated, accessToken]);

  // Toggle user profile dropdown
  // const toggleProfileDropdown = () => {
  //   setIsProfileOpen(!isProfileOpen);
  
  // };

  // Toggle menu dropdowns
  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const menuItems = [
    // { 
    //   name: "Dashboard", icon: <Menu size={20} />, path: "/dashboard",
    //   name: "Dashboard", icon: <Menu size={20} />, path: "/dashboard",
      
    // },
    { 
      name: "", 
      icon: <Menu size={20} color="grey"/>, 
      subMenu: [
        // { name: "Login", path: "/login", },
        { name: "Home", path: "/home" },
        { name: "Men", path: "/men" },
        { name: "Wome", path: "/women" },
        { name: "Kid", path: "/kid" },
        { name: "AboutUs", path: "/aboutus" },
        
      ] 
    },
    // { 
    //   name: "Orders", 
    //   icon: <ShoppingBag size={20} />, 
    //   // subMenu: [
    //   //   { name: "My Orders", path: "/orders/my" },
    //   //   { name: "Order History", path: "/orders/history" },
    //   // ] 
    // },
    // { name: "Wishlist", icon: <Heart size={20} />, path: "/wishlist" },
  ];

  return (
    <div className="  bg-gray-900 text-white  flex flex-col">
      {/* User Profile Dropdown */}
      {/* <div className="relative">
        <button
          className="flex items-center justify-between w-full p-3 rounded-lg bg-gray-800 hover:bg-gray-700"
          onClick={toggleProfileDropdown}
        >
          <div className="flex items-center gap-3">
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">Leroy Jenkins</p>
              <p className="text-sm text-gray-400">View profile</p>
            </div>
          </div>
          {isProfileOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>

        {isProfileOpen && (
          <div className="absolute left-0 w-full mt-2 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <Link
              to="/profile"
              className="flex items-center gap-3 p-3 hover:bg-gray-700"
            >
              <User size={18} /> Profile
            </Link>
            <Link
              to="/settings"
              className="flex items-center gap-3 p-3 hover:bg-gray-700"
            >
              <Settings size={18} /> Settings
            </Link>
            <button className="flex items-center gap-3 w-full text-left p-3 hover:bg-red-600">
              <LogOut size={18} /> Logout
            </button>
          </div>
        )}
      </div> */}

      {/* Sidebar Navigation with Dropdowns */}
      <nav className="flex flex-col  z-50 absolute" >
        {/* <div className="sm:flex sm:gap-4"></div> */}

        {menuItems.map((item, index) => (
          <div key={index}>
            <button
              className="flex items-center justify-between w-full p-3 rounded-lg"
              onClick={() => toggleDropdown(item.name)}
            >
              <div className="flex items-center gap-3">
                {item.icon} {item.name}
              </div>
             
              {item.subMenu && (
                openDropdown === item.name ? <ChevronUp size={18} color="grey" /> : <ChevronDown size={18} color="grey"/>
              )}
            </button>
            

            {/* Dropdown Menu for Items with Submenus */}
            {item.subMenu && openDropdown === item.name && (
              
              <div className=" dark:bg-gray-800 rounded-lg ">
                {item.subMenu.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    to={subItem.path}
                    className="block p-3 text-gray-300 hover:bg-slate-600"
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            )}
            
          </div>
        ))}
      </nav>
    </div>
  );
};


