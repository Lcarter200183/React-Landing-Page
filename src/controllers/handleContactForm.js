import React from "react";

export function handleContactForm (event = new Event()) {
    event.preventDefault();
    return (
      console.log("Thank You, Your info was Submitted!")
    ); 
}