import { DetailedHTMLProps, ElementType, HTMLAttributes, Ref } from 'react';

export interface StackProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	as?: ElementType;
	height?: number;
	width?: number;
}

export interface DefaultStackProps {
	as?: StackProps['as'];
}
