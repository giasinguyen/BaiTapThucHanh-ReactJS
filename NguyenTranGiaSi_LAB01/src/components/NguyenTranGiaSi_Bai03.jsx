import { useState } from "react";
import './css/Bai03.css'

function Bai03() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [result, setResult] = useState(0);
    const [operator, setOperator] = useState('');

    function handleChangeNumA(e) {
        setA(parseInt(e.target.value) || 0);
    }

    function handleChangeNumB(e) {
        setB(parseInt(e.target.value) || 0);
    }

    function handleChangeOperator(e) {
        setOperator(e.target.value);
    }
    function handleClick() {
        if (operator === "+") {
            setResult(a + b);
        } else if (operator === "-") {
            setResult(a - b);
        } else if (operator === "*") {
            setResult(a * b);
        } else if (operator === "/") {
            setResult(b !== 0 ? a / b : 'Lỗi: B phải khác 0!');
        }
    }

    return (
        <>
            <div>
                <h1>My Calculator</h1>
                <input type="text" onChange={handleChangeNumA} placeholder="Nhập số thứ nhất:" /> <br /><br />
                <input type="text" onChange={handleChangeNumB} placeholder="Nhập số thứ hai:" /> <br /><br />

                <input value="+" onChange={handleChangeOperator} type="radio" name="group" /> <span>Cộng</span> 
                <input value="-" onChange={handleChangeOperator} type="radio" name="group" /> <span>Trừ</span>   
                <input value="*" onChange={handleChangeOperator} type="radio" name="group" /> <span>Nhân</span> 
                <input value="/" onChange={handleChangeOperator} type="radio" name="group" /> <span>Chia</span> 
                <br />

                <button onClick={handleClick}>Click</button>
                <br />
                <span>Kết quả: {result} </span>
            </div>
        </>
    );
}

export default Bai03;