import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Testimonials from '../components/sections/Testimonials';

describe('Testimonials Component', () => {
  it('renders star ratings with accessible role and label', () => {
    render(<Testimonials />);
    const ratingContainers = screen.getAllByRole('img', { name: '5 out of 5 stars' });
    expect(ratingContainers.length).toBeGreaterThan(0);
  });

  it('renders quotes with dir="auto" attribute', () => {
    render(<Testimonials />);
    const quotes = screen.getAllByText(/"/i);
    expect(quotes.length).toBeGreaterThan(0);
    quotes.forEach((quote) => {
      expect(quote).toHaveAttribute('dir', 'auto');
    });
  });
});
