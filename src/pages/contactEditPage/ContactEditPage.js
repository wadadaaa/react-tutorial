import React, { Component } from "react";
import "./contactEditPage.scss";
import contactService from "../../services/contactService";
import Input from "../../components/input/input"


class ContactEditPage extends Component {
    constructor(props) {
        super(props)
        const contactId = props.match.params.id
        const contact = contactId ? 
          contactService.getContactById(contactId) : 
          contactService.getEmptyContact()
        this.state = {contact}

    }
    handleChange = (event, inputId) => {
      const updatedContact = {...this.state.contact, [inputId]: event.target.value} //create a new object and add to valid <input> by id(name) a new value
      this.setState({contact: updatedContact});
    }

    onFormSubmit = (event) => {
      event.preventDefault()
      contactService.saveContact(this.state.contact)
      this.props.history.push("/")
    }

    renderInput = () => {
        const inputs = [
            {title:"Name", name:"name", onChange: event => this.handleChange(event, "name")},
            {title:"Title", name:"title", onChange: event => this.handleChange(event, "title")},
            {title:"Company", name:"company", onChange: event => this.handleChange(event, "company")},
            {title:"Email", name:"email", onChange: event => this.handleChange(event, "email")},
            {title:"Phone", name:"phone", onChange: event => this.handleChange(event, "phone")},
        ]
        const {contact} = this.state; // {} -> to get key from object
    
        return inputs.map( currInput => {
            const value = contact[currInput.name]
            return (
                <div key={currInput.name}><Input 
                      name={currInput.name}
                      title={currInput.title}
                      value={value}
                      onChange={currInput.onChange}
                      />
                </div>
            )
        })
    }
  render() {
    return (
      <div>
        <div>Contact Edit Page</div>
        <div className="contact-edit-page">
          <form className="contact-edit-form" onSubmit={this.onFormSubmit}>
            <div className="form-group">
              {this.renderInput()}
              <button type="submit">Save</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactEditPage;
