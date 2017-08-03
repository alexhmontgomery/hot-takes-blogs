import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
        <div className='card-group'>
          <div className='card'>
            <div className='card-block'>
              <h4 className='card-title'>Do you have a hot take?</h4>
              <Link to='/create' className='btn btn-primary'>Write It</Link>
            </div>
          </div>
          <div className='card'>
            <div className='card-block'>
              <h4 className='card-title'>Want to see all of the scalding hot takes?</h4>
              <Link exact to='/show' className='btn btn-primary'>Don't burn yourself!</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
