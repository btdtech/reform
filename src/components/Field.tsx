import React, {
	ChangeEventHandler,
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

export type FieldOrientation =
	| 'row'
	| 'column'
	| 'column-reverse'
	| 'row-reverse';
export interface FieldProps {
	children: ReactElement[] | ReactElement;
	name: NamePath;
	style?: CSSProperties;
	orientation?: FieldOrientation;
}

export const Field = ({
	children,
	name,
	style,
	orientation = 'column',
}: FieldProps) => {
	const { form } = useFormContext();

	const childrenElements = Array.isArray(children) ? children : [children];

	const val = getNamePathValue(form.values as FormValues, name);
	const [value, setValue] = useState<FieldValue>(val);

	return (
		<div
			style={{
				display: 'flex',
				gap: 8,
				flexDirection: orientation,
				alignItems: orientation === 'column' ? 'normal' : 'center',
				...style,
			}}
		>
			{Children.map(childrenElements, (child) => {
				if (child.type === FieldLabel) {
					return cloneElement(child, {
						...child.props,
						htmlFor: name,
					});
				}

				return cloneElement<{
					onChange?: ChangeEventHandler<HTMLInputElement>;
				}>(child, {
					...child.props,
					name,
					id: name,
					value: value || '',
					checked: !!value,
					onChange: ({ target }) => {
						let newValue: FieldValue = target.value;
						if (child.props.type === 'checkbox') {
							newValue = target.checked;
						}
						setValue(newValue);
						form.setFieldValue(name, newValue);
					},
				});
			})}
		</div>
	);
};
