function Group () {

    const code = localStorage.getItem('groupCode')
    const idFirst = localStorage.getItem('id')

    function clearAll() {
        localStorage.removeItem('groupCode')
        localStorage.removeItem('idSec')
        localStorage.removeItem('codeSec')
        window.location.href = "/User"
    }

    function timing () {
        setTimeout(function () {
            fetch("http://localhost:3001/api/groups/all").then(res => {
                return res.json()
            }).then(data => {
                //console.log(data)
                data.map(inf => {
                    console.log(inf.idparticipant)
                    if(inf.groupcode === code && inf.idparticipant === idFirst){
                        console.log("deja kayn nta")
                    } else {
                        console.log(inf.idparticipant)
                        localStorage.setItem('idSec', inf.idparticipant)
                        localStorage.setItem('codeSec', inf.groupcode)
                    }
                })
            })
            //window.location.reload()
        }, 3000)
    }

    timing()

    return (
        <div>
            <h1>wait for others players ... </h1>
            <div className="row">
            <div className="col-md-5">
                <p>First Player ID is : {idFirst}</p>
                <p>Group ID is : {code}</p>
            </div>
            <div className="col-md-5">
                <p>Second Player ID is : {localStorage.getItem('idSec')}</p>
                <p>Group ID is : {localStorage.getItem('codeSec')}</p>
            </div>
            </div>
            <br/>
            <center><button onClick={clearAll} className="btn btn-danger">Exit</button></center>
        </div>
    )
}

export default Group