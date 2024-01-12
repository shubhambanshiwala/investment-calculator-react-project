import Header from "./components/Header";
import UserInput from "./components/UserInput";
import { useState } from "react";
import Result from "./components/Result";

export default function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 2000,
    expectedReturn: 100,
    duration: 5,
  });
  function handleUserInput(userIdentifier, inputValue) {
    setUserInput((currentInput) => {
      const updatedInput = {
        ...currentInput,
        [userIdentifier]: +inputValue,
      };
      return updatedInput;
    });
  }
  return (
    <>
      <Header />
      <UserInput initialInput={userInput} updateInput={handleUserInput} />
      <Result userValue={userInput} />
    </>
  );
}
