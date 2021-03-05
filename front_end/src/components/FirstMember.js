function FirstMember() {

    const data = JSON.parse(localStorage.getItem('data'))
    localStorage.setItem('ID', data._id)
    localStorage.getItem('groupCode')

    //setTimeout(refreshData(), 3000)

    return (
        <div className="col-md-5">
            {/* <input value={data._id} /> */}
            <p id="clear">First Player ID is : {data._id}</p>
        </div>
    )
}

export default FirstMember