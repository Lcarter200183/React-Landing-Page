function parseResponse(resolveValue) {
    debugger;
    const response = JSON.parse(resolveValue);
    const message = response.message;
    output(message);
}

function getServerResponse(resolve) {
    debugger;
    setTimeout(activateResolve, 5000);

    function activateResolve() {
        const response = {
            message: ".",
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

