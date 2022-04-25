import { FieldLabel } from '@btdtech/reform';

export interface CheckableProps {
	onChange?: (value: string) => void;
	label: string;
	value: string;
	checked?: boolean;
	name?: string;
	type?: 'checkbox' | 'radio';
}

export const Checkable = ({
	value,
	label,
	onChange,
	checked,
	name,
	type,
}: CheckableProps) => {
	return (
		<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
			<input
				type={type}
				value={value}
				checked={checked}
				id={value}
				onChange={() => onChange?.(value)}
				name={name}
			/>
			<FieldLabel htmlFor={value}>{label}</FieldLabel>
		</div>
	);
};
