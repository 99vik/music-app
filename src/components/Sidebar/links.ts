import {
  changeToDiscover,
  changeToEDM,
  changeToHipHop,
  changeToJazz,
  changeToPop,
  changeToRnB,
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
  {
    name: 'R&B',
    dispatchAction: changeToRnB,
  },
  {
    name: 'Jazz',
    dispatchAction: changeToJazz,
  },
  {
    name: 'EDM',
    dispatchAction: changeToEDM,
  },
];
