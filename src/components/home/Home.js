import React from "react";
import { Link } from "react-router-dom";
import SignOut from "../signout/SignOut";

const Home = (props) => {

  return (
    <>
      <div style={{display:'flex', justifyContent:'center'}}>
        <h1>
          <Link to="/login">Login</Link>
        </h1>
        <h1>
          <Link to="/signup">Signup</Link>
        </h1>
      </div>

      <br />
      <br />
      <br />
      <h2>{props.name ? `WELCOME - ${props.name}` : "Login Please"}</h2>
      <h2>{props.name ? <SignOut /> : ''}</h2>
    </>
  );
};

export default Home;
