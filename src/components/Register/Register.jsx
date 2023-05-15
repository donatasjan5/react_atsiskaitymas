import React from "react";
import { Formik, Form, Field } from "formik";
import "./Register.css";

function Register(props) {
  const handleSubmit = (values) => {
    console.log(values.email);
  };

  return (
    <div className="container">
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
          fullName: "",
        }}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form className="form">
            <label htmlFor="fullName" className="label">
              Full Name
            </label>
            <Field
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="input"
            />

            <label htmlFor="email" className="label">
              Email
            </label>
            <Field
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input"
            />

            <label htmlFor="password" className="label">
              Password
            </label>
            <Field
              type="password"
              name="password"
              placeholder="*********"
              className="input"
            />

            <label htmlFor="confirmPassword" className="label">
              Password Confirmation
            </label>
            <Field
              type="password"
              name="confirmPassword"
              placeholder="*********"
              className="input"
            />

            <button type="submit" className="button">
              Register
            </button>
          </Form>
        )}
      </Formik>

      <div className="button-container">
        <button
          onClick={() => props.onFormSwitch("login")}
          className="switchButton"
        >
          Already have an account? Log In
        </button>
      </div>
    </div>
  );
}

export default Register;

