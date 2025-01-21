export function handleContactForm (event = new Event) {
    event.preventDefault();
    debugger;
      event.preventDefault();
        const emailForm = event.target;
        const emailInput = emailForm[0];
        const emailvalue = emailInput.value;
        const promise = makeRequest("https://myServer.com");
        promise.then(parseResponse);
     output("Thank You, Your info was Submitted");
    
}