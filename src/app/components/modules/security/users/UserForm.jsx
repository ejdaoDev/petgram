import React from 'react'

const UserForm = (data) => {
    return (
        <div>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                    <form method="post">
                        <div className="mb-3"><br />
                        { data.data.type == 'create' ? <input type="text" placeholder="Name" className="form-control" required /> : undefined}
                        { data.data.type == 'edit' ? <input type="text" placeholder="Name" defaultValue={data.data.user.name} className="form-control" required /> : undefined}
                        </div>
                        <div className="mb-3">
                        { data.data.type == 'create' ? <input type="email" placeholder="Email" className="form-control" required /> : undefined}
                        { data.data.type == 'edit' ? <input type="email" placeholder="Email" defaultValue={data.data.user.email} className="form-control" required /> : undefined}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Role</label>
                            { data.data.type == 'create' ? <select defaultValue={""} className="form-control" required>
                                <option disabled hidden style={{ display: "none" }} value=""></option>
                                <option value="ADMIN">ADMIN</option>
                                <option value="USER">USER</option>
                            </select> : undefined}
                            { data.data.type == 'edit' ? <select defaultValue={data.data.user.role} className="form-control" required>
                                <option disabled hidden style={{ display: "none" }} value=""></option>
                                <option value="ADMIN">ADMIN</option>
                                <option value="USER">USER</option>
                            </select> : undefined}
                        </div>
                        <div className="mb-3">
                            { data.data.type == 'create' ? <button type="submit" className="btn btn-primary">Create</button> : undefined}
                            { data.data.type == 'edit' ? <button type="submit" className="btn btn-success">Edit</button> : undefined}
                            <button type="reset" className="btn btn-secondary" style={{ float: 'right' }}>Reset</button>
                        </div>
                    </form>
                </div>
                <div className="col-1"></div>
            </div>
        </div>
    )
}

export default UserForm