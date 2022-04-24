import {
	FieldErrorDetails,
	FieldValue,
	FormValues,
	MapToWith,
	NamePath,
	ValidationRule,
} from './types';

export const getNamePathValue = (
	object: FormValues,
	namePath: NamePath
): FieldValue => {
	if (!Array.isArray(namePath)) {
		const val = object[namePath];

		if (typeof val === 'object') {
			return '';
		}

		return val === undefined ? '' : val;
	}

	if (!namePath.length) {
		return '';
	}

	const _namePath = [...namePath];
	const firstIndex = _namePath.shift();

	if (!firstIndex) {
		throw new Error('Invalid name path.');
	}

	const val = object[firstIndex];

	if (!Array.isArray(val) && typeof val === 'object') {
		return getNamePathValue(val, _namePath);
	}

	return val || '';
};

export const validateFields = <T extends FormValues>(
	formValues: FormValues,
	validations: MapToWith<T, ValidationRule>
) => {
	const errors: { [key: string]: FieldErrorDetails } = {};

	for (const k in formValues) {
		const currentValue = formValues[k];
		const currentRule = validations[k];

		if (!currentRule) {
			continue;
		}

		if (
			currentRule.required &&
			(typeof currentValue === 'undefined' || currentValue === null)
		) {
			errors[k] = {
				path: [k],
				message: `[${k}] is required.`,
			};
		}

		if (typeof currentValue === 'object') {
			continue;
		}
		if (typeof currentValue === 'number') {
			continue;
		}

		if (typeof currentValue === 'string') {
			if (
				currentRule.minLength &&
				currentRule.minLength > currentValue.length
			) {
				errors[k] = {
					path: [k],
					message: `[${k}] cannot be less than ${currentRule.minLength} characters long.`,
				};
			}

			if (
				currentRule.maxLength &&
				currentRule.maxLength < currentValue.length
			) {
				errors[k] = {
					path: [k],
					message: `[${k}] cannot be more than ${currentRule.maxLength} characters long.`,
				};
			}
		}
	}

	return errors;
};
