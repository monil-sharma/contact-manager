import React from "react";
import { Link, useLocation } from "react-router-dom";
import userIMG from "../images/user.JPG";

const ContactDetail = (props) => {
  const { state } = useLocation();
  const { name, email } = state.contact;
  console.log(state);
  return (
    <div className="mx-auto max-w-xs text-center mt-8">
      <div className="card border rounded w-full mb-4">
        <div>
          <img src={userIMG} alt="no img" className="border-b"></img>
        </div>
        <div className="content text-left w-full m-2">
          <div>{name}</div>
          <div>{email}</div>
        </div>
      </div>
      <div>
        <Link to="/">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Go back to contacts
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
