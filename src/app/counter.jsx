'use client';
import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p> Current Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Add Sale</button> 
            <br></br>
            <button onClick={() => setCount(count - 1)}>Decrease Sale</button>
            <br></br>
            <button onClick={() => setCount(0)}>Reset Sale</button> 
            <br></br>          
        </div>
    );
}