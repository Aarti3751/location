import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authContext } from '../Storage/store'

const Login = () => {
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const {setState} = useContext(authContext)

const navigate = useNavigate()

const senData = (e) =>{
e.preventDefault()

if(email === "aarti@gmail.com" && password === "1234"){
    setState(true)
    navigate('/user')
}
}

  return (
    <div>
    <form onSubmit={senData} className="d-flex flex-column w-50 mx-auto my-4">
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          id="email"
          className="form-control"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          id="password"
          className="form-control"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <input type="submit" className="btn btn-primary" value="Login" />
    </form>
  </div>
  
  )
}

export default Login