import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Event Registration/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders EventList component', () => {
  render(<App />);
  const eventListElement = screen.getByText(/All Events/i);
  expect(eventListElement).toBeInTheDocument();
});

test('renders SelectedEvents component', () => {
  render(<App />);
  const selectedEventsElement = screen.getByText(/Selected Events/i);
  expect(selectedEventsElement).toBeInTheDocument();
});
