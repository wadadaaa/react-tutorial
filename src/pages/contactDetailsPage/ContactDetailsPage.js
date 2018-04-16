import React, { Component } from "react";
import "./contactDetailsPage.scss";
// import ContactList from '../contactList/ContactList'
import contactService from "../../services/contactService";

var testContact = contactService.getContactById("5acdfdc1637e0f16b00ad333");

// testContact.name = "11111"
// contactService.saveContact(testContact)

class ContactDetailsPage extends Component {
  renderErrorMessage() {
    return "Contact not found";
  }
  renderContact(testContact) {
    return (
      <div>
        <ul>
          <li>{testContact.name}</li>
          <li>{testContact.title}</li>
        </ul>
      </div>
    );
  }
  render() {
    return (
      <div className="contacts-detail-page">
        {testContact
          ? this.renderContact(testContact)
          : this.renderErrorMessage()}
      </div>
    );
  }
}

export default ContactDetailsPage;
