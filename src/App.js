import React, {useEffect, useState} from "react"
import index from "./index.css"
import Die from "./Die"
import { nanoid } from "nanoid"
import { setSelectionRange } from "@testing-library/user-event/dist/utils"




export default function App() {
    const [dice, setDice] = useState(allNewDice())
    const [rubble, setRubble] = useState(false)
    const [startTimer, setStartTimer] = useState(0)



    useEffect(()=>{
const allHeld = dice.every(die => die.isHeld)
const firstValue = dice[0].value
const allSameValue = dice.every(die => die.value === firstValue)
if(allHeld && allSameValue) {
    setRubble(true)
    console.log("you won")
}
    }, [dice])



    function generateNew() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }

    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
    
            newDice.push(generateNew())
        }
        return newDice
    }
    
function holdDice(id) {
    
    setDice(oldDice => oldDice.map(die => {
        return die.id === id ? {...die, isHeld: !die.isHeld} : die
    
    }))
}


    const diceElements = dice.map(die => (<Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={()=>holdDice(die.id)} />))
    
function rollDice() {
    if(!rubble) {
  setDice(oldDice => oldDice.map(die => {
      return die.isHeld ? die : generateNew()

  }))
  } else {
      setRubble(false)
      setDice(allNewDice())
  }
}

    return (
        <main>
         
            <div className="heading">

                <div className="title">
                <h1>Rubble</h1>
            
                </div>
  {    rubble ? 
  <p className="win">You Win!!! 🎉 🎊 🎉</p>

  : <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>}
            
            </div>
            
            <div className="container">
                {diceElements}
            </div>
            


            <button className="btn" 
            onClick={rollDice}
            >
                {rubble ? "New Game" : "Roll"}
            </button>
            
        </main>
    )
}