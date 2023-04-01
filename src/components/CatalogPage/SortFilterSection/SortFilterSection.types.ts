import {ActiveFilter, Breakpoint} from '../../../types/types';

export interface SortFilterSectionProps {
  activeFilter: ActiveFilter['activeFilter'];
  isDesktop: Breakpoint['isDesktop'];
}
