import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import FavoritePokemons from '../pages/FavoritePokemons';

test('Testando meu pokemon favorites ', () => {
  renderWithRouter(<FavoritePokemons />);
  const meuElemento = screen.getByText(/no favorite pokemon found/i); // grande sapo que me traz o teste
  expect(meuElemento).toBeInTheDocument();
});
