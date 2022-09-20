import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Teste se a página contém um heading h2 com o texto Encountered pokémons', () => {
  renderWithRouter(<App />);
  const testPage = screen.getByRole('heading', { name: /encountered pokémons/i });
  expect(testPage).toBeInTheDocument(/Encountered pokémons/i);
});

test('Testando o se é exibido o Próximo pokemon clicado', () => {
  renderWithRouter(<App />);
  const clicando = screen.getByRole('button', { name: /próximo pokémon/i });
  expect(clicando).toBeInTheDocument(/Próximo pokémon/i);
  userEvent.click(clicando);
  // Não deve esquecer do botão de clique quando for fazer o teste relacionado a click
  const charmander = screen.getByRole('img', { name: /charmander sprite/i });
  expect(charmander).toBeInTheDocument();
  userEvent.click(clicando);

  const caterpie = screen.getByRole('img', { name: /caterpie sprite/i });
  expect(caterpie).toBeInTheDocument();
  userEvent.click(clicando);

  const ekans = screen.getByRole('img', { name: /ekans sprite/i });
  expect(ekans).toBeInTheDocument();
  userEvent.click(clicando);

  const alakazam = screen.getByRole('img', { name: /alakazam sprite/i });
  expect(alakazam).toBeInTheDocument();
  userEvent.click(clicando);

  const mew = screen.getByRole('img', { name: /mew sprite/i });
  expect(mew).toBeInTheDocument();
  userEvent.click(clicando);

  const rapidash = screen.getByRole('img', { name: /rapidash sprite/i });
  expect(rapidash).toBeInTheDocument();
  userEvent.click(clicando);

  const snorlax = screen.getByRole('img', { name: /snorlax sprite/i });
  expect(snorlax).toBeInTheDocument();
  userEvent.click(clicando);

  const dragonair = screen.getByRole('img', { name: /dragonair sprite/i });
  expect(dragonair).toBeInTheDocument();
  userEvent.click(clicando);

  const pikachu = screen.getByRole('img', { name: /pikachu sprite/i });
  expect(pikachu).toBeInTheDocument();
});

test('Teste se é exibido o próximo pokémon da lista quando o botao next é click', () => {
  renderWithRouter(<App />);
  const eletric = screen.getByRole('button', { name: /electric/i });
  expect(eletric).toBeInTheDocument(/electric/i);

  const fire = screen.getByRole('button', { name: /fire/i });
  expect(fire).toBeInTheDocument(/fire/i);

  const bug = screen.getByRole('button', { name: /bug/i });
  expect(bug).toBeInTheDocument(/bug/i);

  const poison = screen.getByRole('button', { name: /poison/i });
  expect(poison).toBeInTheDocument(/poison/i);

  const psychic = screen.getByRole('button', { name: /psychic/i });
  expect(psychic).toBeInTheDocument(/psychic/i);

  const normal = screen.getByRole('button', { name: /normal/i });
  expect(normal).toBeInTheDocument(/normal/i);

  const dragon = screen.getByRole('button', { name: /dragon/i });
  expect(dragon).toBeInTheDocument(/dragon/i);

  const all = screen.getByRole('button', { name: /all/i });
  expect(all).toBeInTheDocument();

  const nums = 7;
  const buttonsFilter = screen.getAllByTestId('pokemon-type-button');
  expect(buttonsFilter.length).toBe(nums);
});

test('Teste se a Pokédex contém um botão para resetar o filtro:', () => {
  renderWithRouter(<App />);
  const buttonAll = screen.getByRole('button', { name: /all/i });
  userEvent.click(buttonAll);
});
