import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Requisito 6', () => {
  it('Testando informações corretas dos pokemons.', () => {
    renderWithRouter(<App />);
    const nomeDoPokemon = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(nomeDoPokemon).toBeInTheDocument();

    const tipoDopoke = screen.getByTestId('pokemon-type');
    expect(tipoDopoke.innerHTML).toBe('Electric');

    const pokemonWeight = screen.getByText(/average weight: 6\.0 kg/i);
    expect(pokemonWeight).toBeInTheDocument();

    const pokeImage = screen.getByAltText('Pikachu sprite');
    expect(pokeImage.src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    expect(pokeImage.alt).toBe('Pikachu sprite');
  });
  it('Testando o botão de "More details".', () => {
    const { history } = renderWithRouter(<App />);
    const maisDetalhesDoBotão = screen.getByText(/More details/i);
    expect(maisDetalhesDoBotão).toBeInTheDocument('http://localhost/pokemons/25');
    userEvent.click(maisDetalhesDoBotão);
    expect(history.location.pathname).toBe('/pokemons/25');

    const botaoFavorito = document.getElementById('favorite');
    expect(botaoFavorito).toBeDefined();
    userEvent.click(botaoFavorito);

    const Image = screen.getByAltText('Pikachu is marked as favorite');
    expect(Image.src).toBe('http://localhost/star-icon.svg');
    expect(Image).toBeDefined();
  });
});
