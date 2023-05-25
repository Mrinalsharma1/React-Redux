import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './UserReducer';


function Update() {
    const id = JSON.stringify(useParams());
    var d = parseInt(id.replace(/[^0-9]*/g, ''));
    const user = useSelector((state) => state.users)
    const filteredData = user.filter(item => item.id === d);

    const { name, email } = filteredData[0];
    const [uname, setName] = useState(name);
    const [uemail, setEmail] = useState(email);


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateUser({
            id: id,
            name: uname,
            email: uemail
        }))
        navigate('/')
    }

    // console.log('temp', filteredData)

    return (
        <div>
            <div className='d-flex vh-100 w-100  justify-content-center align-items-center'>
                <div className='w-50 border rounded bg-secondary text-white p-5'>
                    <h2>Update User</h2>
                    <form onSubmit={handleUpdate}>
                        <div>
                            <label htmlFor='name'>Name:</label>
                            <input type='text' name='name' className='form-control' value={uname} onChange={e => setName(e.target.value)} />
                        </div>
                        <div className='mt-3'>
                            <label htmlFor='name'>Email:</label>
                            <input type='email' name='email' className='form-control' value={uemail} onChange={e => setEmail(e.target.value)} />
                        </div><br />
                        <button className='btn btn-info'>Update</button>
                        <Link to='/' className='mx-3 btn btn-warning'>Back</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Update