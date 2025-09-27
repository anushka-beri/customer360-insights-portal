import React, { useRef } from "react";
import DynamicForm from "./inputComponent";
import customerImage from './assets/customer360.jpg'
import * as Yup from "yup";

const LoginPage = () => {
  const formRef = useRef();

  const fields = [
    {
      name: "email",
      label: "Email",
      type: "email",
      validation: Yup.string().email("Invalid email").required("Email is Required"),
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      validation: Yup.string().min(6, "Min 6 characters").required("Password is required"),
    },
  ];

  const handleSubmit = (values) => {
    console.log("Login submitted:", values);
  };

  const triggerSubmit = () => {
    if (formRef.current) {
      formRef.current.submitForm();
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-3/5">
        <img
          src={customerImage}
          alt="Login"
          className="h-full w-full"
        />
      </div>

      <div className="w-4/10 flex items-center justify-center bg-gray-50 p-8">
        <div className="w-full max-w-sm">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Login
          </h2>

          <DynamicForm onSubmit={handleSubmit} innerRef={formRef} fields={fields} />

          <button
            onClick={triggerSubmit}
            className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Login
          </button>

          <p className="mt-4 text-center text-gray-600 text-sm">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-500">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
