import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/login',{email, password})
        .then(result => 
            {console.log(result)
            if(result.data === "Success") {
                navigate('/home')
            }
    })
        .catch(err => console.log(err))
    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
    <div className='bg-white p-3 rounded w-25'>
        <form onSubmit={handleSubmit}>
           <h1>Login</h1>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" 
                className="form-control"
                 id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setEmail(e.target.value)} />
                <div id="emailHelp" 
                className="form-text">We'll never share your email with anyone else.</div>
            </div>
            
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" 
                className="form-control"
                 id="exampleInputPassword1" 
                onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <div className="d-grid gap-2">
                <button  className="btn btn-primary">Login</button>
                </div>
                </form>
                <div className="d-grid gap-2">
                
                <Link to="/register" className="btn btn-outline-primary mt-2">Register</Link>
            </div>
    </div>
</div>
  )
}

export default Login
