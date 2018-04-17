import React, { Component } from "react";
// import './loginPage.scss'
// import '../../components/input/input.scss'
import Input from '../../components/input/input'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { loginUser } from '../../actions/auth'

class LoginPage extends Component {
    constructor (props){
        super(props)
        const user = {
            name: "user",
            password: "123"
          }
        this.state = {user}  
    }
    handleChange = (event, prop) => {
        const value = event.target.value
        const user = this.state.user
        user[prop] = value
        this.setState({user})
    }
    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.loginUser(this.state.user)

        this.props.history.push('/')
    }

    renderInput = () => {
        // input template
        const tempale_inputs = [
            {title:"Name", name:"name", onChange: event => this.handleChange(event, "name")},
            {title:"Password", name:"password", onChange: event => this.handleChange(event, "password")}
        ]      
        return (tempale_inputs.map(currInput => {
                return(
                    <div key={currInput.name}>
                        <Input 
                            title={currInput.title}
                            name={currInput.name}
                            password={currInput.password}
                            onChange={currInput.onChange}
                        />
                    </div>
                )
            })
        )
    }
  render() {
    return (
      <div>
        <div>User Login Page</div>
        <div className="user-login-page">
          <form className="user-login-form" onSubmit={this.onFormSubmit}>
            <div className="form-group">
              {this.renderInput()}
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    
    )
}
    

}
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators( {
      loginUser: loginUser
    }, dispatch)
  }
  
  export default connect(null, mapDispatchToProps)(LoginPage);

    
       
    
