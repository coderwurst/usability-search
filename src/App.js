import React from 'react';
import AlgoliaPlaces from 'algolia-places-react';
import TextField from '@material-ui/core/TextField';


import './App.css';

class App extends React.Component {

  
  constructor(props) {
    super(props)
    this.state = {
        addressOne: '',
        addressTwo: ''
      }
    this.handleChange = this.handleChange.bind(this)
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

  // TODO: styling
  render() {           
    return (
        <div className="App">
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <div className="content">
            <header className="App-header">
            </header>
            <h1>Ut tristique et</h1>
            <p>Risus quis varius quam quisque id. Pretium fusce id velit ut tortor. Morbi tincidunt ornare massa.</p>
          
          <form>
            <AlgoliaPlaces
              
              name='addressInput'
              placeholder='PLZ, Stadt, Straße und Hausnummer'
              // className={ classes.textField }
              options={{
                appId: 'my-app-id',
        		    apiKey: 'sharing-is-caring',
                language: 'de',
                countries: ['de'],
                type: 'address'
                // Other options from https://community.algolia.com/places/documentation.html#options
              }}
              onChange={ (result) => 
              this.handleChange(result.suggestion) }
              />
              <div>
                <TextField
                id="filled-read-only-street-and-number"
                label="Straße und Hausnummer"
                value={ this.state.addressOne }
                // className={ classes.textField }
                margin="normal"
                InputProps={{
                  readOnly: true,
                }}
                variant="filled"
                />
              </div>
              <div>
                <TextField
                id="filled-read-only-city-and-postcode"
                label="Ort und PLZ"
                value={ this.state.addressTwo }
                // className={ classes.textField }
                margin="normal"
                InputProps={{
                  readOnly: true,
                }}
                variant="filled"
                />
              </div>
            </form> 
            <button>Augue lacus</button>
          </div>
          <footer className="footer"/>
        </div>
      );
    }
  }
export default App;