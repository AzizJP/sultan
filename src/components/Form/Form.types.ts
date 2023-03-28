import {ReactNode} from 'react';

export interface FormProps {
  placeholder: string;
  width: string;
  height: string;
  backgroundColor?: string;
  children: ReactNode;
}
