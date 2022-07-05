import { useState } from 'react';

const Person = ({ name, age, handleClick }) => {
    const [due, setDue] = useState(false); 
    return (
        <div>
        {due ? (
            <h2 style={{ color: 'red' }}>
            Hello! My name is {name} and I am {age}
            </h2> 
            ):( 
            <h2>
            Hello! My name is {name} and I am {age}
            </h2>
            )}
            <button onClick={handleClick}>Remove</button>
            <button onClick={() => setDue(true)}>Payment Due</button>
        </div>
    )
}

export default Person