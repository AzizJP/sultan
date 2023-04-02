import {ActiveFilter, Breakpoint} from '../../../types/types';
import {CardTypes} from '../Cards/Card/Card.types';

export interface SortFilterSectionProps {
  activeType: ActiveFilter['activeType'];
  isDesktop: Breakpoint['isDesktop'];
  filteredCards: Array<CardTypes>;
}
