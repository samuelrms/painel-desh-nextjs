import { HTMLAttributes } from 'react';

export type CardColors = 'primary' | 'secondary';

export type CardVariants = 'static';

export type CardSize = 'sm' | 'md';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
	color?: CardColors;
	variant?: CardVariants;
	size?: CardSize;
	height?: number;
	width?: number;
}

export interface CardMixinTheme {
	background: string;
	hoverBackground: string;
	activeBackground: string;
	animation: string;
}

export interface CardMixinVariant {
	static: CardMixinTheme;
}

export interface CardMixin {
	primary: CardMixinVariant;
	secondary: CardMixinVariant;
}

export interface ButtonSizeStyles {
	verticalPadding: string;
	horizontalPadding: string;
}

export type CardSizeMixin = { [key in CardSize]: ButtonSizeStyles };
