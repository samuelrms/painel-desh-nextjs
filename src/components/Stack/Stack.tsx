import React, { FC } from 'react';
import { StackProps, StackStyles } from '.';

export const Stack: FC<StackProps> = ({ ...props }) => {
	return <StackStyles {...props} />;
};
