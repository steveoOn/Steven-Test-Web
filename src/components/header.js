import React from 'react'
import { Link } from 'gatsby'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="header">
    <div className="headerGroup">
      <Link to="/">
        <img width="30" src={require('../images/crutch.svg')} />
      </Link>
      <Link to="/testMenu1">Menu2</Link>
      <Link to="/testMenu2">Menu3</Link>
      <Link to="/testMenu3">Menu4</Link>
      <Link to="/testMenu4">Menu5</Link>
    </div>
  </div>
)

export default Header
