import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class BaseLayout extends Component {
  render () {
    return (
      <div>
        <nav className='nav-bar'>
          <ul className='nav justify-content-center'>
            <li className='nav-item'>
              <NavLink className='nav-link' exact to='/'>Home</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/create'>New take</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' exact to='/show'>See all the takes</NavLink>
            </li>
          </ul>
        </nav>

        <main>
          { this.props.children }
        </main>

        <footer>
          <span className='footer-text'>&copy; 2017 | AlexHMonty Designs</span>
        </footer>
      </div>
    )
  }
}
