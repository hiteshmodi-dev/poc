import React, { useRef, useState, useEffect } from 'react';

export const UseRefComponent = () => {
    const [inputValue, setInputValue] = useState('');
    const previousInputValue = useRef('');

    useEffect(() => {
        previousInputValue.current.focus(); // Focus the input field on mount
    }, []); // Empty dependency array: effect runs only on mount and unmount

    useEffect(() => {
        previousInputValue.current = inputValue;
        console.log('previousInputValue', previousInputValue);
    }, [inputValue]); // Update previousInputValue when inputValue changes

    return (
        <div>
            <h1>UseRefComponent</h1>
            <input type="text" value={inputValue} ref={previousInputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <button>Submit</button>
            <h2>current value: {inputValue}</h2>
            <h2>previous value: {previousInputValue.current}</h2>
        </div>
    );
}