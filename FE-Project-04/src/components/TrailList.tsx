import React, { ChangeEvent } from "react"
import Trails from "./Trails"
import { ITrail } from "../interfaces/trails"
import {baseUrl} from "./config"


type ITrailList = null | Array<ITrail>

function TrailList() {
  const [trails, setTrails] = React.useState<ITrailList>(null)
  const [region, setRegion] = React.useState("Select Region")
  const [difficulty, setDifficulty] = React.useState("Select Difficulty")

  React.useEffect(() => {
    async function fetchTrail() {
      const resp = await fetch(`${baseUrl}/trails`)
      // fetch locations
      const trailData = await resp.json()
      setTrails(trailData)
      console.log(trailData)
    }
    fetchTrail()
  }, [])

  // function filterTrail() {
  //   return trails?.filter((trail) => {
  //     return trail.location.region === region || region === "Select Region"
  //   })
  // }

  return (
    <section className="pad section-white">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title heading">Trails </h2>
          <p className="section-subtitle">Start exploring your next journey</p>
        </div>
        <div className="row">
            {trails?.map((trail: ITrail) => {
              return <Trails
                key={trail.id}
                {...trail}
              />
            })}
          </div>
      </div>
    </section>
  )
}

export default TrailList
