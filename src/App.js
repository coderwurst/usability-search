import React from 'react';
import AlgoliaPlaces from 'algolia-places-react';
import TextField from '@material-ui/core/TextField';


import './App.css';

class App extends React.Component {

  
  constructor(props) {
    super(props)
    this.state = {
        addressOne: 'Bitte suchen...',
        addressTwo: '',
        streetNumber: ''
      }
    this.handleChange = this.handleChange.bind(this)
    this.streetNumberChange = this.streetNumberChange.bind(this)
  }

  handleChange = suggestion => {
    if(suggestion) {
      this.setState({ addressInput: `${suggestion.name}, ${suggestion.city}, 
                                    ${suggestion.administrative}, ${suggestion.country}`,
                      addressOne: `${suggestion.name}`, 
                      addressTwo: `${suggestion.postcode} ${suggestion.city}`
                    });
    }
  }

  streetNumberChange = event => {
    if(event.target.value) {  
      this.setState({
            streetNumber: event.target.value
        });
      }
  }

  // TODO: styling
  render() {           
    return (
        <div className="App">
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <div className="content">
            <header className="App-header">
            </header>
            <h1>Verfügbarkeit prüfen</h1>
            <p>Bitte gib deine Adresse ein. Dann prüfen wir direkt, ob wir dir MagentaEINS Pure anbieten können.</p>
          
          <form>
            <AlgoliaPlaces
              name='addressInput'
              placeholder='Straße, Stadt oder PLZ suchen'
              options={{
                appId: 'my-app-id',
        		    apiKey: 'sharing-is-caring',
                language: 'de',
                countries: ['de'],
                type: 'address'
                // Other options from https://community.algolia.com/places/documentation.html#options
              }}
              className='doesNotBelong'
              onChange={ (result) => 
              this.handleChange(result.suggestion) }
              />
              <TextField
                id="Hausnummer"
                label="Hausnummer"
                value={ this.state.streetNumber }
                margin="normal"
                onChange={ (event) => 
                  this.streetNumberChange(event) }
                />
              
              <p className="searchParamsTitle">Adresse zu prüfen</p>
              <p className="searchParams">{ this.state.addressOne } { this.state.streetNumber }</p>
              <p className="searchParams">{ this.state.addressTwo }</p>
            </form> 
            <button className="sendButton">Adresse prüfen</button>
          </div>
          <footer className="footer"/>
        </div>
      );
    }
  }
export default App;
