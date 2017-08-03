import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ShowPost extends Component {
  constructor (props) {
    super(props)

    this.state = {
      blog: {}
    }
  }

  componentDidMount () {
    const { id } = this.props.match.params
    const URL = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`

    fetch(URL)
    .then(response => {
      return response.json()
    })
    .then(json => {
      console.log(json)
      this.setState({
        blog: json
      })
    })
  }

  render () {
    return (
      <div className='card'>
        <div className='card-block each-blog'>
          <h4 className='card-title'>{this.state.blog.title}</h4>
          <h5 className='card-subtitle mb-2 text-muted'>By: {this.state.blog.name}</h5>
          <p className='card-text'>{this.state.blog.blog}</p>
        </div>
      </div>
    )
  }
}
