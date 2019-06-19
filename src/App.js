import React, { Component } from 'react';

class ContactList extends Component {
    render() {
        const people = this.props.contacts;

        return (
            <ol>
                {people.map((person) => (
                    <li key={person.name}> {person.name} </li>
                ))}
            </ol>
        )
    }
}


class App extends Component {
    render() {
        return (
            <div className="App">
                <ContactList contacts={[
                    { name: 'Amanda' },
                    { name: 'Karen' },
                    { name: 'Richard'}
                ]} />
                <ContactList contacts={[
                    { name: 'Simona' },
                    { name: 'Iasmina' },
                    { name: 'Andrei'}
                ]} />
                <ContactList contacts={[
                    { name: 'Bubu' },
                    { name: 'Richard' },
                    { name: 'Alex'}
                ]} />
            </div>
          );
    }

}

export default App;
