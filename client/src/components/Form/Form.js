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
      rating1: '',
      rating2: '',
      rating3: '',
      rating4: '',
      rating5: '',
      rating6: '',
      rating7: '',
      rating8: '',
      rating9: '',
      rating10: '',
      rating11: '',
      rating12: '',
      rating13: '',
      rating14: '',
      rating15: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  async handleSubmit(e) {
    e.preventDefault()

    const { name, email, repo, url, rating1, rating2, rating3, rating4, rating5, rating6, rating7, rating8,
      rating9, rating10, rating11, rating12, rating13, rating14, rating15 } = this.state

    await axios.post('/api/form', {
      name, email, repo, url, rating1, rating2, rating3, rating4, rating5, rating6, rating7, rating8,
      rating9, rating10, rating11, rating12, rating13, rating14, rating15
    })
  }



  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit} onReset={this.resetForm}>
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
          <label>
            USING BEST PRACTICES FOR OOP
              <input
                name= 'rating1'
                type= 'text'
                value= {this.state.rating1}
                onChange= {this.handleChange}
              />
          </label>
          <label>
            MODULAR DEVELOPMENT
              <input
                name= 'rating2'
                value= {this.state.rating2}
                type= 'text'
                onChange= {this.handleChange}
              />
          </label>
          <label>
            FULL-STACK WORKFLOW UNDERSTANDING
              <input
                name= 'rating3'
                value= {this.state.rating3}
                type= 'text'
                onChange= {this.handleChange}
              />
          </label>  
          <label>
            TESTING
                <input
                  name= 'rating4'
                  value= {this.state.rating4}
                  type='text'
                  onChange= {this.handleChange}
                />
          </label>  
          <label>
            DATABASE KNOWLEDGE
              <input
                name= 'rating5'
                value= {this.state.rating5}
                type= 'text'
                onChange= {this.handleChange}
              />
          </label>  
          <label>
            DEBUGGING
              <input
                name= 'rating6'
                value= {this.state.rating6}
                type= 'text'
                onChange= {this.handleChange}
              />
          </label>  
          <label>
            PROBLEM SOLVING SKILLS
              <input
                name= 'rating7'
                value= {this.state.rating7}
                type= 'text'
                onChange= {this.handleChange}
              />
          </label>  
          <label>
            JAVASCRIPT
              <input
                name= 'rating8'
                value= {this.state.rating8}
                type= 'text'
                onChange= {this.handleChange}
              />
          </label>  
          <label>
            HTML
              <input
                name= 'rating9'
                value= {this.state.rating9}
                type= 'text'
                onChange= {this.handleChange}
              />
          </label>  
          <label>
            CSS
              <input
                name= 'rating10'
                value= {this.state.rating10}
                type= 'text'
                onChange= {this.handleChange}
              />
          </label>  
          <label>
            WORKING ON A TEAM
              <input
                name= 'rating11'
                value= {this.state.rating11}
                type= 'text'
                onChange= {this.handleChange}
              />
          </label>  
          <label>
            SELF MOTIVATION
              <input
                name= 'rating12'
                value= {this.state.rating12}
                type= 'text'
                onChange= {this.handleChange}
              />
          </label>  
          <label>
            COMMUNICATION SKILLS
              <input
                name= 'rating13'
                value= {this.state.rating13}
                type= 'text'
                onChange= {this.handleChange}
              />
          </label>  
          <label>
            YOUR OWN ENERGY LEVEL
              <input
                name= 'rating14'
                value= {this.state.rating14}
                type= 'text'
                onChange= {this.handleChange}
              />
          </label>  
          <label>
            INTELLIGENCE / APTITUDE
              <input
                name= 'rating15'
                value= {this.state.rating15}
                type= 'text'
                onChange= {this.handleChange}
              />
          </label>
          <button onClick={this.resetForm}>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form 
