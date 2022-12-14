import { useEffect, useState } from "react";
import * as React from 'react';
import AppBar from "./components/AppBar";
import TransactionForm from "./components/TransactionForm";

const InitialForm = {
  amount: 0,
  description: "",
  date: "",
};

function App() {
  const [form, setForm] = useState(InitialForm);

  const [transactions, settransactions] = useState([]);

  useEffect(() => {
    fetchTransctions();
  }, []);

  async function fetchTransctions() {
    const res = await fetch("http://localhost:4000/transaction");
    const { data } = await res.json();
    settransactions(data);
  }

  function handleInput(e) {
    console.log(e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
    console.log("Working...");
    const res = await fetch("http://localhost:4000/transaction", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json",
      },
    });
    if (res.ok) {
      
      setForm(InitialForm());
      fetchTransctions();
    }
    // const data = await res.json();
    // console.log(data);
  }

  return (
    <div>
    <AppBar/>
    <TransactionForm/>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleInput}
          placeholder="Enter transaction amount"
        />
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleInput}
          placeholder="Enter transaction details"
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleInput}
        />
        <button type="submit">Submit</button>
      </form>

      <br />

      <section>
        <table>
          <thead>
            <th>Amount</th>
            <th>Description</th>
            <th>Date</th>
          </thead>

          <tbody>
            {transactions.map((trx) => (
              <tr key={trx._id}>
                <td>{trx.amount}</td>
                <td>{trx.description}</td>
                <td>{trx.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default App;
