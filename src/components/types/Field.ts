export interface FieldErrorDetails {
	path: string[];
	message: string;
}

export type FieldError<T> = {
	[key in keyof T]: FieldErrorDetails;
};

export type FieldValue = string | number | boolean | string[] | number[];
