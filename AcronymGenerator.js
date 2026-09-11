import { useState } from "react";

function AcronymGenerator() {
  const [inputByUser, setInputByUser] = useState("");
  const [result, setResult] = useState("");

  function toAcronym() {
    const output = inputByUser
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0)
      .map((word) => word.charAt(0).toUpperCase())
      .join("");
    setResult(output);
  }

  function inputValueChange(event) {
    setInputByUser(event.target.value);
  }

  return (
    <div>
      <h1>Acronym Generator</h1>
      <p>
        An acronym is formed by taking the first letter of each word in a phrase
        and converting them to uppercase.
      </p>

      <div>
        <input
          data-testid="input"
          type="text"
          placeholder="Enter a phrase..."
          value={inputByUser}
          onChange={inputValueChange}
        />
        <button data-testid="generate-button" onClick={toAcronym}>
          Generate
        </button>
        <p data-testid="result">Result : {result}</p>
      </div>
    </div>
  );
}

export default AcronymGenerator;
