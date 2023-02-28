import { render, screen, within } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders personal information', () => {
    render(<App />);
    const linkElement = screen.getByText(/Personal Information/i);
    expect(linkElement).toBeInTheDocument();
  });

  it.each([
    { name: "Add user" },
    { name: "Save" },
  ])('renders button %s', ({ name }) => {
    render(<App />);
    const linkElement = screen.getByRole("button", { name });
    expect(linkElement).toBeInTheDocument();
  });
})

describe('Form', () => {
  it.each([
    { name: "First name" },
    { name: "Last name" },
    { name: "Email address" },
    { name: "Title" },
    { name: "Role" },
  ])('renders form field %s', ({ name }) => {
    render(<App />);
    const formElement = within(screen.getByTestId(/form/i)).getByText(name);
    expect(formElement).toBeInTheDocument();
  });

})

describe('Users', () => {
  it.each([
    { name: "Name" },
    { name: "Email" },
    { name: "Title" },
    { name: "Role" },
  ])('renders users field %s', ({ name }) => {
    render(<App />);
    const formElement = within(screen.getByTestId(/users/i)).getByText(name);
    expect(formElement).toBeInTheDocument();
  });
})