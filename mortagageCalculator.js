import React, { useState } from "react";
import "./styles.css";

function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setinterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");

  const calculatePayment = () => {
    const principal = Number(loanAmount);
    const rate = Number(interestRate);
    const term = Number(loanTerm);

    if (principal <= 0 || rate <= 0 || term <= 0) {
      setMonthlyPayment("Invalid input");
      return;
    }

    const monthlyRate = rate / 100 / 12;
    const numpayments = term * 12;

    const monthly =
      (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numpayments));

    setMonthlyPayment(monthly.toFixed(2));
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      {/* Implement Mortgage Calculator logic here */}
      <h2>Mortgage Calculator</h2>
      <div>
        <label htmlFor="loanAmount">Loan Amount (INR):</label>
        <input
          type="number"
          id="loanAmount"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="interestRate">Annual Interest Rate (%):</label>
        <input
          type="number"
          id="interestRate"
          value={interestRate}
          onChange={(e) => setinterestRate(e.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="loanTerm">Loan Term (Years):</label>
        <input
          type="number"
          id="loanTerm"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
        ></input>
      </div>
      <button onClick={calculatePayment} style={{ marginTop: "10px" }}>
        {" "}
        Calculate
      </button>
      {monthlyPayment !== null && (
        <div style={{ marginTop: "10px" }} aria-label="result">
          Monthly Payment: {monthlyPayment}
        </div>
      )}
    </div>
  );
}

export default MortgageCalculator;
