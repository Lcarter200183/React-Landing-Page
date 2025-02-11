import React from "react";
import { output } from "../utills/output";

export function handleEmailForm(event = new Event()) {
  event.preventDefault();
  console.log("Your Email was Submitted. Your discount code is GOT20");
  output("Your Email was Submitted. Your discount Code is GOT20", "outputTag2");
}
