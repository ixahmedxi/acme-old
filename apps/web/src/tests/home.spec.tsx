import { render, screen } from '@testing-library/react';

import Home from '@/pages';

describe('Home page', () => {
  it('should render', () => {
    render(<Home />);

    expect(screen.getByRole('heading')).toHaveTextContent('Home page');
  });
});
