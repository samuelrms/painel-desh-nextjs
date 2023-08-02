import React, { FC } from 'react';
import { DividerStyle } from './Divider.styles';
import { PropsDivider } from './Divider.types';

export const Divider: FC<PropsDivider> = ({ ...props }) => {
	return <DividerStyle {...props} />;
};
