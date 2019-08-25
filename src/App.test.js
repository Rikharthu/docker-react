import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders without second time', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders without third time', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});