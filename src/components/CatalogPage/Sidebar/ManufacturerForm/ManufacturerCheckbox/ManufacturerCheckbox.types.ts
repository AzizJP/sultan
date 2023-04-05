import {CardTypes} from '../../../Cards/Card/Card.types';
import {ManufacturerType} from '../ManufacturerForm.types';

export interface ManufacturerCheckboxProps {
  manufacturer: keyof typeof ManufacturerType;
  filteredCards: Array<CardTypes>;
}
