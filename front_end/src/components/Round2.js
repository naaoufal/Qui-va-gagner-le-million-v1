import React, { useEffect, useState } from "react"

function Round2 (){

    const [state2, setState] = useState([{
        quest : ""
    }])
    const [idQues, setId] = useState([])
    const [randAnswers1, setAns] = useState([])
    const id = localStorage.getItem('ID')
    const code = localStorage.getItem('groupCode')
    const codeSec = localStorage.getItem('code')

    

        function Test1() {
            fetch("http://localhost:3001/api/questions/allPublic").then(res => {
                return res.json()
            }).then(data => {
                //console.log(data)
                localStorage.setItem('idQuest2', data[1]._id)
                localStorage.setItem('que', data[1].quest)
                setState(data[1].quest)
                setAns(data[1].answers)

            })
            
        }

    const d = localStorage.getItem('idQuest2')
    const c = localStorage.getItem('que')
    console.log(c, d)
    //console.log(d)


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
                        window.location.href = "/Round3"
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
        console.log(state2)
        //var i = localStorage.getItem('all')
        //console.log(i)
        const test = document.querySelector('#di')
        test.addEventListener('click', (e) => {
            e.preventDefault()

            let pressBtn = e.target.id = 'sub'
            const val = e.target.dataset.id

            if(pressBtn){
                IfExist()
                Test1()
                
                fetch("http://localhost:3001/api/questionTokens/addToken", {
                    method : 'POST',
                    headers : {
                        'Content-Type' : 'application/json'
                    },
                    body : JSON.stringify({
                        idquestion : localStorage.getItem('idQuest2'),
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
                        idquestion : localStorage.getItem('idQuest2')
                    })
                }).then(res => {
                    return res.json()
                }).then(data => {
                    console.log(data)
                    if(data){
                        window.location.href = "/Round3"
                    }
                })
            }
        })
    }, [])



    return(
        <div className="container"><br/>
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
                                <h3>The Question is : {c}</h3>
                            </div>
                            <div className="panel-body" id="di">
                                {randAnswers1.map(i => {
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

export default Round2