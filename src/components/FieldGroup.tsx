import React, {
	Children,
	cloneElement,
	CSSProperties,
	ReactElement,
	useState,
} from 'react';
import { FieldLabel } from './FieldLabel';
import { useFormContext } from './FormProvider';
import { FormValues } from './interfaces/FormValues';
import { NamePath } from './types/NamePath';
import { getNamePathValue } from './util';
import _ from 'lodash';

export interface FieldGroupProps {
	children: ReactElement[];
	name: NamePath;
	style?: CSSProperties;
	multiple?: boolean;
}

export const FieldGroup = ({ children, name, multiple }: FieldGroupProps) => {
	const { form } = useFormContext();
	const val = getNamePathValue(form.values as FormValues, name);

	const [fieldValue, setFieldValue] = useState<string[]>(
		(val as string[]) || []
	);

	return (
		<>
			{Children.map(children, (child) => {
				if (child.type === FieldLabel) {
					return child;
				}

				return cloneElement(child, {
					...child.props,
					name,
					id: name,
					checked: fieldValue.includes(child.props.value),
					onChange: (value: string) => {
						let values: string[] = [];
						if (multiple) {
							values = fieldValue.includes(value)
								? fieldValue.filter((v) => v !== value)
								: [...fieldValue, value];
							form.values = _.set({ ...form.values }, name, values);
						} else {
							values = [value];
							form.values = _.set({ ...form.values }, name, value);
						}
						setFieldValue(values);
					},
				});
			})}
		</>
	);
};
