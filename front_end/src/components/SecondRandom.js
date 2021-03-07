import e from "cors"
import { set } from "mongoose"
import React, { useEffect, useState } from "react"
import Round2 from "./Round2"
import $, { data } from 'jquery'

function SecondRandom () {

    const [state, setState] = useState([{
        quest : ""
    }])
    const [idQues, setId] = useState([])
    const [randAnswers, setAns] = useState([])
    const id = localStorage.getItem('ID')
    const code = localStorage.getItem('groupCode')
    const codeSec = localStorage.getItem('code')


        function Test1() {
            fetch("http://localhost:3001/api/questions/allPublic").then(res => {
                return res.json()
            }).then(data => {
                //console.log(data[0]._id)
                localStorage.setItem('idQuest', data[0]._id)
                setState(data)
                setAns(data[0].answers)

            })
            
        }

    const d = localStorage.getItem('idQuest')


    function IfExist() {
        fetch("http://localhost:3001/api/rounds/all").then(res => {
            return res.json()
        }).then(data => {
            //console.log(data)
            data.map(o => {
                //console.log(o)
                if(o.idgroupmember == code || o.idgroupmember == codeSec){
                    console.log(o)
                    if(o.idquestion === d){
                        setTimeout(window.location.href = "/Round2", 3000)
                    } else {
                        console.log(false)
                    }
                }
            })
        })
    }

        useEffect(() => {
            Test1()
            //console.log(id)
            const test = document.querySelector('#di')
            test.addEventListener('click', (e) => {
                e.preventDefault()

                let pressBtn = e.target.id = 'sub'
                const val = e.target.dataset.id
                
                if(pressBtn){
                    IfExist()
                    Test1()
                    console.log(val, id, localStorage.getItem('idQuest'))
                    fetch("http://localhost:3001/api/questionTokens/addToken", {
                        method : 'POST',
                        headers : {
                            'Content-Type' : 'application/json'
                        },
                        body : JSON.stringify({
                            idquestion : localStorage.getItem('idQuest'),
                            participantanswer : val,
                            idparticipant : id
                        })
                    })

                    // push data to round after questionToken : 
                    fetch("http://localhost:3001/api/rounds/addRound", {
                        method : 'POST',
                        headers : {
                            'Content-Type' : 'application/json'
                        },
                        body : JSON.stringify({
                            idgroupmember : code || codeSec,
                            idquestion : localStorage.getItem('idQuest')
                        })
                    }).then(res => {
                        return res.json()
                    }).then(data => {
                        console.log(data)
                        if(data){
                            window.location.href = "/Round2"
                        }
                    })
                }
            })
        }, [])

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