import React, { SyntheticEvent, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import {baseUrl} from "./config"

function Signup() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  })

  const [errorData, setErrorData] = useState({
    username: "",
    email: "",
    password: ""
  })

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault()
    try {
      await axios.post(`${baseUrl}/signup`, formData)
      navigate('/login')
    } catch (err: any) {
      setErrorData(err.response.data.errors)
    }
  }

  function handleChange(e: any) {
    const newFormData = structuredClone(formData)
    newFormData[e.target.name] = e.target.value 
    setFormData(newFormData)

    const newErrorData = structuredClone(errorData)
    newErrorData[e.target.name] = ""
    setErrorData(newErrorData)
  }

  return <div className="pad section">
  <div className="container">
    <form className="form" onSubmit={handleSubmit}>
    <h1 className="heading">Sign up</h1>
      <div className="field form-group">
        <label className="label">Username</label>
        <div className="control">
          <input
            className="input form-control"
            type="text"
            name={'username'}
            onChange={handleChange}
            value={formData.username}
          />
          {errorData.username && <small className="has-text-danger">{errorData.username}</small>}
        </div>
      </div>

      <div className="field form-group">
        <label className="label">Email</label>
        <div className="control">
          <input
            className="input form-control"
            type="text"
            name={'email'}
            onChange={handleChange}
            value={formData.email}
          />
          {errorData.email && <small className="has-text-danger">{errorData.email}</small>}
        </div>
      </div>

      <div className="field form-group">
        <label className="label">Password</label>
        <div className="control">
          <input
            className="input form-control"
            type="password"
            name={'password'}
            onChange={handleChange}
            value={formData.password}
          />
          {errorData.password && <small className="has-text-danger">{errorData.password}</small>}
        </div>
      </div>
      <button className="btn btn-warning">Register</button>
      <div className="field form-group" >
    <p>Already registered? <Link to={'/login'}>Login</Link></p>
  </div>
    </form>
  </div>
  
</div>
}

export default Signup