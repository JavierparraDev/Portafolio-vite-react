import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Contact from '../pages/Contact';

const renderContact = () =>
  render(
    <HelmetProvider>
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    </HelmetProvider>
  );

describe('Contact', () => {
  it('renders the form with accessible labels', () => {
    renderContact();

    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Send message' })).toBeInTheDocument();
  });

  it('shows a confirmation state after submitting', () => {
    renderContact();

    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Ana' } });
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'ana@example.com' }
    });
    fireEvent.change(screen.getByLabelText('Message'), {
      target: { value: 'Hola!' }
    });

    fireEvent.click(screen.getByRole('button', { name: 'Send message' }));
    expect(screen.getByText('Message sent')).toBeInTheDocument();
  });
});
