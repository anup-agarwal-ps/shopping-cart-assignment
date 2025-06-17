import { render, screen } from '@testing-library/react';
import { Footer } from '../../../src/layout/footer';

describe('Footer Component', () => {
  test('renders the footer with correct text', () => {
    render(<Footer />);

    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
    expect(footerElement).toHaveTextContent('Copyright © 2011-2018 Sabka Bazaar Grocery Supplies Pvt. Ltd.');
  });

  test('applies the correct CSS classes', () => {
    render(<Footer />);

    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toHaveClass('bg-gray-300 h-[60px] w-full mt-2.5 max-[1180px]:mt-0');

    const spanElement = screen.getByText('Copyright © 2011-2018 Sabka Bazaar Grocery Supplies Pvt. Ltd.');
    expect(spanElement).toHaveClass('w-[90%] mx-auto h-full flex items-center max-[1180px]:justify-center');
  });
});
