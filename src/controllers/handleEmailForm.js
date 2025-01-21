
export function handleEmailForm(event = new Event) {
    event.preventDefault();
     const emailForm = event.target;
        const emailInput = emailForm[0];
        const emailvalue = emailInput.value;
        output("Your discount code is GOT20");
        const promise = makeRequest("https://myServer.com");
        promise.then(parseResponse);
    output("Your discount code is GOT20");
 }

