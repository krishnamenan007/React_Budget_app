import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyComponent = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [selectedCurrency, setSelectedCurrency] = useState(currency);

    const handleCurrencyChange = (event) => {
        setSelectedCurrency(event.target.value);
        dispatch({ type: 'CHG_CURRENCY', payload: event.target.value });
    };

    const currencyOptions = [
        { name: 'Dollar', symbol: '$' },
        { name: 'Pound', symbol: '€' },
        { name: 'Euro', symbol: '£' },
        { name: 'Ruppee', symbol: '¥' },
        // Add more currencies as needed
    ];

    return (
        <div className='alert alert-info'>
            <span>Currency: {currency}</span>
            <select value={selectedCurrency} onChange={handleCurrencyChange}>
                {currencyOptions.map((option) => (
                    <option key={option.symbol} value={option.symbol}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CurrencyComponent;
