import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import AddContacts from "./AddContacts.js";
import ContactList from "./ContactList.js";
import ContactCard from "./ContactCard.js";

function App() {
  const contacts = [
    {
      id: "1",
      name: "Steve Rogers",
      email: "captainamerica@avengers.com",
    },
    {
      id: "2",
      name: "Tony Stark",
      email: "ironman@avengers.com",
    },
  ];

  return (
    <div>
      <Header />
      <AddContacts />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
