import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import * as linkTo from "../constants/Router";

const Login = () => {
  useEffect(() => {
    document.title = "Login-Instagram";
  });
  const history = useHistory();

  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
    error: "",
  });

  const isInvalid = formInput.password === "" && formInput.email === "";

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container flex mx-auto max-w-screen-md justify-center items-center h-screen">
      <div className="flex flex-col items-center bg-white w-10/12 md:w-6/12  p-4 border md:border-gray-400 mb-4 rounded">
        <h1 className="flex justify-center w-full mx-auto">
          <img
            src="https://freepikpsd.com/media/2019/10/font-instagram-png-5-Transparent-Images.png"
            alt="Instagram"
            className="mt-2 w-3/5 mb-4"
          />
        </h1>
        <div className="flex flex-col w-full mx-auto mb-4">
          <form onSubmit={submitHandler}>
            {formInput.error && (
              <h1 className="mb-4 text-xs text-red-300">{formInput.error}</h1>
            )}
            <input
              aria-label="Enter your email"
              placeholder="Email"
              type="email"
              className="text-sm text-gray-800 w-full py-5 px-4 h-2 border border-gray-600 rounded mb-2 "
              onChange={(e) => setFormInput({ email: e.target.value })}
              value={formInput.email}
              required
            />
            <input
              aria-label="Enter your email"
              placeholder="Password"
              type="password"
              className="text-sm text-gray-800 w-full py-5 px-4 h-2 border border-gray-600 rounded mb-2"
              onChange={(e) => setFormInput({ password: e.target.value })}
              value={formInput.password}
              required
            />
            <button
              disabled={isInvalid}
              className={`bg-blue-500 text-white w-full rounded h-8 font-bold ${
                isInvalid && "opacity-50"
              }`}
            >
              Login
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white p-3 border border-gray-400 rounded">
          <p className="text-sm">
            Don't have an account?{""}
            <Link
              to={linkTo.SIGN_UP}
              className="text-blue-500 text-sm font-bold"
            >
              {" "}
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
