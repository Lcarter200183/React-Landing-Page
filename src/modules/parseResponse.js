function parseResponse(resolveValue) {
  //THE RESOLVE VALUE WILL BE A FETCH OBJECT
  //THE TEXT METHOD EXTRACTS THE STRINGIFIED OBJECT
  const response = JSON.parse(resolveValue);
  const message = response.message;
  output(message);
}
