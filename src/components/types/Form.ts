import { MapToWith } from '../types';
import { FieldValue } from './Field';
import { ValidationRule } from './Validation';

export interface FormValues {
	[key: string]: FieldValue | FormValues;
}

export interface FormInstance<T extends FormValues = {}> {
	values: T;
	validations?: MapToWith<T, ValidationRule>;
	validate?: (formValues: T) => boolean;
}
