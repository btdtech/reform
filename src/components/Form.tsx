import React, { CSSProperties, FormEventHandler, ReactNode } from 'react';
import { FormContext } from './FormProvider';
import { FormInstance, FormValues } from './types';

export interface FormProps {
	children: ReactNode;
	form: FormInstance;
	onSubmit: (formValues: FormValues) => void;
	style?: CSSProperties;
}

export const Form = ({ children, form, onSubmit, style }: FormProps) => {
	const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		onSubmit(form.values);
	};

	return (
		<FormContext.Provider value={{ form }}>
			<form onSubmit={handleSubmit} style={{ ...style }}>
				{children}
			</form>
		</FormContext.Provider>
	);
};
