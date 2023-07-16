import React from "react";
import { Link, useLocation } from "react-router-dom";

const ContactDetail = (props) => {
  const { state } = useLocation();
  const { name, email } = state.contact;
  console.log(state);
  return (
    <div className="mx-auto max-w-xs mt-4 text-center">
      <div className="card">
        <div>img</div>
        <div className="content text-left">
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
