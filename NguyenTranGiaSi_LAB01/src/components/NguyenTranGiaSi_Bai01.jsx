import { useState } from 'react';
import './css/Bai03.css'

function Bai01() {
  const [name, setName] = useState('');
  const [display, setDisplay] = useState(''); 

  return (
    <>
    <h1>Bài 1</h1>
      <input type="text" value={name} id="name" onChange={(e) => setName(e.target.value)} placeholder="Nhập tên:"/>
      <button onClick={() => setDisplay(`Hello: ${name}`)}>Click</button> { }
      <p>{display}</p>
    </>
  );
}

export default Bai01;
