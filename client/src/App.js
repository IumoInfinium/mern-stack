import { useEffect, useState } from "react";
import * as React from "react";
import AppBar from "./components/AppBar";
import TransactionForm from "./components/TransactionForm";

function App() {
  const [transactions, settransactions] = useState([]);

  useEffect(() => {
    fetchTransctions();
  }, []);

  async function fetchTransctions() {
    const res = await fetch("http://localhost:4000/transaction");
    const { data } = await res.json();
    settransactions(data);
  }

  return (
    <div>
      <AppBar />
      <TransactionForm fetchTransctions={fetchTransctions} />

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
