import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { cleanup, render } from '@testing-library/react'
import { exportAllDeclaration } from '@babel/types';

  afterEach(cleanup)
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders search field', () => {
    const { queryByLabelText } = render(<App/>)
    expect(queryByLabelText('PLZ, Stadt, Straße und Hausnummer')).toBeTruthy()
  });
