import React from 'react';
import { render } from '@testing-library/react';
import { BasicTextarea } from './textarea.composition';

it('should render with the correct text', () => {
  const { getByRole } = render(<BasicTextarea />);
  const rendered = getByRole('textbox');
  expect(rendered).toBeInTheDocument();
});
