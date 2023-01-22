import { useEffect, useState } from "react";
import * as React from "react";
import AppBar from "./components/AppBar";
import TransactionForm from "./components/TransactionForm";
import TransactionsList from "./components/TransactionList";
import Container from "@mui/system/Container";
import { Outlet } from "react-router-dom";

function App() {
  const [transactions, settransactions] = useState([]);
  const [editTransaction, setEditTransaction] = useState([]);

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

      <Outlet />


      <Container>
        <TransactionForm fetchTransctions={fetchTransctions} editTransaction={editTransaction}/>
        <TransactionsList
          transactions={transactions}
          fetchTransctions={fetchTransctions}
          setEditTransaction={setEditTransaction}
        />
      </Container>
      <br />
    </div>
  );
}

export default App;
