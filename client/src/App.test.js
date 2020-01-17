import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './components/Header';
import PlayerCard from './components/PlayerCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders Header component', () => {
  const { getByText } = rtl.render(<Header />);
  const displayElement = getByText(/athlete/i);
  expect(displayElement).toBeInTheDocument();
});

test('renders PlayerCard component', () => {
  const {getByText} = rtl.render(<PlayerCard />);
  const displayElement = getByText(/name/i);
  expect(displayElement).toBeInTheDocument();
});