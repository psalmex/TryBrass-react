import React from "react";
import "./style.css";

const Button = ({ text }) => {
  return <button className="Button-secondary">{text}</button>;
};
// const Button = ({ text, buttonAction }) => {
//     return <button onClick={buttonAction}>{text}</button>;
// };

export default Button;
