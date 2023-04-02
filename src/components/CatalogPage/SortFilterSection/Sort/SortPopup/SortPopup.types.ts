export enum SortTypes {
  'Цена по возрастанию' = 'Цена по возрастанию',
  'Цена по убыванию' = 'Цена по убыванию',
  'Название по возрастанию' = 'Название по возрастанию',
  'Название по убыванию' = 'Название по убыванию',
}

export interface SortPopupProps {
  handleSortTypeChange(type: keyof typeof SortTypes): void;
  handlePopupClose(): void;
}
