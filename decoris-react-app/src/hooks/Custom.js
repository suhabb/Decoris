import { useState } from 'react';


export default function useCustomCounter() {

    const [count, setCount] = useState(100);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    }

    return {
        count,
        handleIncrement,
        handleDecrement
    };
}