import React, { useState } from 'react'
import './Quiz.css'
import {QuizData} from '../../data/QuizData.js'
import Results from '../Results/Results.jsx'
import { DiseaseData } from '../../data/DiseaseData.js'

const Quiz = () => {

    let [index, setIndex] = useState(0)

    const [userAnswer, setUserAnswer] = useState([]);
    let [showResults, setShowResults] = useState(false)

    const changeQuestion = () => {
        if(index === QuizData.length-1){            
            let temp = new Set(userAnswer)
            setUserAnswer(temp)
            console.log("yay",userAnswer, temp)
            setShowResults(true)
        }
        else {
            setIndex(index+1)
        }
    }

    const checkAnswer = (e, opt) => {
        if(opt === 0){
            var ans = QuizData[index].sympton
            setUserAnswer([...userAnswer, DiseaseData[ans]])
        } 
        //console.log(userAnswer)
        changeQuestion()
    }

  return (
    <div className="container">
        <h1>PCOS Quiz</h1>
        <hr/>

        { showResults ? 
            <Results result={userAnswer}/> : 
            <>
                <h2>{QuizData[index].question}</h2>
                <ul>
                    <li onClick={(e) => checkAnswer(e,0)}>
                        {QuizData[index].options[0]}
                    </li>
                    <li onClick={(e) => checkAnswer(e,1)}>
                        {QuizData[index].options[1]}
                    </li>
                </ul>
                {/* <button id="submit-btn" className="display-none" onClick={changeQuestion}>Submit</button> */}
                <div className="index">{index} of {QuizData.length} questions</div>
            </>
        }
        
    </div>
  )
}

export default Quiz