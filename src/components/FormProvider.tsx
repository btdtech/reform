import React, { createContext, ReactNode, useContext } from 'react';
import { FormInstance } from './interfaces/FormInstance';

export interface FormContextProps {
	form: FormInstance;
}

export const FormContext = createContext<FormContextProps>({
	form: { values: {} },
});

export interface FormProviderProps {
	children: ReactNode;
}

export const useFormContext = () => useContext(FormContext);
