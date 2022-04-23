import React, { FormEventHandler, ReactNode } from 'react';
import { FormContext } from './FormProvider';
import { FormInstance } from './interfaces/FormInstance';
import { FormValues } from './interfaces/FormValues';

export interface FormProps {
	children: ReactNode;
	form: FormInstance;
	onSubmit: (formValues: FormValues) => void;
}

export const Form = ({ children, form, onSubmit }: FormProps) => {
	const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		onSubmit(form.values);
	};

	return (
		<FormContext.Provider value={{ form }}>
			<form onSubmit={handleSubmit}>{children}</form>
		</FormContext.Provider>
	);
};
