import { FC } from 'react';
import { ButtonProps, StyledButton } from '.';

export const Button: FC<ButtonProps> = ({ ...props }) => {
	return <StyledButton {...props} />;
};
