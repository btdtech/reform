import React, { CSSProperties, ReactNode } from 'react';

export interface FieldLabelProps {
	children: ReactNode;
	htmlFor?: string;
	style?: CSSProperties;
}

export const FieldLabel = ({ children, htmlFor, style }: FieldLabelProps) => {
	return (
		<label htmlFor={htmlFor} style={{ fontSize: '0.875rem', ...style }}>
			{children}
		</label>
	);
};
