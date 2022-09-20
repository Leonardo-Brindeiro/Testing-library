import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import About from '../pages/About';

test('Testanto minhas tags e imagem no About.js', () => {
  renderWithRouter(<About />);
  const testandoTag = screen.getByRole('heading', { name: /about pokédex/i });
  expect(testandoTag).toBeInTheDocument();

  const testLink = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
  const testImage = screen.getByRole('img', { name: /Pokédex/i });

  expect(testImage).toHaveAttribute('src', testLink);
});
