import React, { Component } from 'react'

export default class CreatePost extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      title: '',
      blog: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleBlogChange = this.handleBlogChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange (event) {
    this.setState({name: event.target.value})
  }

  handleTitleChange (event) {
    this.setState({title: event.target.value})
  }

  handleBlogChange (event) {
    this.setState({blog: event.target.value})
  }

  handleSubmit (event) {
    event.preventDefault()
    this.setState({
      name: event.target.value,
      title: event.target.value,
      blog: event.target.value
    })
    let item = JSON.stringify(this.state)

    fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/', {
      method: 'POST',
      body: item,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log(response, 'success')
      alert('Hot take submitted. Return home or submit another blog!')
    })
    .catch(error => {
      console.log(error, 'failure')
    })

    this.setState({
      name: '',
      title: '',
      blog: ''
    })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <div className='form-group'>
              <label htmlFor='exampleInputPassword1'>Your alias:</label>
              <input onChange={this.handleNameChange} value={this.state.name} type='text' className='form-control' placeholder='Name' />
            </div>

            <div className='form-group'>
              <label htmlFor='exampleInputPassword1'>Title of your burn:</label>
              <input onChange={this.handleTitleChange} value={this.state.title} type='text' className='form-control' placeholder='Title' />
            </div>

            <div className='form-group'>
              <label htmlFor='exampleInputPassword1'>Burn away:</label>
              <textarea onChange={this.handleBlogChange} value={this.state.blog} className='form-control' rows='5' />
            </div>

            <button type='Submit' className='btn btn-primary'>Submit Your Burn</button>
          </fieldset>
        </form>

        {/* <div className='return-home'>
          <Link exact to='/'><h3>Return Home</h3></Link>
        </div> */}
      </div>
    )
  }
}
