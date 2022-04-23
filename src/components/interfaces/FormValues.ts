import { FieldValue } from '../types/FieldValue';

export interface FormValues {
	[key: string]: FieldValue | FormValues;
}
