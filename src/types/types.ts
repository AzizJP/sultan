import {CardsProps} from '../components/CatalogPage/Cards/Cards.types';
import {ManufacturerType} from '../components/CatalogPage/Sidebar/ManufacturerForm/ManufacturerForm.types';
import {FILTER} from '../components/CatalogPage/SortFilterSection/FilterButton/FilterButton.types';
import {SortTypes} from '../components/CatalogPage/SortFilterSection/Sort/SortPopup/SortPopup.types';

export interface Basket {
  basket: CardsProps['copyCards'];
}

export interface Cards {
  cards: CardsProps['copyCards'];
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
  activeType: keyof typeof FILTER | '';
  activePrice: [number, number];
  activeSort: keyof typeof SortTypes | '';
  activeManufacturer: Array<keyof typeof ManufacturerType>;
}

export interface CheckboxValuesType {
  checkboxValues: Array<keyof typeof ManufacturerType>;
}

export interface SidebarSearchType {
  cardAfterSearch: Array<keyof typeof ManufacturerType>;
}
