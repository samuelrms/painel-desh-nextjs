import { FC } from 'react';
import { TextProps } from './Typography.types';
import { TextStyles } from './Typography.styles';

export const Typography: FC<TextProps> = ({ ...props }) => {
	return <TextStyles {...props} />;
};
