import { useEffect } from "react"


function QuestionToken () {

    const code = localStorage.getItem('groupCode')
    const codeSec = localStorage.getItem('code')
    const id = localStorage.getItem('ID')
    const secId = localStorage.getItem('secID')
    var sec = localStorage.getItem('data')
    var arr = []

    console.log(id || secId)
    //console.log(sec)

    useEffect(() => {

    })

    //setTimeout(CalculRound(), 4000)



    // var a = localStorage.getItem('answers')
    // var data = a.split(",").map(String)
    // console.log(data)

    return (
        <div>
            <p>test field {}</p>
            <div className="col-md-5">
                <input className="btn btn-info" value="" />
            </div>
            <br/>
            <div className="col-md-5">
                <input className="btn btn-info" value="" />
            </div>
            <br />
            <div className="col-md-5">
                <input className="btn btn-info" value="" />
            </div>
            <br />
            <div className="col-md-5">
                <input className="btn btn-info" value="" />
            </div>
        </div>
    )
}

export default QuestionToken