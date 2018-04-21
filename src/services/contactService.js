import axios from 'axios';

var contacts = []
const getContacts = async () => { 
  return await axios.get('http://localhost:3000/contacts')
    .then(function (response) {
      contacts = response.data
      return contacts
    })
    .catch(function(error){
      console.log(error)
    });
}
const getEmptyContact = () => {
    return {
      id: "",
      name: "",
      title: "",
      company: "",
      email: "",
      phone: ""
    }
}
const filter = (name) => {
  const res = contacts.filter(currentContact => currentContact.name.toLowerCase().includes(name));
  // console.log("service", res)
  return Promise.resolve(res)
}

const getContactById = async(id) => {
  return await axios.get(`http://localhost:3000/contacts/${id}`)
    .then(function (response) {
      contacts = response.data
      console.log(contacts)
      return contacts
    })
    .catch(function(error){
      console.log(error)
    });
  // const res = contacts.filter(currentContact => currentContact.id === id);
  // if (!res || res.length === 0) return null
  // return Promise.resolve(res[0])
}

const deleteContact = (id) => {
  debugger
  contacts = contacts.filter(currentContact => currentContact.id !== id);
  return Promise.resolve(contacts)
}

const saveContact = (contact) => {
  return contact._id ? updateContact(contact): createContact(contact)
}

const contactService = {
    getContacts,
    getContactById,
    deleteContact,
    getEmptyContact,
    saveContact,
    filter
}
    
export default contactService

// server
const updateContact = (contact) => {

    return getContactById(contact._id).then( result => {

      // update contact by put
      if (!result) return null
      // result.name = contact.name
      // result.title = contact.title
      // result.company = contact.company
      // result.email = contact.email
      // result.phone = contact.phone
      // console.log('upadated', result)

      // axios.put(`http://localhost:3000/contacts/${id}`,(result)=> {
      //   console.log('result', result)
        
      // })
      // .then(function (response) {
      //   console.log(response);
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
      result.name = contact.name
      result.title = contact.title
      result.company = contact.company
      result.email = contact.email
      result.phone = contact.phone
      return result
    })
    
}

const createContact = (contact) => {
    contact.id = contacts.length + 1 + ""
    contacts.push(contact)
    return Promise.resolve(contacts)
}
