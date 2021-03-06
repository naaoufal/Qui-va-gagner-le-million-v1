import React, { useEffect, useState } from "react"

function Round3 (){

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
                localStorage.setItem('idQuest', data[2]._id)
                localStorage.setItem('que2', data[2].quest)
                setState(data)
                setAns(data[2].answers)

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
                        window.location.href = "/Winner"
                    } else {
                        console.log(false)
                    }
                }
            })
        })
    }

    function clearAll() {
        localStorage.clear()
        window.location.href = "/LoginUser"
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
                        window.location.href = "/Winner"
                    }
                })
            }
        })
    }, [])



    return(
        <div className="container"><br />
            <div className="row">
                <div className="col-md">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <h3>The Round is Started & The Group ID is : {code || codeSec}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md">
                    <center>
                        <div className="panel panel-success">
                            <div className="panel-heading">
                                <h3>The Question is : {localStorage.getItem('que2')}</h3>
                            </div>
                            <div className="panel-body" id="di">
                                {randAnswers.map(i => {
                                    //console.log(i);
                                    return <button data-id={i} id="sub" className="btn btn-info" >{i}</button>
                                })}
                            </div>
                        </div>
                    </center>
                </div>
            </div>
            <center><button onClick={clearAll} className="btn btn-danger btn-lg">Exit</button></center>
        </div>
    )
}

export default Round3