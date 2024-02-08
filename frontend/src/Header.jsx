import './Header.css';
import { useState } from 'react';

export const Header = () => {
    return (
    <div>
        <div className="wrapper-header">
            <h1 className="header">Hello, This is my Header module being displayed!</h1>
        </div>
    </div>
    );
}


export const Counting = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <ul className="count-wrapper">
                <button type='button' className='btn-add' onClick={() => setCount(count => count + 1)}>( + )</button>
                <span className='window'>{ count }</span>
                <button type='button' className='btn-subtract' onClick={() => setCount(count => count - 1)}>( - )</button>
            </ul>
        </div>
    );
}








