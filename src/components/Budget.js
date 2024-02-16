import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,currency, setNewBudget} = useContext(AppContext);
    const [newBudget, setBudget] = useState(budget);

    useEffect(() => {
        setNewBudget(newBudget); // Update newBudget in context when it changes
    }, [newBudget, setNewBudget]);


    const handleBudgetChange = (event) => {
        setBudget(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{newBudget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
