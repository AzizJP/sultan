import {ReactNode} from 'react';

export interface FormProps {
  placeholder: string;
  formClassName: string;
  inputClassName?: string;
  value?: string;
  handleValueChange?(value: string): void;
  handleSearch?(value: string): void;
  children: ReactNode;
}
