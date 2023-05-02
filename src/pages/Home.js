import React, { useState } from 'react';
import "../App.css"
import t from './kuda.png'

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
            <div className='body4'>
                <div className='body5'>
                    <img src={t} alt="" />
                    <span>Transaction Details</span>
                </div>
                <div className='body6'>
                    <div className='body7'>Transaction Amount</div>
                    <h2 className='body8'>500.00</h2>
                </div>
                <div className='body9'>
                    <div className='body11'>
                        <div className='body10'>Beneficiary Details</div>
                        <div className='body12'>Ikpeama Malachy Obinna</div>
                    </div>
                    <div className='body13'>3457788998</div>
                </div>
                <div className='body9'>

                    <div className='body11'>
                        <div className='body10'>Sender Details</div>
                        <div className='body12'>Prosper Dike</div>

                    </div>
                    <div className='body13'>Kuda | 4647383899</div>
                </div>
                <div className='body9'>

                    <div className='body11'>
                        <div className='body10'>Paid On</div>
                        <div className='body12'>May 01, 2023</div>
                    </div>
                    <div className='body13'>8:46 AM</div>
                </div>
                <div className='body9'>

                    <div className='body11'>
                        <div className='body16'>Fees</div>
                        <div className='body15'>N0.00</div>
                    </div>
                    <div className='body13'></div>
                </div>
                <div className='body9'>
                    <h2 className='body11'>
                        <div className='body16'>Description</div>
                        <div className='body15'>pay</div>
                    </h2>
                    <div className='body13'></div>
                </div>
                <div className='body9'>
                    <div className='body11'>
                        <div className='body16'>Transaction Reference</div>
                        <div className='body15'>234567890987654345678987658765</div>
                    </div>
                    <div className='body13'></div>
                </div>
                <div className='body9'>
                    <div className='body11'>
                        <div className='body16'>Payment Type</div>
                        <div className='body15'>Outward Transfer</div>
                    </div>
                    <div className='body13'></div>
                </div>
            </div>
        </div>
    )
}

export default Home