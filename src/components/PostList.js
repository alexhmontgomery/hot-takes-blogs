import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PostList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      blogs: []
    }
  }

  componentDidMount () {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/')
    .then(response => {
      return response.json()
    })
    .then(json => {
      console.log(json)
      this.setState({
        blogs: json
      })
    })
  }

  render () {
    return (
      <div>
        <div className='blogs-header'>
          <h1>Here are all of the hottest takes!</h1>
        </div>
        <div className='list-group'>
          {this.state.blogs.map((blog) =>
            <Link to={`/show/${blog._id}`} className='list-group-item' key={blog._id}>{blog.title} <span className='link-blogger'>-{blog.name}</span></Link>
          )}
        </div>
      </div>
    )
  }
}
