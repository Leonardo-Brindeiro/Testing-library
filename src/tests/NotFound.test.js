import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../pages/NotFound';

test('Teste o componente NotFound', () => {
  renderWithRouter(<NotFound />);
  const testandoNot = screen.getByRole('heading', { name: /page requested not found/i });
  expect(testandoNot).toBeInTheDocument();

  const image = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
  const elementSrc = screen.getByRole('img', {
    name: /Pikachu crying because the page requested was not found/i,
  });
  expect(elementSrc).toHaveAttribute('src', image);
});
