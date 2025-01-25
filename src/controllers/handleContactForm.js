import React from "react";
import { output } from "../utills/output";


export function handleContactForm (event = new Event()) {
    event.preventDefault();
      console.log("Thank You, Your info was Submitted!")
      output("Thank You, Your info was Submitted!")
    }
    
