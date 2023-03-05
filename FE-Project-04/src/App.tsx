import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useEffect, useState } from "react"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import About from "./components/About"
import TrailList from "./components/TrailList"
import Team from "./components/Team"
import Signup from "./components/Signup"
import AddTrail from "./components/AddTrail"
import {IUser} from "./interfaces/users"
import axios from 'axios'
import Login from "./components/Login"
import ShowTrail from "./components/ShowTrail"
import Contact from "./components/Contact"


function App() {
  const [user, setUser] = useState<null | IUser>(null)

  async function fetchUser() {
    const token = localStorage.getItem('token')
    const { data } = await axios.get('/api/user', {
      headers: { Authorization: `Bearer ${token}` }
    })
    console.log(data);
    
    setUser(data)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) fetchUser()
  }, [])
  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/trails" element={<TrailList />} />
          <Route path="/team" element={<Team />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login fetchUser={fetchUser}/>} />
          <Route path="/addtrail" element={<AddTrail />} />
          <Route path="/trails/:trailId" element={<ShowTrail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
