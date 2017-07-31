import React, { Component } from 'react'
import logo from '../logo.svg'
import '../styles/App.css'

class App extends Component {
  render () {
    return (
      <div className='homepage'>
        <div className='jumbotron jumbotron-fluid'>
          <div className='container'>
            <h1 className='display-3'>HOT TAKES BLOGS</h1>
            <p className='lead'>Where all of the hottest takes reside!</p>
          </div>
        </div>
      </div>
    )
  }
}

export default App
