import React from "react";

const [message, setMessage] = useState[""];
export function handleEmailForm(event) {
  event.preventDefault();
  const emailinputs = event.target;
  const emailInput = emailinputs[0];
  const emailText = emailInput.value;
  output("Your discount code is GOT20");
  setMessage(
    <>
      {message}
      <p>You entered {emailText}</p>
    </>
  );
}
<output>outputTag2</output>;
