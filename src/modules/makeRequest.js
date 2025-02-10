function makeRequest() {
  debugger;
  const promise = new Promise(getServerResponse);
  return promise;
}
const promise = makeRequest("https://myServer.com");
promise.then(parseResponse);
