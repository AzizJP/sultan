import {CardTypes} from '../../CatalogPage/Cards/Card/Card.types';

export interface AdminPageCardProps {
  card: CardTypes;
  handleCardsChange(newArr: Array<CardTypes>): void;
  cards: Array<CardTypes>;
}
