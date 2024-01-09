import React, {useState} from 'react'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    // passing data to parent ./App.js using props
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            // receive the old value and add an id
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        // props connected in App.js
        props.onAddExpense(expenseData);
    }

    // if button clicked, set to true
    const startEditingHandler = () => {
        setIsEditing(true);
    }

    // if button clicked, set to true
    const stoptEditingHandler = () => {
        setIsEditing(false);
    }


    return (
        <div className='new-expense'>
             
            {/* check each condition individually (&& trick)same as ternary operator */}

            {/* if isEditing false, show only button */}
            {!isEditing && <button onClick={startEditingHandler}> Add New Expense</button>} 
            
            {/* if isEditing true, show form */}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stoptEditingHandler}/>}
        </div>
    )
}

export default NewExpense
