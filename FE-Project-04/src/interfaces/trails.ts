import { ILocation } from "./locations"

export interface ITrail {
  id: string,
  name : string,
  duration: string,
  length: string,
  difficulty: string,
  image: string,
  description: string,
  map: string,
  trail_location: Array<ILocation>,
  // comments
  user: { username: string }
}
