import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { uuid } from "uuidv4";
import "./App.css";
import Header from "./Header";
import AddContacts from "./AddContacts.js";
import ContactList from "./ContactList.js";
import ContactDetail from "./ContactDetail";
import DeleteContact from "./DeleteContact";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  // const addContactHandler = (contact) => {
  //   console.log(contact);
  //   setContacts([...contacts, contact]);
  // };
  const addContactHandler = (contact) => {
    // console.log(contact);
    let temp = contacts;
    temp.unshift(contact);
    setContacts([...temp]);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(temp));
  };

  const removeContactHandler = (email) => {
    const newContactList = contacts.filter((contact) => {
      return contact.email !== email;
    });
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newContactList));
    setContacts(newContactList);
  };

  useEffect(() => {
    // console.log("1 " + contacts.length);
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
    <div className="h-full min-h-screen">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ContactList
                contacts={contacts}
                // getContactEmail={removeContactHandler}
              />
            }
          />
          <Route
            path="/add"
            element={<AddContacts addContactHandler={addContactHandler} />}
          />
          <Route path="/contact/:email" element={<ContactDetail />} />
          <Route
            path="/delete/:email"
            element={<DeleteContact getContactEmail={removeContactHandler} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
