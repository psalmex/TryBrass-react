import React from "react";
// import "./style.css";
// import Login from '../Login';
import Nav from "../Nav";
import Button from "../Button";
// import Button from "../Button/style.css";
// import logo from './logo.svg';

const Home = () => {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className="container">
        <div className="top">
          {" "}
          <button>COMING SOON</button> Up to ₦10m in financing to support your
          business.
        </div>
        <div>
          <div>
            <img
              className="img1"
              src="https://res.cloudinary.com/psalmex/image/upload/v1616146203/stadia%20gamer/trybass_analysis.png"
              alt=""
            />
          </div>
          <div className="body">
            <h5>BANK BETTER</h5>
            <h1>
              Made for business
              <br />
              current account .
            </h1>
            <p>
              Powerful yet simple. Great human support.
              <br />
              Open an account in <strong>10 minutes!</strong>
            </p>
          </div>
          <div className="access">
            <Button text={"Request access"} />
            <p>
              <input type="checkbox" checked /> If you need any help, call
              +234-1-700-1760
            </p>
          </div>
          {/* <div>
            <img className="img1"
              src="https://res.cloudinary.com/psalmex/image/upload/v1616146203/stadia%20gamer/trybass_analysis.png"
              alt=""
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
