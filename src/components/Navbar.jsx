import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userImg from "../assets/user.png";
import { AuthContext } from "../Provides/AuthProvider";

const Navbar = () => {
  const { user, logOut }=useContext(AuthContext);
  console.log(user)
  return (
    <div className="flex justify-between items-center">
      <div>{user && user.email}</div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login flex gap-2 items-center">
        <div>
          <img src={userImg} alt="" />
        </div>
        {
          user && user ?.email ? (<button onClick={logOut} className="btn btn-neutral rounded-none text-lg">Logout</button>):(<Link to='/auth/login' className="btn btn-neutral rounded-none text-lg">Login</Link>)
        }
        
      </div>
    </div>
  );
};

export default Navbar;
