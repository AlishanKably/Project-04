import React, { SyntheticEvent, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {baseUrl} from "./config"

function Login({ fetchUser }: { fetchUser: Function }) {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault()
    try {
      const { data } = await axios.post(`${baseUrl}/login`, formData)
      const token: string = data.token
      localStorage.setItem('token', token)
      fetchUser()
      navigate('/')
    } catch (err: any) {
      setErrorMessage(err.response.data.message)
    }
  }

  function handleChange(e: any) {
    const newFormData = structuredClone(formData)
    newFormData[e.target.name] = e.target.value
    setFormData(newFormData)
    setErrorMessage("")
  }

  return <div className="pad section">
    <div className="container">
      <form onSubmit={handleSubmit} className="formtwo">
      <h1 className="heading">Log In</h1>
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
            {errorMessage && <small className="has-text-danger">Log in failed</small>}
          </div>
        </div>
        <button className="btn btn-warning">Submit</button>
      </form>
    </div>
  </div>
}

export default Login