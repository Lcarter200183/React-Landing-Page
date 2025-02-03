export function display(message) {
    document.write(message);
}

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
    const promise = response.text();
    promise.then(getJsonString);

    function activateResolve() {
        const response = {
            message: "",
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
const promise = makeRequest("https://myServer.com");
    promise.then(parseResponse);
