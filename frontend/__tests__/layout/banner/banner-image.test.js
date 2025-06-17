import { render, screen } from '@testing-library/react';
import BannerImage from '../../../src/layout/banner/banner-image';

describe('BannerImage Component', () => {
  const bannerImageUrl = 'https://example.com/image.jpg';
  const bannerImageAlt = 'Example Banner Image';

  test('renders the image with correct src and alt attributes', () => {
    render(<BannerImage bannerImageUrl={bannerImageUrl} bannerImageAlt={bannerImageAlt} />);

    const imageElement = screen.getByRole('img');
    expect(imageElement).toHaveAttribute('src', bannerImageUrl);
    expect(imageElement).toHaveAttribute('alt', bannerImageAlt);
  });

  test('applies the correct CSS classes', () => {
    render(<BannerImage bannerImageUrl={bannerImageUrl} bannerImageAlt={bannerImageAlt} />);

    const imageElement = screen.getByRole('img');
    expect(imageElement).toHaveClass('w-full m-auto lg:w-8/12');
  });
});
