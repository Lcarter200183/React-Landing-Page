import React from "react";
import { output } from "../utills/output";


export function nameForm(event) {
    event.preventDefault();
    const form = event.target;
    const firstnameInput = form[0];
    const lastnameInput = form[1];
    const firstnamevalue = firstnameInput.value;
    output("Thank You, Your info was submitted.");

  }