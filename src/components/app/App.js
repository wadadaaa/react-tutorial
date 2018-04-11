import React, {
  Component
} from 'react';
import './App.scss';
import Header from '../header/Header';
import ContactList from '../contactList/ContactList'

class App extends Component {
  
  state = {
    contacts: [
      {name:"Anna", title: "apprentice"}, 
      {name: "Moshe", title: "teacher"}
    ]
  }
  render() {
    return ( 
      <div className="app" >
        <Header title='Contacts' />
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}
export default App;
