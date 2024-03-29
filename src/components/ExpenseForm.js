import React, { useState } from 'react'

const ExpenseForm = (props) => {
    // Multiple States
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // get user input value
    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
    }

    // get user input value
    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
    }

    // get user input value
    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        // store data input into a object
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        // passing data to parent ./NewExpense.js with props
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

   
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>    
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input 
                        type='text'
                        value={enteredTitle} 
                        onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input 
                        type='number'
                        value={enteredAmount}
                        min="0.01" step="0.01" 
                        onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input 
                        type='date'
                        value={enteredDate} 
                        min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
                <div className='new-expense__action'>
                    <button type='submit' onClick={props.onCancel}>Cancel</button>
                    <button type='submit'>Add expense</button>
                </div>
                
            </div>
        </form>
    )
}

export default ExpenseForm
