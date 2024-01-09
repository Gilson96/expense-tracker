import React, { useState } from 'react'
import Card from './Card'
import ExpenseFilter from './ExpenseFilter'
import ExpenseItem from './ExpenseItem'
import ExpensesChart from './ExpensesChart'
import ExpensesList from './ExpensesList'

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    // get year selected in ./ExepenseFilter.js
    const filterChangerHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    // filter expenses by year, return a new array
    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })


    return (
        <>

            <Card className='expenses'>
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangerHandler} />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList expense={filteredExpenses} />
            </Card>
        </>
    )
}

export default Expenses