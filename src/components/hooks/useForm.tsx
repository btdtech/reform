import { useRef } from 'react';
import { FormInstance, FormValues } from '../types';
import _ from 'lodash';

export interface UseFormProps<T extends FormValues = {}> {
	initialValues?: T;
}

export const useForm = <T extends FormValues>({
	initialValues,
}: UseFormProps<T> = {}): [FormInstance] => {
	const formRef = useRef<FormInstance>({
		values: initialValues || {},
		setFieldValue: (path, newValue) => {
			const form = formRef.current;
			form.values = _.set({ ...form.values }, path, newValue);
		},
	});

	return [formRef.current];
};
