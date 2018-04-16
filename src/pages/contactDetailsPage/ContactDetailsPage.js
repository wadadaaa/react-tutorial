import React, { Component } from "react";
import "./contactDetailsPage.scss";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { loadContact } from '../../actions/index'


class ContactDetailsPage extends Component {
  
  componentDidMount() {
    const contactId = this.props.match.params.id
    this.props.loadContact(contactId);
  }

  renderErrorMessage() {
    return "Contact not found";
  }

  renderContact(currContact) {
    
    return (
      <div>
        <ul>
          <li>{currContact.name}</li>
          <li>{currContact.title}</li>
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div className="contacts-detail-page">
        {this.renderContact(this.props.contact)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contact: state.contact
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( {
    loadContact: loadContact

  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetailsPage);
