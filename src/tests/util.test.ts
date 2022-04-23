import { FormValues } from '../components';
import { getNamePathValue } from '../components/util';

describe('getNamePathValue', () => {
	it('returns value', () => {
		const formData: FormValues = {
			givenName: 'Henry',
		};
		const result = getNamePathValue(formData, 'givenName');
		expect(result).toBe('Henry');
	});

	it('returns value of nested object', () => {
		const formData: FormValues = {
			person: {
				givenName: 'Henry',
			},
		};
		const result = getNamePathValue(formData, ['person', 'givenName']);
		expect(result).toBe('Henry');
	});
});
