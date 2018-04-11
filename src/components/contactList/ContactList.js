import React from 'react';
import ContactListItem from '../contactListItem/ContactListItem'

class ContactList extends React.Component {
    render() {
        const contacts = this.props.contacts
    
        return contacts.map(
            (currContact, i) =>
                <ContactListItem contact={currContact} key={i}/>
        )

    }
}

export default ContactList
