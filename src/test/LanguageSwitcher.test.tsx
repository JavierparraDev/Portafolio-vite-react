import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/layout/Header';

describe('LanguageSwitcher', () => {
  it('toggles the document language between en and es', () => {
    document.documentElement.lang = 'en';
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(document.documentElement.lang).toBe('en');
    fireEvent.click(screen.getByRole('button', { name: 'Toggle language' }));
    expect(document.documentElement.lang).toBe('es');
  });
});
