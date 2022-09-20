import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import FavoritePokemons from '../pages/FavoritePokemons';

test('Teste o componente favorites pokemon ', () => {
  renderWithRouter(<FavoritePokemons />);
  const elementFavirites = screen.getByText(/no favorite pokemon found/i);
  expect(elementFavirites).toBeInTheDocument();
});
