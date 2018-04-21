import React, {
    Component
  } from 'react';
  import './contactPage.scss';
  import ContactList from '../../components/contactList/ContactList'
  import SearchBar from '../../components/searchBar/SearchBar'
  import { bindActionCreators } from 'redux'
  import { connect } from 'react-redux';
  import { loadContacts, deleteContact, filter } from '../../actions/index'


  class ContactPage extends Component {
    componentDidMount() {
      this.props.loadContacts();
    }

    handleSearch = (name) => {
      var contacts = this.props.filter(name);
      this.setState({contacts})
    }
    
    handleItemEdit = (currContact) => {
      const editUrl = `/edit/${currContact._id}`
      this.props.history.push(editUrl)
    }

    handleItemRemove = (id) => {
      debugger
      this.props.deleteContact(id) 
    }

    handleItemDetail = (currContact) => {
      const editUrl = `/detail/${currContact._id}`
      this.props.history.push(editUrl)
    }
    render() {
      return (
        <div className="contact-page" >
          <SearchBar onSearch={this.handleSearch}/>
          <ContactList contacts={this.props.contacts}
                      onItemEdit={this.handleItemEdit}
                      onItemRemove={this.handleItemRemove}
                      onItemDetail={this.handleItemDetail}/>
       </div>
           
      )
    }
  }

  function mapStateToProps(state) {
    return {
      contacts: state.contacts
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators( {
      loadContacts: loadContacts,
      deleteContact: deleteContact,
      filter: filter
  
    }, dispatch)
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
  