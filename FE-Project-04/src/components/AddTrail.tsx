import React, { SyntheticEvent, useState, ChangeEvent } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from "./config"

function AddTrail() {

  const navigate = useNavigate()

  const [newTrail, setNewTrail] = useState({
    name: "",
    duration: "",
    description: "",
    length: "",
    difficulty: "",
    image: "",
    map: ""
  })

  const [errorData, setErrorData] = useState({
    name: "",
    duration: "",
    description: "",
    length: "",
    difficulty: "",
    image: "",
    map: ""
  })

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault()
    try {
      const token = localStorage.getItem('token')
      const { data } = await axios.post(`${baseUrl}/trails`, newTrail, {
        headers: { Authorization: `Bearer ${token}` }
      })
      console.log(data)
      navigate('/trails')
    } catch (err: any) {
      setErrorData(err.response.data.errors)
    }
  }

  function handleSelect(e: ChangeEvent<HTMLSelectElement>) {
    const newFormData = structuredClone(newTrail)
    newFormData[e.target.name] = e.target.value
    setNewTrail(newFormData)
  }

  function handleChange(e: any) {
    const newFormData = structuredClone(newTrail)
    newFormData[e.target.name] = e.target.value
    setNewTrail(newFormData)

    const newErrorData = structuredClone(errorData)
    newErrorData[e.target.name] = ""
    setErrorData(newErrorData)
  }

  return (
    <div className="container pad formthree">
      <section className="mb-4">

        <div className="row center">
          <h1 className="heading center">Share your experience</h1>

          <form onSubmit={handleSubmit}>

            <div className="row">
              <div className="col-md-6">
                <label className="label">Trail Name</label>
                <div className="md-form mb-0 field ">
                  <input className="form-control"
                    onChange={handleChange}
                    name={"name"}
                    value={newTrail.name} />
                  {errorData.name && <small>{errorData.name}</small>}
                </div>
              </div>
              <div className="col-md-6">
                <label className="label">Duration</label>
                <div className="md-form mb-0 field ">
                  <input className="form-control" onChange={handleChange}
                    name={"duration"}
                    value={newTrail.duration} />
                  {errorData.duration && <small>{errorData.duration}</small>}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <label className="label">Distance</label>
                <div className="md-form mb-0 field ">
                  <input className="form-control"
                    onChange={handleChange}
                    name={"length"}
                    value={newTrail.length} />
                  {errorData.length && <small>{errorData.length}</small>}
                </div>
              </div>
              <div className="col-md-6">
                <label className="label">Difficulty</label>
                <div className="md-form mb-0 field ">
                  <input className="form-control" onChange={handleChange}
                    name={"difficulty"}
                    value={newTrail.difficulty} />
                  {errorData.difficulty && <small>{errorData.difficulty}</small>}
                </div>
              </div>
            </div>

              <div className="row">
              <div className="col-md-12">
                <label className="label">Description</label>
                <div className="md-form mb-0 field ">
                  <textarea className="form-control" onChange={handleChange}
                    name={"description"}
                    value={newTrail.description} />
                  {errorData.description && <small>{errorData.description}</small>}
                </div>
                </div>
              </div>

              <div className="row">
              <div className="col-md-12">
                <label className="label">Image</label>
                <div className="md-form mb-0 field ">
                  <input className="form-control" onChange={handleChange}
                    name={"image"}
                    value={newTrail.image} />
                  {errorData.image && <small>{errorData.image}</small>}
                </div>
                </div>
              </div>

              <div className="row">
              <div className="col-md-12">
                <label className="label">Path Map</label>
                <div className="md-form mb-0 field ">
                  <input className="form-control" onChange={handleChange}
                    name={"map"}
                    value={newTrail.map} />
                  {errorData.map && <small>{errorData.map}</small>}
                </div>
                </div>
              </div>

            <button type="submit" className="form-control btn btn-warning" >Add your trail</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default AddTrail

