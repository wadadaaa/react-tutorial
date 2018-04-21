var express =  require('express')
var uniqid = require('uniqid');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express()

const serverRoot = 'http://localhost:3000';
const entity = '/contacts'
const baseUrl = `${serverRoot}${entity}`;

var corsOptions = {
	origin: /http:\/\/localhost:\d+/,
	credentials: true
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

var contacts = [
    {
      "phone": "+1 (984) 490-3385",
      "email": "undefined.undefined@snips.net",
      "company": "SNIPS",
      "title": "amet",
      "name": "BuchananRusso",
      "_id": "5acdfdc1637e0f16b00ad333"
    },
    {
      "phone": "+1 (888) 572-3125",
      "email": "undefined.undefined@geologix.info",
      "company": "GEOLOGIX",
      "title": "mollit",
      "name": "MoniqueWheeler",
      "_id": "5acdfdc2aabc67c0c724136d"
    },
    {
      "phone": "+1 (859) 498-3210",
      "email": "undefined.undefined@accel.tv",
      "company": "ACCEL",
      "title": "ex",
      "name": "HeadColeman",
      "_id": "5acdfdc28864547945d71749"
    },
    {
      "phone": "+1 (944) 504-2554",
      "email": "undefined.undefined@maineland.name",
      "company": "MAINELAND",
      "title": "ullamco",
      "name": "BrooksBarnes",
      "_id": "5acdfdc2c142a1fd65afe52e"
    },
    {
      "phone": "+1 (850) 570-3407",
      "email": "undefined.undefined@pyramia.biz",
      "company": "PYRAMIA",
      "title": "consectetur",
      "name": "FeleciaPrince",
      "_id": "5acdfdc283c2a2edcac74ea0"
    }
  ]


function checkExistingContact(req, res, next) {
    const contactId = req.params.id;
    var results = contacts.filter(contact => contact._id === contactId)
    if(results && results.length >= 1) {
        next()
    } else {
        res.json( {error: 'contact not found!'})
    }
}

app.get(entity, function (req, res) {
    console.log('GET::contact')
    res.json(contacts)
})

app.get(`${entity}/:id`, checkExistingContact, function (req, res) {
    console.log('GET::contact')
    const contactId = req.params.id;

    var results = contacts.filter(contact => contact._id === contactId)
    res.json(results[0])
})

app.post(entity, function (req, res) {
    console.log('POST::contact')
    const contact = req.body;
    contact._id = uniqid()
    contacts.push(contact)
    res.json({contact})
})

app.put(`${entity}/:id`, checkExistingContact, function (req, res) {
    console.log('PUT::contact')
    const contactId = req.params.id;
    const updatedContact = req.body;

    contacts = contacts.map(contact => contact._id === contactId ? updatedContact : contact)
    res.json({messgae: 'contact updated successfully!'})
})

app.delete(`${entity}/:id`, checkExistingContact, function (req, res) {
    console.log('DELETE::contact')

    const contactId = req.params.id;
    contacts = contacts.filter(contact => contact._id !== contactId)
    res.json({messgae: 'contact deleted successfully!'})
})

app.listen(3000, () => {
    console.log(`server is ready at ${baseUrl}`);
	console.log(`GET (list): \t\t ${baseUrl}`);
	console.log(`GET (single): \t\t ${baseUrl}/{id}`);
    console.log(`POST (create): \t\t ${baseUrl}`);
    console.log(`PUT (update): \t\t ${baseUrl}/{id}`);
    console.log(`DELETE: \t\t ${baseUrl}/{id}`);
})