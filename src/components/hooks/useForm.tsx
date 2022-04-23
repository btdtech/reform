import { useRef } from 'react';
import { FormInstance } from '../interfaces/FormInstance';
import { FormValues } from '../interfaces/FormValues';

export interface UseFormProps<T extends FormValues = {}> {
	initialValues?: T;
}

export const useForm = <T extends FormValues = {}>({
	initialValues,
}: UseFormProps<T> = {}): [FormInstance] => {
	const formRef = useRef<FormInstance>({
		values: initialValues || {},
	});

	return [formRef.current];
};
