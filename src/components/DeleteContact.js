import React from "react";
import { Link, useLocation } from "react-router-dom";

const DeleteContact = (props) => {
  const { state, data } = useLocation();
  // console.log(state);
  // console.log(data);
  const { name, email } = state.contact;
  const deleteContactHandler = (email) => {
    props.getContactEmail(email);
  };
  // state.delHandler.deleteHandler(state.contact.email);
  return (
    <div className="max-w-lg mx-auto w-full mt-10">
      <p className="text-2xl text-center mb-6">
        Do you wish to delete {name}'s contact?
      </p>
      <div className="flex justify-between max-w-xs mx-auto">
        <div>
          <Link to="/">
            <button
              className="bg-red-500 m-2 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => {
                deleteContactHandler(email);
              }}
            >
              Delete Contact
            </button>
          </Link>
        </div>
        <div>
          <Link to="/">
            <button className="bg-green-500 m-2 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Go To Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeleteContact;
