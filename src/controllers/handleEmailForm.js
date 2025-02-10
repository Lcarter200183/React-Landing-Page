import React from "react";
import { output } from "../utills/output";

export function handleEmailForm(event = new Event()) {
  event.preventDefault();
  console.log("Your discount code is GOT20");
  output("Your discount Code is GOT20");
}
