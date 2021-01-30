import React, { Component, useEffect, useState } from "react";

export default function (contactsList) {
    const [inputValue, setInputValue] = useState("");
    const [contacts, setContacts] = useState(contactsList);

    useEffect(() => {
        if (contacts.length) {
            setContacts(
                contactsList.filter(
                    ({ firstName, lastName }) =>
                        firstName.toLocaleLowerCase().includes(inputValue) ||
                        lastName.toLocaleLowerCase().includes(inputValue)
                )
            );
        }
    }, [inputValue]);

    return {
        inputValue,
        setInputValue,
        contacts
    }


}


