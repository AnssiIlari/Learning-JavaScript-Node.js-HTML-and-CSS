import { useState } from 'react'
import './App.css'

function App() {
  const [calculation, setCalculation] = useState({ firstnumber: 0, secondnumber: 0 })

  const inputChanged = (event) => {
    setCalculation({ ...calculation, [event.target.name]: event.target.value })
  }

  const sum = () => {
    setCalculation({ ...calculation, result: Number(calculation.firstnumber) + Number(calculation.secondnumber) })
  }

  const substraction = () => {
    setCalculation({ ...calculation, result: Number(calculation.firstnumber) - Number(calculation.secondnumber) })
  }


  return (
    <>

      <p>Result = {calculation.result}</p>
      <input placeholder='Number 1' name='firstnumber' value={calculation.firstnumber} onChange={inputChanged} />
      <input placeholder='Number 2' name='secondnumber' value={calculation.secondnumber} onChange={inputChanged} />
      <button onClick={sum}>+</button>
      <button onClick={substraction}>-</button>


    </>
  )
}

export default App
