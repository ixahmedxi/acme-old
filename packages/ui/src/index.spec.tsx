import { render, screen } from '@testing-library/react';

import { Button } from '.';

describe('Button component', () => {
  it('should render', () => {
    render(<Button />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
