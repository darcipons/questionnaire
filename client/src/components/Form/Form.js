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
            name= 'fullName'
            placeholder= 'FULL NAME' 
            value= {this.state.fullName}
            onChange={e => this.change(e)}
            autoComplete= "off"
          />
          <input
            name= 'email'
            placeholder= 'EMAIL' 
            value= {this.state.email}
            onChange={e => this.change(e)}
          />
          <input
            name= 'repo'
            placeholder= 'PROJECT REPO' 
            value= {this.state.repo}
            onChange={e => this.change(e)}
          />
          <input
            name= 'url'
            placeholder= 'PROJECT URL' 
            value= {this.state.url}
            onChange={e => this.change(e)}
          />
          <button onClick={(e) => this.onSubmit(e)}>Submit</button>
        </form>
      </div>
    )
  }
}


export default Form 
