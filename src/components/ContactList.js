import { React } from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const contactRenderedList = props.contacts.map((contact) => {
    return <ContactCard contact={contact} />;
  });
  return <div>{contactRenderedList}</div>;
};
export default ContactList;
