import React, { useState } from 'react'
import Button from './Button'
// import Button from './Button'

const Calculator = () => {

    const [input, setInput] = useState("")
    const [result, setResult] = useState("")

    // function to handle all inputs from user
    const handleInput = (value) => {
        setInput((prev)=>prev + value)
    }

    const calculateResult = () => {
        try{
            setResult(eval(input))
        }catch{
            setResult("ERR")
        }
    }

    // clear input
    const clearInput = () => {
        setInput("")
        setResult("")
    }

    const deleteLast = () => {
        setInput(input.slice(0,-1))
    }
  return (
    <>

    {/* <Button /> */}
    <div className="calculator">
        <div className="input">
            <h3>Input</h3>
            <input type="text" placeholder='0' value={input} readOnly/>
            <h3>Result</h3>
            <input type="text" placeholder='0' value={result}readOnly/>
        </div>
        <br />

        <div className="buttons">

            {/* <button onClick={()=>{clearInput()}}>AC</button> */}
            <Button handleInput = {clearInput} value={"AC"}/>
            <Button handleInput = {handleInput} value={"-"}/>
            <Button handleInput = {handleInput} value={"+"}/>
            <Button handleInput = {deleteLast} value={"DEL"}/>

            <Button handleInput = {handleInput} value={"7"}/>
            <Button handleInput = {handleInput} value={"8"}/>
            <Button handleInput = {handleInput} value={"9"}/>
            <Button handleInput = {handleInput} value={"/"}/>

            <Button handleInput = {handleInput} value={"4"}/>
            <Button handleInput = {handleInput} value={"5"}/>
            <Button handleInput = {handleInput} value={"6"}/>
            <Button handleInput = {handleInput} value={"*"}/>

            <Button handleInput = {handleInput} value={"1"}/>
            <Button handleInput = {handleInput} value={"2"}/>
            <Button handleInput = {handleInput} value={"3"}/>
            <Button handleInput = {handleInput} value={"."}/>

            <Button handleInput = {handleInput} value={"0"} style={{gridColumn: "span 1"}}/>
            <Button handleInput = {calculateResult} value={"="} style={{gridColumn: "span 3"}}/>

        </div>
    </div>
    </>
  )
}

export default Calculator