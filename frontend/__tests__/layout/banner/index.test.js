import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Banners from '../../../src/layout/banner';
import * as bannerApi from '../../../src/apis/banner';

jest.mock('../../../src/apis/banner');

describe('Banners Component', () => {
  const mockBanners = [
    { bannerImageUrl: 'https://example.com/image1.jpg', bannerImageAlt: 'Banner 1' },
    { bannerImageUrl: 'https://example.com/image2.jpg', bannerImageAlt: 'Banner 2' },
  ];

  beforeEach(() => {
    (bannerApi.getBanners).mockResolvedValue(mockBanners);
  });

  test('renders the first banner image initially', async () => {
    render(<Banners />);

    await waitFor(() => {
      const imageElement = screen.getByRole('img', { name: /banner 1/i });
      expect(imageElement).toBeInTheDocument();
      expect(imageElement).toHaveAttribute('src', mockBanners[0].bannerImageUrl);
    });
  });

  test('changes to the next banner on right button click', async () => {
    render(<Banners />);

    await waitFor(() => screen.getByRole('img', { name: /banner 1/i }));

    const rightButton = screen.getByRole('button', { name: '>' });
    fireEvent.click(rightButton);

    await waitFor(() => {
      const imageElement = screen.getByRole('img', { name: /banner 2/i });
      expect(imageElement).toBeInTheDocument();
      expect(imageElement).toHaveAttribute('src', mockBanners[1].bannerImageUrl);
    });
  });

  test('changes to the previous banner on left button click', async () => {
    render(<Banners />);

    await waitFor(() => screen.getByRole('img', { name: /banner 1/i }));

    const leftButton = screen.getByRole('button', { name: '<' });
    fireEvent.click(leftButton);

    await waitFor(() => {
      const imageElement = screen.getByRole('img', { name: /banner 2/i });
      expect(imageElement).toBeInTheDocument();
      expect(imageElement).toHaveAttribute('src', mockBanners[1].bannerImageUrl);
    });
  });
});
