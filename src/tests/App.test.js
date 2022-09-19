import React from 'react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testando todos os links da barra de navegação', () => {
  test('Testandoos meus links', () => {
    renderWithRouter(<App />);

    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toBeInTheDocument(); // uso do Testing Playground

    const aboutLink = screen.getByRole('link', { name: /about/i });
    expect(aboutLink).toBeInTheDocument();

    const favoritesLink = screen.getByRole('link', { name: /favorite pokémons/i });
    expect(favoritesLink).toBeInTheDocument();
  });

  test('Testando redireciona o Link Home', () => {
    const { history } = renderWithRouter(<App />);
    const homeLink = screen.getByRole('link', { name: /home/i });

    userEvent.click(homeLink);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  test('Testando redireciona o Link Sobre', () => {
    const { history } = renderWithRouter(<App />);
    const aboutLink = screen.getByRole('link', { name: /about/i });

    userEvent.click(aboutLink);
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });

  test('Testando redireciona o Link Favorites Pokémon', () => {
    const { history } = renderWithRouter(<App />);
    const favoritesLink = screen.getByRole('link', { name: /favorite pokémons/i });

    userEvent.click(favoritesLink);
    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });

  test('Testando erro da pagina ', () => {
    const { history } = renderWithRouter(<App />);
    act(() => { history.push('/erro404'); });

    const errou = screen.getByRole('heading', { name: /page requested not found/i });

    expect(errou).toBeInTheDocument();
  });
});
