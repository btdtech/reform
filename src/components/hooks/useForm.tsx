import { useRef, useState } from 'react';
import {
	MapToWith,
	FieldError,
	FormInstance,
	FormValues,
	ValidationRule,
	FieldErrorDetails,
} from '../types';
import { validateFields } from '../util';

export interface UseFormProps<T extends FormValues = {}> {
	initialValues?: T;
	validations?: MapToWith<T, ValidationRule>;
}

export const useForm = <T extends FormValues = {}>({
	initialValues,
	validations,
}: UseFormProps<T> = {}): [FormInstance, { errors: FieldError<T> | null }] => {
	const [fieldErrors, setFieldErrors] = useState<FieldError<T> | null>(null);

	const validate = (formValues: FormValues): boolean => {
		if (!validations) {
			return true;
		}

		const errors = validateFields(formValues, validations);
		setFieldErrors(errors as FieldError<T>);

		if (!Object.keys(errors).length) {
			return true;
		}

		return false;
	};

	const formRef = useRef<FormInstance>({
		values: initialValues || {},
		validations,
		validate,
	});

	return [formRef.current, { errors: fieldErrors }];
};
