import {FormEvent} from 'react';

import {CardTypes} from '../../CatalogPage/Cards/Card/Card.types';

export interface AdminPageFormProps {
  handleCardChange(card: CardTypes): void;
  handleSubmit(evt: FormEvent<HTMLFormElement>): void;
  title: string;
  card: CardTypes;
}

export enum DimensionType {
  'г' = 'г',
  'мл' = 'мл',
  'шт' = 'шт',
}
