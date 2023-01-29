import {useState} from 'react';
import './Counter.scss'

const Counter = () => {
    const [value, setValue] = useState<number>(0)

    const increment = () => setValue(prev => ++prev)
    const decrement = () => setValue(prev => --prev)

    return (
        <div>
            <button onClick={decrement}>decrement</button>
            <h1>{value}</h1>
            <button onClick={increment}>increment</button>
        </div>
    );
};

export default Counter;