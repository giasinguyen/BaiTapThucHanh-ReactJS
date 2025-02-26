import { useState } from 'react';
import './css/Bai03.css'

function Bai02() {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [result, setResult] = useState('');

    const handleSum = () => {
        const sum = parseFloat(number1) + parseFloat(number2);
        setResult(sum);
    };

    return (
        <>
            <h1>Bài 2</h1>
            <input type="text"value={number1} id="number1"onChange={(e) => setNumber1(e.target.value)}placeholder="Nhập số thứ nhất:"/> <br /> <br />
            <input type="text" value={number2} id="number2" onChange={(e) => setNumber2(e.target.value)} placeholder="Nhập số thứ hai:" /> <br /> <br />
            <button onClick={handleSum}>Click</button> <br /> <br />
            <span>{result}</span>
        </> 
    );
}

export default Bai02;
