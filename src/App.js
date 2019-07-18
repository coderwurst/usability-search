import React from 'react';
import AlgoliaPlaces from 'algolia-places-react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


import './App.css';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 512,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </header>
      <h1>Lorem Ipsum</h1>
      <p>Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Donec ac odio tempor orci dapibus ultrices.</p>
      <TextField
        id="search-box"
        label="PLZ, Stadt, Straße und Hausnummer"
        className={classes.textField}
        margin="normal"
      />


      <AlgoliaPlaces
            placeholder='PLZ, Stadt, Straße und Hausnummer'
            className={classes.textField}
            options={{
              appId: 'my-app-id',
        		  apiKey: 'sharing-is-caring',
              style: false,
              language: 'de',
              countries: ['de'],
              type: 'address'
              // Other options from https://community.algolia.com/places/documentation.html#options
            }}
          />
 
      <footer className="App-footer">coderwurst 2019</footer>
    </div>
  );
}

export default App;
