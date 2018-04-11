import React from 'react';
import './ContactListItem.scss'

const ContactListItem = (props) => (
    <div className="contact-list-item">
        <div className="contact-img-box">
            <img className="contact-img" 
            src="https://png.icons8.com/color/1600/avatar.png" 
            alt={props.contact.name}/>
        </div>

        <div className="contact-details-box">
            <div className="contact-name">{props.contact.name}</div>
            <div className="contact-title">{props.contact.title}</div>
        </div>    
    </div>
)

export default ContactListItem
