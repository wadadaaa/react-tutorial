import {TYPES} from './types'
import contactService from '../services/contactService'

export function loadContacts() {
    return {
        type: TYPES.LOAD_CONTACTS,
        payload: contactService.getContacts()
    }
}
export function filter(name) {
    const res = contactService.filter(name)
    return {
        type: TYPES.LOAD_CONTACTS,
        payload: res
    }
}
export function deleteContact(id) {
    contactService.deleteContact(id)
    return {
        type: TYPES.DELETE_CONTACT,
        payload: id
    }
}
export function loadContact(id) {
    const contact = contactService.getContactById(id)
    return {
        type: TYPES.LOAD_CONTACT,
        payload: contact
    }
}

export function saveContact (contact) {
    const savedContact = contactService.saveContact(contact)
    return {
        type: contact.id ? TYPES.SAVE_CONTACT: TYPES.ADD_CONTACT,
        payload: savedContact
    }

}