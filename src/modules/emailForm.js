import { output } from "../utills/output.js";
import { React } from "react.js"

export function emailForm(event) {
event.preventDefault();
const emailForm = event.targert;
const emailInput = emailForm[0];
const emailValue = emailInput.value;
output("hank You, Your info was submitted.");
}