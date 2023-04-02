import {CardTypes} from '../../Cards/Card/Card.types';
import {CardsProps} from '../../Cards/Cards.types';

export interface ManufacturerFormProps {
  cards: CardsProps['copyCards'];
  displayedFilteredCards: Array<CardTypes>;
}

export enum ManufacturerType {
  'Россия' = 'Россия',
  'Китай' = 'Китай',
  'Германия' = 'Германия',
  'Беларусь' = 'Беларусь',
  'Франция' = 'Франция',
  'Южная Корея' = 'Южная Корея',
  'Италия' = 'Италия',
}
