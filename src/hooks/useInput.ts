import React, { useState } from 'react';

const useInput = (validateValue: (enteredValue: string | null) => boolean | undefined) => {
    const [enteredValue, setEnteredValue] = useState<string | null>('');
    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid;

    const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredValue(event.target.value);
    };

    const reset = () => {
        setEnteredValue('');
        console.log(enteredValue);
    };

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        reset
    };
};

export default useInput;