import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpensesList = (props) => {

    // If nothing on the list, return 'Found no expenses'
    if (props.expense.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
    }

    return (
        <ul className='expenses-list'>
            { props.expense.map((expense =>
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </ul>
    )
}

export default ExpensesList
