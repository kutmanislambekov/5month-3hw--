import { GUESS, RESTART } from '../types';

export const guessNumber = (number) => ({
  type: GUESS,
  payload: number,
});

export const restartGame = () => ({
  type: RESTART,
});
