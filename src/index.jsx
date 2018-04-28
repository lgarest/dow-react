/* 3rd party imports */
import React from 'react';
import { render } from 'react-dom';
import { Client } from 'boardgame.io/react';

/* relative imports */
import MainGame from './main-game';
import Board from './components/board';

const App = Client({
  game: MainGame,
  board: Board,
});


render(<App />, document.getElementById('app'));
