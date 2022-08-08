import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [status, setStatus] = useState();

  const [value, setValue] = useState();

  const [amount, setAmount] = useState(0);

  const deposit = () => {
    if (value > 0) setAmount(Number(value) + amount);
    else {
      alert("Enter a valid amount");
    }
  };

  const withdraw = () => {
    if (value < amount) setAmount(amount - Number(value));
    else {
      alert("Your Account balance is insufficient");
    }
  };

  return (
    <>
      <form>
        <h1>Your Account balance is ${amount}</h1>

        <select
          onChange={(event) => {
            setStatus(event.target.value);
          }}
          className="select"
        >
          <option>null</option>

          <option value="deposit"> Deposit</option>

          <option value="withdraw"> Withdraw</option>
        </select>
        <br />
        <br />

        {status === "deposit" ? (
          <label className="label">
            {status}:{}
            <input type="number" onChange={(e) => setValue(e.target.value)} />
            <input
              type="button"
              value="submit"
              disabled={!value}
              onClick={deposit}
            />
          </label>
        ) : null}

        {status === "withdraw" ? (
          <label className="label">
            {status}:
            <input type="number" onChange={(e) => setValue(e.target.value)} />
            <input
              type="button"
              value="submit"
              disabled={!value}
              onClick={withdraw}
            />
          </label>
        ) : null}
      </form>
    </>
  );
}
