import {ActiveFilter, Breakpoint} from '../../../types/types';

export interface SortFilterSectionProps {
  activeType: ActiveFilter['activeType'];
  isDesktop: Breakpoint['isDesktop'];
}
