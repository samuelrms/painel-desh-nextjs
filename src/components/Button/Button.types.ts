import { ButtonHTMLAttributes } from 'react';

export type ButtonColors = 'primary' | 'secondary';

export type ButtonVariants = 'filled' | 'outlined';

export type ButtonSize = 'sm' | 'md';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	color?: ButtonColors;
	variant?: ButtonVariants;
	size?: ButtonSize;
}

export interface ButtonMixinTheme {
	background: string;
	color: string;
	hoverBackground: string;
	hoverColor: string;
	activeBackground: string;
}

export interface ButtonMixinVariant {
	filled: ButtonMixinTheme;
	outlined: ButtonMixinTheme;
}

export interface ButtonMixin {
	primary: ButtonMixinVariant;
	secondary: ButtonMixinVariant;
}

export interface ButtonSizeStyles {
	verticalPadding: string | number;
	horizontalPadding: string | number;
	fontSize: string;
}

export type ButtonSizeMixin = { [key in ButtonSize]: ButtonSizeStyles };
