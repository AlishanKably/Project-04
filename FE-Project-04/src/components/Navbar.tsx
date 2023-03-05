import { Link, useNavigate } from 'react-router-dom'
import { IUser } from '../interfaces/users'

interface NavbarProps {
  user: IUser | null
  setUser: Function
}

function Navbar({ user, setUser }: NavbarProps) {
  const navigate = useNavigate()

  function logout() {
    localStorage.removeItem('token')
    setUser(null)
    navigate('/')
  }

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#"><span className="text-warning">Hiking</span>Club</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/trails" className="nav-link">Trails</Link>
            </li>
            <li className="nav-item">
              <Link to="/team" className="nav-link">Team</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
            <li className="nav-item">
              {user && (<Link to="/addtrail" className="nav-link">Add trail</Link> )}
            </li>
            <li className="nav-item">
              {!user && (<Link to="/signup" className="nav-link">Sign Up</Link>)}
            </li>
            <li className="nav-item">
            {!user && (<Link to="/login" className="nav-link">Log In</Link>)}
            </li>
            <li className="nav-item">
              {user && (
                <Link to="/" onClick={logout} className="nav-link">
                  Logout
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
