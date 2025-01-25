import React from "react";
import { output } from "../utills/output";

export function numberForm(event) {
    event.preventDefault();
    const numberForm = event.target;
    const numberInput = numberForm[0];
    const numberValue = numberInput.value;
    output("Thank You. Your info was submitted.");
  } 