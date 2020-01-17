import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './components/Header';
import PlayerCard from './components/PlayerCard';

// This test checks to see if the <App /> component will render without crashing
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// This test checks to see if the <Header /> component renders by looking for the text "athlete" which would be found in the title, "Athlete List"
test('renders Header component', () => {
  const { getByText } = rtl.render(<Header />);
  const displayElement = getByText(/athlete/i);
  expect(displayElement).toBeInTheDocument();
});

// This test checks to see if the <PlayerCard /> component renders by looking for the text "name" which would be found in each player's card
test('renders PlayerCard component', () => {
  const { getByText } = rtl.render(<PlayerCard />);
  const displayElement = getByText(/name/i);
  expect(displayElement).toBeInTheDocument();
});

// This test checks to see if an element with the class of "App" is rendered by looking for child element in <App /> with a class of "App"
test('renders App class', () => {
  const { container } = rtl.render(<App />);
  expect(container.firstChild.classList.contains('App')).toBe(true);
})