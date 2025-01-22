function parseResponse(resolveValue) {
    debugger;
    //THE RESOLVE VALUE WILL BE A FETCH OBJECT
    //THE TEXT METHOD EXTRACTS THE STRINGIFIED OBJECT
    const response = JSON.parse(resolveValue);
    const message = response.message;
    output(message);
}

function getServerResponse(resolve) {
    debugger;
    setTimeout(activateResolve, 5000);

    function activateResolve() {
        const response = {
            message: "Successfully processed.",
        };
        const resolveValue = JSON.stringify(response);
        resolve(resolveValue);
    }

}


function makeRequest() {
    debugger;
    const promise = new Promise(getServerResponse);
    return promise;
}