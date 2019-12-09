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
          <div className='rating_container'>
          <div className='rating_title'>USING BEST PRACTICES FOR OOP:</div>
            <div className= 'rating_input 1'>
              <input
                name= 'rating1'
                type= 'text'
                value= {this.state.rating1}
                onChange= {this.handleChange}
              />
            </div>
          <div className='rating_title'>MODULAR DEVELOPMENT:</div>
            <div className= 'rating_input 2'>
              <input
                name= 'rating2'
                value= {this.state.rating2}
                type= 'text'
                onChange= {this.handleChange}
              />
          </div>
          <div className='rating_title'>FULL-STACK WORKFLOW UNDERSTANDING:</div>
            <div className= 'rating_input 3'>
              <input
                name= 'rating3'
                value= {this.state.rating3}
                type= 'text'
                onChange= {this.handleChange}
              />
            </div> 
          <div className='rating_title'>TESTING:</div>
            <div className= 'rating_input 4'>
                <input
                  name= 'rating4'
                  value= {this.state.rating4}
                  type='text'
                  onChange= {this.handleChange}
                />
            </div>  
          <div className='rating_title'>DATABASE KNOWLEDGE:</div>
            <div className= 'rating_input 5'>
              <input
                name= 'rating5'
                value= {this.state.rating5}
                type= 'text'
                onChange= {this.handleChange}
              />
            </div>  
          <div className='rating_title'>DEBUGGING:</div>
            <div className= 'rating_input 6'>
              <input
                name= 'rating6'
                value= {this.state.rating6}
                type= 'text'
                onChange= {this.handleChange}
              />
            </div>  
          <div className='rating_title'>PROBLEM SOLVING SKILLS:</div>
            <div className= 'rating_input 7'>
              <input
                name= 'rating7'
                value= {this.state.rating7}
                type= 'text'
                onChange= {this.handleChange}
              />
            </div> 
          <div className='rating_title'>JAVASCRIPT:</div>
            <div className= 'rating_input 8'>
              <input
                name= 'rating8'
                value= {this.state.rating8}
                type= 'text'
                onChange= {this.handleChange}
              />
            </div>
          <div className='rating_title'>HTML:</div>
            <div className= 'rating_input 9'>
              <input
                name= 'rating9'
                value= {this.state.rating9}
                type= 'text'
                onChange= {this.handleChange}
              />
           </div>  
          <div className='rating_title'>CSS:</div>
            <div className= 'rating_input 10'>
              <input
                name= 'rating10'
                value= {this.state.rating10}
                type= 'text'
                onChange= {this.handleChange}
              />
           </div> 
          <div className='rating_title'>WORKING ON A TEAM:</div>
            <div className= 'rating_input 11'>
              <input
                name= 'rating11'
                value= {this.state.rating11}
                type= 'text'
                onChange= {this.handleChange}
              />
            </div>
          <div className='rating_title'>SELF MOTIVATION:</div>
            <div className= 'rating_input 12'>
              <input
                name= 'rating12'
                value= {this.state.rating12}
                type= 'text'
                onChange= {this.handleChange}
              />
            </div> 
          <div className='rating_title'>COMMUNICATION SKILLS:</div>
            <div className= 'rating_input 13'>
              <input
                name= 'rating13'
                value= {this.state.rating13}
                type= 'text'
                onChange= {this.handleChange}
              />
          </div> 
          <div className='rating_title'>YOUR OWN ENERGY LEVEL:</div>
            <div className= 'rating_input 14'>
              <input
                name= 'rating14'
                value= {this.state.rating14}
                type= 'text'
                onChange= {this.handleChange}
              />
            </div> 
          <div className='rating_title'>INTELLIGENCE / APTITUDE:</div>
            <div className= 'rating_input 15'>
              <input
                name= 'rating15'
                value= {this.state.rating15}
                type= 'text'
                onChange= {this.handleChange}
              />
            </div>
          </div>
          <button onClick={this.resetForm}>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form 
