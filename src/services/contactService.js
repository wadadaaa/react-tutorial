var contacts = [
    {
      id: "5acdfdc1637e0f16b00ad333",
      name: "BuchananRusso",
      title: "amet",
      company: "SNIPS",
      email: "undefined.undefined@snips.net",
      phone: "+1 (984) 490-3385"
    },
    {
      id: "5acdfdc2aabc67c0c724136d",
      name: "MoniqueWheeler",
      title: "mollit",
      company: "GEOLOGIX",
      email: "undefined.undefined@geologix.info",
      phone: "+1 (888) 572-3125"
    },
    {
      id: "5acdfdc28864547945d71749",
      name: "HeadColeman",
      title: "ex",
      company: "ACCEL",
      email: "undefined.undefined@accel.tv",
      phone: "+1 (859) 498-3210"
    }
  ]

const getContacts = () => {
    return Promise.resolve(contacts)
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
  return res
}

const getContactById = (id) => {
  const res = contacts.filter(currentContact => currentContact.id === id);
  if (!res || res.length === 0) return null
  return Promise.resolve(res[0])
}

const deleteContact = (id) => {
  contacts = contacts.filter(currentContact => currentContact.id !== id);
  return Promise.resolve(contacts)
}

const saveContact = (contact) => {
  return contact.id ? updateContact(contact): createContact(contact)
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
    console.log(contact.id)

    return getContactById(contact.id).then( result => {

      if (!result) return null

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
