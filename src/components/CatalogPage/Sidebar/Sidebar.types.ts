import {CardTypes} from '../Cards/Card/Card.types';

export interface InputValueTypes {
  first: number;
  second: number;
}

export interface SidebarProps {
  filteredCards: Array<CardTypes>;
}
