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
    <div
      className="*:lg:grid lg:min-h-screen flex items-center justify-center transition-colors  text-gray-900"
      
    >
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 shadow-lg bg-slate-200">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm">Sign in to access your account</p>
        </div>

        {/* Theme Toggle Button */}
        

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div className="space-y-4">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-md"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500">{formik.errors.email}</div>
              ) : null}
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block mb-2 text-sm">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder="********"
                className="w-full px-3 py-2 border rounded-md bg-current"
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500">{formik.errors.password}</div>
              ) : null}
            </div>

            {/* Forgot Password Link */}
            <div className="flex justify-end">
              <a href="#" className="text-sm hover:underline">
                Forgot password?
              </a>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-8 py-3 font-semibold rounded-md bg-purple-600 text-white hover:bg-purple-700 transition"
          >
            Sign in
          </button>

          {/* Sign Up Link */}
          <p className="text-sm text-center">
            Don't have an account yet?{" "}
            <a href="#" className="hover:underline text-purple-600">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
