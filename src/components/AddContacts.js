import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddContacts = (props) => {
  const navigate = useNavigate();

  const addContactHandler = props.addContactHandler;
  const [contact, setContact] = useState({ name: "", email: "" });
  //console.log(test1);

  const add = (e) => {
    e.preventDefault();
    if (contact.name === "" || contact.email === "") {
      alert("Please fill name and email both");
      return;
    }
    addContactHandler(contact);
    setContact({ name: "", email: "" });
    // console.log(contact);
    navigate("/");
  };

  return (
    <div className="mx-auto w-full max-w-xs mt-14 mb-7">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={add}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
            value={contact.name}
            onChange={(e) => {
              // (e.target.value);
              setContact({ ...contact, name: e.target.value });
              // console.log(contact);
            }}
          ></input>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={contact.email}
            onChange={(e) => {
              // (e.target.value);
              setContact({ ...contact, email: e.target.value });
              // console.log(contact);
            }}
          ></input>
        </div>
        <div className="flex items-center justify-between">
          <Link to="/">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Go Back
            </button>
          </Link>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddContacts;
