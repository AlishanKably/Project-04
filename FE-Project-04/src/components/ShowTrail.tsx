import React, { SyntheticEvent, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { ITrail } from "../interfaces/trails"
import TrailCard from './TrailCard'
import axios from "axios"
import {IUser} from "../interfaces/users"
import {baseUrl} from "./config"

function ShowTrail() {
  const [trail, updateTrails] = React.useState<ITrail | null>(null)
  const [errorMessage, setErrorMessage] = useState('')
  const { trailId } = useParams()
  const navigate = useNavigate()

  React.useEffect(() => {
    async function fetchTrails() {
      const resp = await fetch(`${baseUrl}/trails/${trailId}`)
      const TrailsData = await resp.json()
      updateTrails(TrailsData)
      console.log(TrailsData);
      
    }
    fetchTrails()
  }, [])

  return <section className="pad">
    <div>
      <div>
        {/* <h1>hello</h1> */}
      {trail && <TrailCard
          key={trail.id}
          {...trail}
        />}
      </div>
    </div>
  </section>
}

export default ShowTrail