import React, {useState} from 'react';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { 
    id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);

  // dynamic list using state
  const AddExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })
  }

  return (
    <div className="App">
      <h1 className="title">Expense Tracker</h1>
        <NewExpense onAddExpense={AddExpenseHandler}/>
        <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
