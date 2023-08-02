import { HTMLAttributes } from 'react';

export interface PropsDivider extends HTMLAttributes<HTMLHRElement> {
	width?: number;
	height?: number;
	bgColor?: string;
	marginLeft?: number;
	marginBottom?: number;
}
