import React, { useState } from "react";


const [message, setMessage] = useState (
    <output>("Your discount code is GOT20")</output>    
 );
export function handleEmailForm(event) {
    event.preventDefault()
    const emailinputs = event.target;
    const emailInput = emailinputs[0];
    const emailText = emailInput.value;
    setMessage(
        <>
        {message}
        <p>You entered {emailText}</p>
        </>
       )
    
 }