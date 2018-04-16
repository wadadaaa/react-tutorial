import React, {
    Component
  } from 'react';
  import './contactPage.scss';
  import contactService from '../../services/contactService'
  import ContactList from '../../components/contactList/ContactList'
  import SearchBar from '../../components/searchBar/SearchBar'
  
  class ContactPage extends Component {
    state = {
      contacts: contactService.getContacts()
    }

    search = (value) => {
      var contacts = contactService.filter(value)
      this.setState({contacts})
    }
    
    handleItemEdit = (currContact) => {
      const editUrl = `/edit/${currContact.id}`
      this.props.history.push(editUrl)
    }
    
    handleItemRemove = (id) => {
      const contacts = contactService.deleteContact(id)
      this.setState({contacts})
    }
    render() {
      return (
        <div className="contact-page" >
          <SearchBar onSearch={this.search}/>
          <ContactList contacts={this.state.contacts} onItemEdit={this.handleItemEdit} onItemRemove={this.handleItemRemove}/>
           
       </div>
      )
    }
  }

  export default ContactPage;
  