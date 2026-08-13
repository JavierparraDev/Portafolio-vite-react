import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/layout/Header';

const renderHeader = (route = '/') =>
  render(
    <MemoryRouter initialEntries={[route]}>
      <Header />
    </MemoryRouter>
  );

describe('Header', () => {
  it('renders the main navigation links', () => {
    renderHeader();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('marks the active route with aria-current="page"', () => {
    renderHeader('/proyectos');
    const projectsLink = screen.getByText('Projects');
    expect(projectsLink).toHaveAttribute('aria-current', 'page');
  });

  it('toggles dark mode class on document', () => {
    renderHeader();
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    fireEvent.click(screen.getByRole('button', { name: 'Toggle dark mode' }));
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(localStorage.getItem('darkMode')).toBe('true');
  });
});
