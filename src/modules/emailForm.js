import { output } from "../utills/output"; 

export function emailForm(event) {
event.preventDefault();
const emailForm = event.targert;
const emailInput = emailForm[0];
const emailValue = emailInput.value;
output("hank You, Your info was submitted.");
}