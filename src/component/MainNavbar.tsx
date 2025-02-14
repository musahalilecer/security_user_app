import React from 'react'
import { Link } from 'react-router-dom'
import "../style/MainNavbar.css"

const MainNavbar: React.FC = () => {
  return (
    <div>
        <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add">Add Personal</Link>
        </li>
        <li>
          <Link to="/detail/:id">Personal Detail</Link>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default MainNavbar;