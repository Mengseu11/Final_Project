import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authAction";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [navigate, isAuthenticated]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string()
        .min(8, "Must be 8 characters up")
        .max(15, "Must be 15 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });

  return (
  
        <div className="flex items-center justify-center min-h-screen bg-white">
          <div className="bg-slate-100 shadow-lg rounded-lg p-8 w-96">
            <img src="https://i.imgur.com/DRibeKq.png" alt="" />
            <h2 className="text-2xl font-serif text-center text-gray-900 mb-6 mt-3">Login/Register</h2>
            
            <form onSubmit={formik.handleSubmit} className="space-y-4">
            
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Email"
                />
              </div>
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500">{formik.errors.email}</div>
              ) : null}
    
          
              <div>
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={formik.handleChange}
                value={formik.values.password}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Password"
                />
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500">{formik.errors.password}</div>
              ) : null}
  
              <div className="flex items-center">
                <input type="checkbox" className="mr-2 text-pink-500" />
                <label className="text-gray-700">Remember me</label>
              </div>

              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                LOGIN
              </button>
            </form>
    
       
            <p className="mt-4 text-center text-gray-600">
              Not a member? <a href="#" className="text-pink-500">Sign up now</a>
            </p>
          </div>
        </div>
      );
    }
    

