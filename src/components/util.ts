import { FormValues } from './interfaces/FormValues';
import { FieldValue } from './types/FieldValue';
import { NamePath } from './types/NamePath';

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
