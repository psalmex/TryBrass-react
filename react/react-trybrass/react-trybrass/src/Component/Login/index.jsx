import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Button/style.css";
import Button from "../Button";
import "./../Button";
// import Nav from "./../Nav";

const Login = () => {
  const [inputs, setInputs] = useState({
    name: "",
    password: "",
    email: "",
  });

  const inputHandler = (e) => {
    e.persist();
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  console.log(inputs);

  return (
    <div>
      <div className="Nav">
        <div>
          <Link to="/">
            <img
              src="https://res.cloudinary.com/psalmex/image/upload/v1616396370/stadia%20gamer/trybrass_logo_1download_wutkbi.png"
              alt=""
              width="100px"
            />
          </Link>
        </div>
        <div>
          <Button text={"Welcome"} />
        </div>
      </div>
      <div>
        <form className="login">
          <h2>Login into your account</h2>
          <div className="">
            <input
              type="text"
              placeholder="Full name"
              value={inputs.name}
              name="name"
              onChange={inputHandler}
            />
          </div>
          <div className="">
            <input
              type="email"
              placeholder="Email Address"
              value={inputs.email}
              name="email"
              onChange={inputHandler}
            />
          </div>
          <div className="">
            <input
              type="password"
              placeholder="Enter Password"
              value={inputs.name}
              name="password"
              onChange={inputHandler}
            />
            {/* <div>show</div> */}
          </div>
          <button type="submit" onClick={submitForm}>
            Log me in
          </button>
          <h5>
            Forgot your password?{" "}
            <a href="https://trybrass.com">Reset it here</a>
          </h5>
        </form>
      </div>
    </div>
  );
};

export default Login;
