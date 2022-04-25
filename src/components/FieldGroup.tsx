import React, {
	Children,
	cloneElement,
	CSSProperties,
	ReactElement,
	useState,
} from 'react';
import { FieldLabel } from './FieldLabel';
import { useFormContext } from './FormProvider';
import { getNamePathValue } from './util';
import _ from 'lodash';
import { FieldValue, FormValues, NamePath } from './types';

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
							form.setFieldValue(name, values);
						} else {
							values = [value];
							form.setFieldValue(name, value);
						}
						setFieldValue(values);
					},
				});
			})}
		</>
	);
};
