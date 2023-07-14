import { React } from "react";
import ContactCard from "./ContactCard";

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
  return <div>{contactRenderedList}</div>;
};
export default ContactList;
