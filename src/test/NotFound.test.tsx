import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import NotFound from '../pages/NotFound';
import Seo from '../components/Seo';

const renderWithRoutes = (initialPath: string) =>
  render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[initialPath]}>
        <Routes>
          <Route path="/sobre-mi" element={<div>About page content</div>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MemoryRouter>
    </HelmetProvider>
  );

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('NotFound', () => {
  it('renders the 404 page for unknown routes', () => {
    renderWithRoutes('/ruta-inexistente');

    expect(screen.getByText('Page not found')).toBeInTheDocument();
    const homeLinks = screen.getAllByRole('link', { name: 'Home' });
    expect(homeLinks.length).toBeGreaterThan(0);
    expect(homeLinks[0]).toHaveAttribute('href', '/');
  });

  it('redirects English aliases to the canonical Spanish route', () => {
    renderWithRoutes('/about');

    expect(screen.getByText('About page content')).toBeInTheDocument();
    expect(screen.queryByText('Page not found')).not.toBeInTheDocument();
  });

  it('normalizes a trailing slash into the canonical route', () => {
    renderWithRoutes('/sobre-mi/');

    expect(screen.getByText('About page content')).toBeInTheDocument();
  });

  it('marks the 404 page as noindex', () => {
    vi.stubGlobal('requestAnimationFrame', (cb: FrameRequestCallback) => {
      cb(0);
      return 1;
    });
    vi.stubGlobal('cancelAnimationFrame', () => {});

    render(
      <HelmetProvider>
        <Seo noindex title="Page not found" description="x" />
      </HelmetProvider>
    );

    const robotsMeta = document.querySelector('meta[name="robots"]');
    expect(robotsMeta).toHaveAttribute('content', 'noindex, follow');
  });
});
