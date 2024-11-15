import React from "react";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="mt-12 flex flex-col gap-4 text-semibold">
      <h2 className="font-bold">Find us on</h2>
      <div className="join flex join-vertical *:bg-base-100 *:rounded-none *:justify-start">
        <button className="btn join-item"><FaFacebook></FaFacebook> Facebook</button>
        <button className="btn join-item"><BsTwitterX></BsTwitterX> Twitter</button>
        <button className="btn join-item"><BsInstagram></BsInstagram> Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;
