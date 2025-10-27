'use client';
import { useState } from 'react';

export default function Counter({ initialCount = 0, initialStep = 5 }) {
    const [count, setCount] = useState(initialCount);
    const [step, setStep] = useState(initialStep)

    return (
        <div>
            <p aria-live="polite"> Current Count: {count}</p>
            <button id="add" onClick={() => setCount(count + step)}>Add Sale</button> 
            <br></br>
            <button id="sub" onClick={() => setCount(count - step)} disabled={count - step < 0}>Decrease Sale</button>
            <br></br>
            <button id="reset" onClick={() => setCount(0)}>Reset Sale</button> 
            <br></br>
            <input id="step" type="number" value={step} onChange={(s) => setStep(Number(s.target.value))} data-np-intersection-state="observed" ></input>          
        </div>
    );
}