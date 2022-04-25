import { FieldValue } from './Field';
import { NamePath } from './Util';

export interface FormValues {
	[key: string]: FieldValue | FormValues;
}

export interface FormInstance<T extends FormValues = {}> {
	values: T;
	setFieldValue: (path: NamePath, newValue: FieldValue) => void;
}
