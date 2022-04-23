import { FormValues } from './FormValues';

export interface FormInstance<T extends FormValues = {}> {
	values: T;
}
