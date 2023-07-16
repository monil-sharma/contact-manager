import React from "react";
import { Link, useLocation } from "react-router-dom";

const DeleteContact = (props) => {
  const { state, data } = useLocation();
  // console.log(state);
  // console.log(data);
  const { email } = state.contact;
  const deleteContactHandler = (email) => {
    props.getContactEmail(email);
  };
  // state.delHandler.deleteHandler(state.contact.email);
  return (
    <div>
      delete
      <Link to="/">
        <button
          className="bg-red-500 m-2"
          onClick={() => {
            deleteContactHandler(email);
          }}
        >
          delete contact
        </button>
      </Link>
      <Link to="/">
        <button className="bg-green-500 m-2">go to home</button>
      </Link>
    </div>
  );
};

export default DeleteContact;
