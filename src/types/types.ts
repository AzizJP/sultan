import {CardTypes} from '../components/Card/Card.types';

export interface Basket {
  basket: Array<CardTypes>;
}
export interface Cards {
  cards: Array<CardTypes>;
}

export interface Popup {
  isPopupOpen: boolean;
}

export interface Breakpoint {
  isDesktop: boolean;
}

export interface CardName {
  cardName: string;
}

export interface Card {
  card: CardTypes;
}

export interface Counter {
  count: number;
}

export interface CardInfo {
  isOpenDescription: boolean;
  isOpenSpecification: boolean;
}
