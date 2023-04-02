import {ReactNode} from 'react';

export interface FormProps {
  placeholder: string;
  formClassName: string;
  inputClassName?: string;
  inputValue?: string;
  onChange?(): void;
  children: ReactNode;
}
