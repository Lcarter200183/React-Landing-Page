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
