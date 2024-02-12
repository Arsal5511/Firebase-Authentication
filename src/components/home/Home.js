import React from "react";
import { Link } from "react-router-dom";
import SignOut from "../signout/SignOut";

const Home = (props) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h2>
          <Link to="/login">Login</Link>
        </h2>
        <h2>
          <Link to="/signup">Signup</Link>
        </h2>

        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>{props.name ? `WELCOME - ${props.name}` : "LOGIN PLEASE!"}</h1>
        <h2>{props.name ? <SignOut /> : ""}</h2>
      </div>
    </>
  );
};

export default Home;
