import React, {useState} from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const inc = () => setCounter(c => c+1);
    const dec = () => setCounter(c => c-1);

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={dec}>Decr</button>
            <button onClick={inc}>Inc</button>
        </div>
    );
};

export default Counter;
