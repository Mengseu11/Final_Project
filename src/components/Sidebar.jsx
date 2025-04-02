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

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const menuItems = [
 
    { 
      name: "", 
      icon: <Menu size={30} color="#475569"/>, 
      subMenu: [
        // { name: "Login", path: "/login", },
        { name: "Home", path: "/home" },
        { name: "Men", path: "/men" },
        { name: "Wome", path: "/women" },
        { name: "Shoes", path: "/shoes" },
        { name: "AboutUs", path: "/aboutus" },
        
      ] 
    },

  ];

  return (
    <div className="  bg-gray-600 text-white  flex flex-col">

      <nav className="flex flex-col  z-50 absolute" >

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
                openDropdown === item.name ? <ChevronUp size={30} color="#475569" /> : <ChevronDown size={30} color="#475569"/>
              )}
            </button>
            
            {item.subMenu && openDropdown === item.name && (
              
              <div className=" dark:bg-slate-600 rounded-lg ">
                {item.subMenu.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    to={subItem.path}
                    className="block p-3 text-gray-300 hover:bg-slate-800"
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


