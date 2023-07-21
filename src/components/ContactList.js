import { React } from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  // const deleteContactHandler = (email) => {
  //   props.getContactEmail(email);
  // };

  const contactRenderedList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        // deleteHandler={deleteContactHandler}
        key={contact.email}
      />
    );
  });
  return (
    <div>
      <div className="w-full max-w-xl flex justify-between mx-auto mt-10 mb-4">
        <div>
          <h1 className="text-3xl">Contact List</h1>
        </div>
        <div>
          {" "}
          <Link to="/add">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Add Contact
            </button>
          </Link>
        </div>
      </div>{" "}
      <div>{contactRenderedList}</div>;
    </div>
  );
};
export default ContactList;
