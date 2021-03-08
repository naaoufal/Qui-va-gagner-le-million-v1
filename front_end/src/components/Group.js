import { useEffect } from "react"
import FirstMember from "./FirstMember"

function Group () {

    const code = localStorage.getItem('groupCode')
    const codeSec = localStorage.getItem('code')
    const id = localStorage.getItem('ID')
    const secId = localStorage.getItem('secID')

    function clearAll() {
        //clearSecID()
        localStorage.clear()
        window.location.href = "/LoginUser"
    } 

    useEffect(() => {
        setTimeout( function searchForMissing() {
            fetch("http://localhost:3001/api/groups/all").then(res => {
                return res.json()
            }).then(data => {
                //console.log(data)
                var dataFull = data.map(inf => {
                    return inf
                })
                //console.log(dataFull)
                var result = dataFull.filter(l => l.groupcode == codeSec || l.groupcode == code)
                console.log(result.length)
                result.map(i => {
                    //console.log(i.idparticipant)
                    if(i.idparticipant != id){
                        //console.log(i.idparticipant)
                        localStorage.setItem('secID', i.idparticipant)
                    }
                })

                if(result.length == 2){
                    fetch("http://localhost:3001/api/questions/getOneQuestion").then(res => {
                        return res.json()
                    }).then(data => {
                        console.log(data)
                    })
                    setTimeout(window.location.href = "/Round", 1000)
                } else {
                    window.location.href = "/Group"
                }
            })     
        }, 5000)
    })

    return (
        <div className="container"><br />
            <div className="row">
                <div className="col-md">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <h3>Group Code is : {code || codeSec}</h3>
                        </div>
                        <div className="panel-body">
                            <p>wait for others players ...</p>
                        </div>
                    </div>
                </div>
            </div>
            <FirstMember />
                {/* <div className="col-md-5"> */}
                    {/* <input value={localStorage.getItem('secID')} /> */}
                    {/* <p>Second Player ID is : {secId}</p>
                </div> */}
            <center><button onClick={clearAll} className="btn btn-danger">Exit</button></center>
        </div>
    )
}

export default Group