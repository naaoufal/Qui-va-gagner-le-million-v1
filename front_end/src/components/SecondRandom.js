import e from "cors"
import { set } from "mongoose"
import React, { useEffect, useState } from "react"
import Round2 from "./Round2"

function SecondRandom () {

    const [state, setState] = useState([])
    const [randAnswers, setAns] = useState([])
    const id = localStorage.getItem('ID')
    const secId = localStorage.getItem('secID')
    
    //const arr1 = []
    //useEffect(() => {

    // bt.addEventListener('click', function () {
    //     const val = document.querySelector('#sub').value
    //     console.log(val)
    // })


    
    
        // function subAnswer () {
        //     const bt = document.querySelector('#cli').value
        //     console.log(bt)
            
        // }

        //setInterval( 
        function Test1() {
            fetch("http://localhost:3001/api/questions/allPublic").then(res => {
                return res.json()
            }).then(data => {
                //console.log(data)
                //setState(data[0])
               //arr1.push(data[0])
                setState(data)
                setAns(data[0].answers)
                
                
                
                //localStorage.setItem('first', arr1)
                //window.location.reload(true)
                //arr.push(data)
                //console.log(arr)
            })
            
        }
        //console.log(arr1)
        //Test1()
        
        //, 9000)
    //})



        // console.log(state[0]._id)
        //console.log(randAnswers)
        useEffect(() => {
            //console.log(id)
            const test = document.querySelector('#di')
            test.addEventListener('click', (e) => {
                e.preventDefault()

                let pressBtn = e.target.id = 'sub'
                const val = e.target.dataset.id
                
                if(pressBtn){
                    //console.log(val, id)
                    fetch("http://localhost:3001/api/questionTokens/addToken", {
                        method : 'POST',
                        headers : {
                            'Content-Type' : 'application/json'
                        },
                        body : JSON.stringify({
                            idquestion : state[0]._id,
                            participantanswer : val,
                            idparticipant : id
                        })
                    }).then(res => {
                        return res.json()
                    }).then(data => {
                        console.log(data.message)
                        // if(data.message === "Answer Correct !!!" || data.message === "Answer Is not Correct" || !data){
                        //     setTimeout(window.location.href = "/Round2", 3000)
                        // }
                    })
                }
            })
            Test1()
        }, [])


    // const dt = localStorage.getItem('first')
    // console.log(dt)

    return (
        <div>
            <p>The Question is : {state[0].quest}</p>
            <div className="col-md-5" id="di">
                {randAnswers.map(i => {
                    //console.log(i);
                    return <button data-id={i} id="sub" className="btn btn-info" >{i}</button>
                })}
            </div>
        </div>
    )
}

export default SecondRandom