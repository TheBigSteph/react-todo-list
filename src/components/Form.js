export default function Form() {
    return (
        <div className="container">
            <form className="row g-3">
                <div className="col-10 col-sm-8 col-lg-10">
                    <input type="text" className="form-control" id="task" />
                </div>
                <div className="col-auto">
                    <button className="btn btn-success">Add</button>
                </div>
            </form><hr />
            <h2 className="text-muted">Tasks List</h2>
        </div>
    )
}