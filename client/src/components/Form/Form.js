import React from 'react'
import './Form.css'

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = { 
      name: '',
      email: '',
      repo: '',
      url: '',
    }
  }

  render() {
    return(
      <div>
        <form>
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
          <button onClick={(e) => this.onSubmit(e)}>Submit</button>
        </form>
      </div>
    )
  }

}


export default Form 
