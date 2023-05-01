import React, { useState } from 'react';
import "../App.css"

const Home = () => {
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');

    function handleChange1(event) {
        setInputValue1(event.target.value);
    }

    function handleChange2(event) {
        setInputValue2(event.target.value);
    }

    return (
        <div className='body1'>
            <div className='body2'>Name:  <input type="text" value={inputValue1} onChange={handleChange1} />
            </div>
            <div className='body3'>Amount:  <input type="text" value={inputValue2} onChange={handleChange2} />
            </div>
            <div className='body4'></div>
        </div>
    )
}

export default Home