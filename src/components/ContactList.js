import { React } from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  const deleteContactHandler = (email) => {
    props.getContactEmail(email);
  };

  const contactRenderedList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        deleteHandler={deleteContactHandler}
        key={contact.email}
      />
    );
  });
  return (
    <div>
      <div>
        <h1>
          Contact List
          <Link to="/add">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Add Contact
            </button>
          </Link>
        </h1>
      </div>{" "}
      <div>{contactRenderedList}</div>;
    </div>
  );
};
export default ContactList;
