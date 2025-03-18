import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layout/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import Error from './pages/Error.jsx'
import Login from "./pages/Login.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";
import Men from "./pages/Men.jsx";
import AddtoCart from "./components/AddtoCart.jsx";
import Women from "./pages/Women.jsx";
import { Sidebar } from "lucide-react";
import AboutUs from "./pages/AboutUs.jsx";
import Payment from "./components/Payment.jsx";



const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: "/home",
          element: <Home />
        },
      ],
      errorElement: <Error/>
    },
    {
      path: "/men",
      element: <Men/>
    },
    {
      path: "/women",
      element : <Women/>
    },
    {
      path: "/cart",
      element: <AddtoCart/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/sidebar',
      element:<Sidebar/>
    },
    {
      path:'/aboutus',
      element:<AboutUs/>
    },
    {
      path:'/payment',
      element:<Payment/>
    },
   
  ]
)
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>
);
