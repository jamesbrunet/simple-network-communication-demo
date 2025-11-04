import { useState } from 'react';

export default function CounterButton() {
    const [count, setCount] = useState(0)

    return (
        <button onClick={() => getRandomNumber(setCount)}>
            Random number: {count}
        </button>
    )
}

async function getRandomNumber(setCount) {
    const res = await fetch('https://aisenseapi.com/services/v1/random_number');
    const myJson = await res.json()
    setCount(myJson.random_number)
}