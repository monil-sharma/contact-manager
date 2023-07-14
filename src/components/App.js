import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import AddContacts from "./AddContacts.js";
import ContactList from "./ContactList.js";
import ContactCard from "./ContactCard.js";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
  };

  return (
    <div>
      <Header />
      <AddContacts addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
