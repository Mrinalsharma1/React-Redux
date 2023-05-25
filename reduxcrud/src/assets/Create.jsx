import React, { useState } from 'react'
import { addUser } from './UserReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Create() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const user = useSelector((state) => state.users)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    // console.log('create ppage', users.length + 1)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser({ name, email, id: user.length + 1, }))
        navigate('/')
    }
    return (
        <div>
            <div className='d-flex vh-100 w-100  justify-content-center align-items-center'>
                <div className='w-50 border rounded bg-secondary text-white p-5'>
                    <h2>Add New User</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor='name'>Name:</label>
                            <input type='text' name='name' className='form-control' onChange={e => setName(e.target.value)} />
                        </div>
                        <div className='mt-3'>
                            <label htmlFor='name'>Email:</label>
                            <input type='email' name='email' className='form-control' onChange={e => setEmail(e.target.value)} />
                        </div><br />
                        <button className='btn btn-success'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Create