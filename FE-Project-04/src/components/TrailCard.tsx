import React from "react"
import { Link } from "react-router-dom"
import { ITrail } from "../interfaces/trails"



function TrailCard({ id, name, duration, length, difficulty, image, description, map }: ITrail) {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-12">
            <img src={image} className="img-fluid rounded float-left" />
            <div>
            </div>
            <div className="col-lg-8 col-md-12 ps-lg-5 pb-10">
              
            </div>
            <h3 className="pad heading">{name}</h3>
            <p>{description}</p>
            <p>Distance: {length}</p>
            <p>Duration: {duration}</p>
            <p>Difficulty: {difficulty}</p>
            <img src={map} className="img-fluid rounded float-left"></img>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrailCard