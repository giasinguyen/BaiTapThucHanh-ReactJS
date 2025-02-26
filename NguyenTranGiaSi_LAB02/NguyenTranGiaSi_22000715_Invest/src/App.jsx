import { useState } from 'react'
import './App.css'

function App() {
  const [invest, setInvest] = useState(0)
  const [rate, setRate] = useState(0)
  const [goal, setGoal] = useState(0)
  const [data, setData] = useState([])

  function handleChangeInvest(e) {
    setInvest(e.target.value)
  }

  function handleChangeRate(e) {
    setRate(e.target.value)
  }

  function handleChangeGoal(e) {
    setGoal(e.target.value)
  }

  function calculate() {
    let year = new Date().getFullYear() + 1
    let money = parseFloat(invest)
    let interestRate = parseFloat(rate) / 100
    let target = parseFloat(goal)
    let results = []

    if (isNaN(money) || isNaN(interestRate) || isNaN(target)) {
      return
    }

    while (money < target) {
      let endYearMoney = Math.round(money * (1 + interestRate))
      results.push({
        year,
        money,
        rate,
        endYear: endYearMoney
      })
      money = endYearMoney
      year++
    }

    setData(results)
  }

  return (
    <>
      <h1>Calculator Investment</h1>
      <div className="line">
        <h3>Input Your Invest Money: </h3>
        <input type="number" onChange={handleChangeInvest} />
      </div>
      <div className="line">
        <h3>Input Rate: </h3>
        <input type="number" onChange={handleChangeRate} />
      </div>
      <div className="line">
        <h3>Input Your Goal: </h3>
        <input type="number" onChange={handleChangeGoal} />
      </div>
      <br />
      <button onClick={calculate}>Calculate</button>
      <div className="my-table">
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Money</th>
              <th>Rate</th>
              <th>End Year</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.year}</td>
                <td>{row.money}</td>
                <td>{row.rate}%</td>
                <td
                  style={{
                    backgroundColor: row.endYear >= goal ? 'blue' : 'white',
                    color: row.endYear >= goal ? 'white' : 'black'
                  }}
                >
                  {row.endYear}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
