import { useState } from "react";

/*Below commented code is to show how we generally handle the 
 states for multiple buttons. However in this component I have used
 more optimized method for handling the multiple states through 
 single object.*/

export default function UserInput({ initialInput, updateInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={initialInput.initialInvestment}
            onChange={(event) => {
              updateInput("initialInvestment", event.target.value);
            }}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={initialInput.annualInvestment}
            onChange={(event) => {
              updateInput("annualInvestment", event.target.value);
            }}
          />
        </p>
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={initialInput.expectedReturn}
            onChange={(event) => {
              updateInput("expectedReturn", event.target.value);
            }}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={initialInput.duration}
            onChange={(event) => {
              updateInput("duration", event.target.value);
            }}
          />
        </p>
      </div>
    </section>
  );

  // const [initialInvestment, setInitialInvestment] = useState("");
  // const [annualInvestment, setAnnualInvestment] = useState("");
  // const [expectedReturn, setExpectedReturn] = useState("");
  // const [duration, setDuration] = useState("");
  // function handleInitialInvestment(event) {
  //   setInitialInvestment(event.target.value);
  // }
  // function handleAnnualInvestment(event) {
  //   setAnnualInvestment(event.target.value);
  // }
  // function handleExpectedReturn(event) {
  //   setExpectedReturn(event.target.value);
  // }
  // function handleDuration(event) {
  //   setDuration(event.target.value);
  // }
}
