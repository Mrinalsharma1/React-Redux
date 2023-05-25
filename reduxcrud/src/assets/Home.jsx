import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser } from './UserReducer'

function Home() {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.users)
    // console.log(user)
    const deleteMe = (e) => {
        dispatch(deleteUser(e))
    }
    useEffect(() => { console.log('user data', user) }, [user])


    return (
        <div>
            <div className='container'>
                <h2 className='text-center mt-3'>Crud App With React Redux Toolkit</h2>
                <Link to='/create' className='btn btn-success my-3'>Create +</Link>
                <div className='row'>
                    <div className='col-md-12'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {user.map((item, index) => {
                                    return <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            <Link to={`/edit/${item.id}`} className='btn btn-sm btn-primary mx-2'>Edit</Link>
                                            <Link onClick={() => deleteMe(item.id)} className='btn btn-sm btn-danger'>Delete</Link>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home