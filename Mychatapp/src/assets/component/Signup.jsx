import {React, useState} from 'react';
import { Link, useNavigation } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Signup() {
    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/register',{email, name, password})
        .then(result => {console.log(result)
        navigate('/login')
    })
        .catch(err => console.log(err))
    }
    return (
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <form onSubmit={handleSubmit}>
                   <h1>Register</h1>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email"
                         className="form-control" 
                         id="exampleInputEmail1" aria-describedby="emailHelp" 
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">@</span>
                        <input type="text"
                         className="form-control"
                          placeholder="Username"
                           aria-label="Username" aria-describedby="basic-addon1"
                           onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password"
                         className="form-control" 
                         id="exampleInputPassword1"
                         onChange={(e) => setPassword(e.target.value)}
                          />
                    </div>

                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                </form>
                <div className="d-grid gap-2 mt-2">
                        <Link to="/login" className="btn btn-outline-primary">Login</Link>
                    </div>
            </div>
        </div>
    )
}

export default Signup
