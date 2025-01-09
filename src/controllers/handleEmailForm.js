import { emailForm } from "../modules/emailForm.js";
import { output } from "../utills/output.js";
import { React} from "react.js"

export function handleEmailForm(event = new Event) {
    event.preventDefault();
    console.log("Thank You, Your info was Submitted");
}