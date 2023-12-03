import {
  changeToDiscover,
  changeToHipHop,
  changeToPop,
  changeToRock,
} from '../../redux/currentMainView/currentMainViewSlice';
import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit/dist/createAction';

type linksType = linkType[];

interface linkType {
  name: string;
  dispatchAction: ActionCreatorWithoutPayload;
}

export const links: linksType = [
  {
    name: 'Discover',
    dispatchAction: changeToDiscover,
  },
  {
    name: 'Pop',
    dispatchAction: changeToPop,
  },
  {
    name: 'Hip-Hop',
    dispatchAction: changeToHipHop,
  },
  {
    name: 'Rock',
    dispatchAction: changeToRock,
  },
];
