import './App.css';
import React, { Component, useEffect, useState } from "react";
import contactsList from './contacts.js';
import useContacts from './useContacts';

// const loadContracts = () => new Promise(resolve => setTimeout(() => resolve(contactsList), 2000));

function App() {

  const {
    inputValue,
    setInputValue,
    contacts
  } = useContacts(contactsList);

  // useEffect(() => {
    //     loadContracts().then((contacts) => setContacts(contacts));
    // }, []);


  return (
    <div className="App">
      <form>
        <input
          type="text"
          value={inputValue}
          placeholder="search for contacts"
          onChange={(e) => setInputValue(e.target.value.trim())}
        />
      </form>
      <ul>
        {!contacts.length ?
          <div>Loading ...</div> :
          contacts.map(({ firstName, lastName }) =>
            <li>{`${firstName} ${lastName}`}</li>)
        }
      </ul>
    </div>
  );
}

export default React.memo(App);