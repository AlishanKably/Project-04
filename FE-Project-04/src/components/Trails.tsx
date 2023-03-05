import React from "react"
import { Link } from "react-router-dom"
import { ITrail } from "../interfaces/trails"




function Trails({ id, name, duration, length, difficulty, image, description, map }: ITrail) {
  return (
    <Link to={`/trails/${id}`} className="col-sm-6 col-md-4">
      <div className="team-item">
        <img src={image} className="col-sm-12 col-md-12" />
        <h3 className="card__title">{name}</h3>
        <div className="team-info">
          <p className="card__descripton">Difficulty: {difficulty}</p>
        </div>
        <button className="btn btn-warning mt-3">View trail</button>
      </div>
    </Link>
  )
}

export default Trails