import React, { FC } from 'react';
import { IBox } from './Box.types';
import { BoxStyle } from './Box.styles';

const Box: FC<IBox> = ({ ...props }) => {
	return <BoxStyle {...props} />;
};

export default Box;
