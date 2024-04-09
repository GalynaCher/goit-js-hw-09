
'use strict';

const form = document.querySelector(".feedback-form"); 

const input     = form.elements.email;                          // Email input element
const textarea  = form.elements.message;                        // Message textarea element

const localStorageKey_email = "EmailValue";                     //  localStorageKey for Email
const localStorageKey_msg   = "MessageValue";                   //  localStorageKey for Message

input.value     = localStorage.getItem(localStorageKey_email);  // restore Email value from the local storage
textarea.value  = localStorage.getItem(localStorageKey_msg);    // restore Message value from the local storage

form.addEventListener("input", e => {
    if (e.target.nodeName === "INPUT") {
        localStorage.setItem(localStorageKey_email, e.target.value);    // add Email value to the local storage
    } else if (e.target.nodeName === "TEXTAREA") { 
        localStorage.setItem(localStorageKey_msg, e.target.value);      // add Message value to the local storage
    }
});

form.addEventListener("submit", e => { 
    e.preventDefault();                                         // prevent page reload on submit

    console.log(e.target.elements.email.value);
    console.log(e.target.elements.message.value);

    localStorage.removeItem(localStorageKey_email);             // clean the local storage
    localStorage.removeItem(localStorageKey_msg);

    form.reset();                                               // clean the form
});
