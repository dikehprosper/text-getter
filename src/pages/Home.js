import React, { useEffect, useState } from 'react';
import "../App.css"
import logo from './images/kuda.png';
import logo2 from './images/kuda2.png';
import logo3 from './images/naira3.png';
import logo4 from './images/naira5.png';
import namesData from './names.json';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

const currentDate = new Date();
const year = currentDate.getFullYear();
const options = { month: 'long', day: '2-digit', year: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('en-US', options);
const options2 = { hour: 'numeric', minute: 'numeric', hour12: true };
const formattedTime = currentDate.toLocaleTimeString('en-US', options2);




const Home = () => {
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [inputValue3, setInputValue3] = useState('');
    const [inputValue4, setInputValue4] = useState('');
    const [inputValue5, setInputValue5] = useState('');
    const [inputValue6, setInputValue6] = useState('');
    const [inputValue7, setInputValue7] = useState('');
    const [inputValue8, setInputValue8] = useState('');
    const [numbers, setNumbers] = useState();
    const [numbers2, setNumbers2] = useState();
    const [name, setName] = useState('');
    const [name1, setName1] = useState('');
    const [name2, setName2] = useState('');

    function handleChange1(event) {
        setInputValue1(event.target.value);
    }

    function handleChange2(event) {
        setInputValue2(event.target.value);
    }
    function handleChange3(event) {
        setInputValue3(event.target.value);
    }
    function handleChange4(event) {
        setInputValue4(event.target.value);
    }
    function handleChange5(event) {
        setInputValue5(event.target.value);
    }
    function handleChange6(event) {
        setInputValue6(event.target.value);
    }
    function handleChange7(event) {
        setInputValue7(event.target.value);
    }
    function handleChange8(event) {
        setInputValue8(event.target.value);
    }

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * namesData.length);
        const randomIndex1 = Math.floor(Math.random() * namesData.length);
        const randomIndex2 = Math.floor(Math.random() * namesData.length);
        const randomName = namesData[randomIndex];
        const randomName1 = namesData[randomIndex1];
        const randomName2 = namesData[randomIndex2];
        setName(randomName);
        setName1(randomName1);
        setName2(randomName2);
    }, []);

    const handleDownload = () => {
        html2canvas(document.getElementById('body4')).then((canvas) => {
            canvas.toBlob(function (blob) {
                saveAs(blob, 'container.png');
            });
        });
    };



    useEffect(() => {
        let randomNumbers = '';
        let randomNumbers2 = '';

        for (let i = 0; i < 10; i++) {
            const randomNumber = Math.floor(Math.random() * 9) + 1;
            randomNumbers += randomNumber;
        }
        for (let i = 0; i < 18; i++) {
            const randomNumber = Math.floor(Math.random() * 9) + 1;
            randomNumbers2 += randomNumber;
        }
        console.log(randomNumbers);

        setNumbers(randomNumbers); // update the state with the random numbers
        setNumbers2(randomNumbers2);
    }, []);



    return (
        <div className='body1'>

            <div className='body3'> receiver FirstName:  <input type="text" value={inputValue1} onChange={handleChange1} />
            </div>
            <div className='body3'> receiver SecondName:  <input type="text" value={inputValue2} onChange={handleChange2} />
            </div>
            <div className='body3'> receiver ThirdName:  <input type="text" value={inputValue3} onChange={handleChange3} />
            </div>
            <div className='body3'> sender FirstName:  <input type="text" value={inputValue4} onChange={handleChange4} />
            </div>
            <div className='body3'> sender SecondName:  <input type="text" value={inputValue5} onChange={handleChange5} />
            </div>
            <div className='body3'> sender ThirdName:  <input type="text" value={inputValue6} onChange={handleChange6} />
            </div>
            <div className='body3'>Amount:  <input type="text" value={inputValue7} onChange={handleChange7} />
            </div>
            <div className='body3'>charge:  <input type="text" value={inputValue8} onChange={handleChange8} />
            </div>


            <div className='body4' id="body4">
                <div className='body5'>
                    <img src={logo} alt="logo" />
                    <span>Transaction Details</span>
                </div>
                <div className='body6'>
                    <div className='body7'>Transaction Amount</div>
                    <h2 className='body8'>   <img src={logo3} alt="logo" /> {inputValue7 ? <>{inputValue7}</> : <>560,000.00</>}</h2>
                </div>
                <div className='body9'>
                    <div className='body11'>
                        <div className='body10'>Beneficiary Details</div>
                        <div className='body12'> {inputValue1 ? <>{inputValue1} {inputValue2} {inputValue3}</> : <>{name.name} {name1.name} {name2.name}</>}</div>
                    </div>
                    <div className='body13'>{numbers} </div>
                </div>
                <div className='body9'>

                    <div className='body11'>
                        <div className='body10'>Sender Details</div>
                        <div className='body12'>{inputValue4 ? <>{inputValue4} {inputValue5} {inputValue6}</> : <>Dike Prosper Chukwuemeka</>}</div>

                    </div>
                    <div className='body13'>Kuda | 2018517983</div>
                </div>
                <div className='body9'>

                    <div className='body11'>
                        <div className='body10'>Paid On</div>
                        <div className='body12'>{formattedDate}</div>
                    </div>
                    <div className='body13'>{formattedTime}</div>
                </div>
                <div className='body9'>

                    <div className='body11'>
                        <div className='body16'>Fees</div>
                        <div className='body15'> <img src={logo4} alt="logo4" />   {inputValue8 ? <>{inputValue8}</> : <>0</>}.00</div>
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
                        <div className='body15'>090267230{numbers2}983</div>
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
                <div className='body17'>
                    <div className='body18'>
                        <img src={logo2} alt="logo2" />
                        <div>Click here to download Kuda <br />and dump bank fees for good.</div>
                    </div>
                </div>
                <div className='body19'>
                    &copy; {year} Kuda Technologies Ltd (Company No. 11472232). All rights reserved. <br />
                    If you would like to find out more about which Kuda entity you receive services from, please reach <br />
                    out to us via the in-app chat in the Kuda app.<br />
                    Nigerian banking servies offered by Kuda Microfinance Bank (RC796975) with registered address <br />
                    at 151 - Herbert Macaulay Way, Yaba, Lagos, Nigeria. Kuda Microfinance Bank is licensed by the Central <br />
                    Bank of Nigeria. Deposits are insured by the Nigerian Deposit Insurance Corporation (NDIC).

                </div>
            </div>

            <div className='download' onClick={handleDownload}>download</div>
        </div>
    )
}

export default Home;