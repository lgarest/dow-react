/* 3rd party imports */
import { Client } from 'boardgame.io/react';

/* Relative imports */
import MainGame from '../main-game';
import Board from '../components/board';


const App = Client({
  game: MainGame,
  board: Board,
});

export default App;
