function FirstMember() {

    const data = JSON.parse(localStorage.getItem('data'))
    localStorage.setItem('ID', data._id)
    localStorage.getItem('groupCode')

    //setTimeout(refreshData(), 3000)

    return (
        <div className="row">
            <div className="col-md">
            {/* <input value={data._id} /> */}
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3>User Information :</h3>
                    </div>
                    <div className="panel-body">
                        <h3 id="clear">Player ID is : {data._id}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstMember