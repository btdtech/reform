import { createContext, ReactNode, useContext } from 'react';
import { FormInstance } from './types';

export interface FormContextProps {
	form: FormInstance;
}

export const FormContext = createContext<FormContextProps>({
	form: { values: {}, setFieldValue: () => {} },
});

export interface FormProviderProps {
	children: ReactNode;
}

export const useFormContext = () => useContext(FormContext);
