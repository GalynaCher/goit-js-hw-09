
'use strict';

const form      = document.querySelector(".feedback-form"); 

let formData = {email:'', message:''};

const localStorageKey = "feedback-form-state";

if (localStorage.getItem(localStorageKey) != undefined) {
    
    const savedFormData = JSON.parse(localStorage.getItem(localStorageKey));
    form.elements.email.value = savedFormData.email;
    form.elements.message.value = savedFormData.message;
    
}

form.addEventListener("input", e => {
        
    if (e.target.matches('input, textarea')) {
        formData = {
            email: form.elements.email.value.trim(),
            message: form.elements.message.value.trim()
        };
        localStorage.setItem(localStorageKey, JSON.stringify(formData));
    }   
});

form.addEventListener("submit", e => { 

    console.log(localStorageKey, JSON.stringify(formData));
    
    e.preventDefault();                                         // prevent page reload on submit

    localStorage.removeItem(localStorageKey);
                              
    form.reset();                                               // clean the form    
});