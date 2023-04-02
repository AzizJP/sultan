import {InputValueTypes} from '../Sidebar.types';

export interface PriceFormProps {
  inputValue: InputValueTypes;
  handleInputValueChange(value: InputValueTypes): void;
}
