import {CardTypes} from '../components/CatalogPage/Cards/Card/Card.types';
import {FILTER} from '../components/CatalogPage/SortFilterSection/FilterButton/FilterButton.types';
import {SortTypes} from '../components/CatalogPage/SortFilterSection/Sort/SortPopup/SortPopup.types';

export interface Basket {
  basket: Cards['cards'];
}

export interface Cards {
  cards: Array<CardTypes>;
}

export interface Popup {
  isPopupOpen: boolean;
}

export interface Breakpoint {
  isDesktop: boolean;
  isLaptop: boolean;
}

export interface CardName {
  cardName: string;
}

export interface Counter {
  count: number;
}

export interface PageCounter {
  page: number;
}

export interface SortType {
  currentSortType: keyof typeof SortTypes | '';
}

export interface CardInfo {
  isOpenDescription: boolean;
  isOpenSpecification: boolean;
}

export interface ActiveFilter {
  activeFilter: keyof typeof FILTER | '';
}
