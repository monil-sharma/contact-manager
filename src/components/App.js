import React, { useState, useEffect } from "react";
// import { uuid } from "uuidv4";
import "./App.css";
import Header from "./Header";
import AddContacts from "./AddContacts.js";
import ContactList from "./ContactList.js";
// import ContactCard from "./ContactCard.js";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  // const addContactHandler = (contact) => {
  //   console.log(contact);
  //   setContacts([...contacts, contact]);
  // };
  const addContactHandler = (contact) => {
    console.log(contact);
    let temp = contacts;
    temp.unshift(contact);
    setContacts([...temp]);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(temp));
  };

  const removeContactHandler = (email) => {
    const newContactList = contacts.filter((contact) => {
      return contact.email !== email;
    });
    let temp = [...newContactList];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(temp));
    setContacts(newContactList);
  };

  useEffect(() => {
    console.log("1 " + contacts.length);
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    // console.log("2 " + contacts.length);
    if (retrieveContacts) {
      setContacts(retrieveContacts);
      // console.log("3 " + contacts.length);
    }
  }, []);

  //   useEffect(() => {
  //   console.log("4 " + contacts.length);
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  //   console.log("5 " + contacts.length);
  // }, [contacts]);

  return (
    <div>
      <Header />
      <AddContacts addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactEmail={removeContactHandler} />
    </div>
  );
}

export default App;
