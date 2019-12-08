import React from 'react'
import './Form.css'
import axios from 'axios'

class Form extends React.Component {
  constructor() {
    super()

    this.state = { 
      name: '',
      email: '',
      repo: '',
      url: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  async handleSubmit(e) {
    e.preventDefault()

    const { name, email, repo, url } = this.state

    const form = await axios.post('/api/form', {
      name,
      email,
      repo,
      url
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        <input
            type='text'
            name= 'name'
            placeholder= 'FULL NAME' 
            onChange={this.handleChange}
          />
          <input
            type='text'
            name= 'email'
            placeholder= 'EMAIL' 
            onChange={this.handleChange}
          />
          <input
            type='text'
            name= 'repo'
            placeholder= 'PROJECT REPO' 
            onChange={this.handleChange}
          />
          <input
            type='text'
            name= 'url'
            placeholder= 'PROJECT URL' 
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }

}

export default Form 
