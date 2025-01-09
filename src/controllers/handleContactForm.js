import { nameForm } from "../modules/nameForm.js";
import { numberForm } from "../modules/numberForm.js";
import { output } from "../utills/output.js";


export function handleContactForm (event = new Event) {
    event.preventDefault();
    output("Thank You, Your info was Submitted");
    
}