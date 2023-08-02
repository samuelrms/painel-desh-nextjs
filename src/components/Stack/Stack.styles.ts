import { DefaultStackProps, StackProps } from './Stack.types';
import styled from '@emotion/styled';

export const StackStyles = styled.p<StackProps & DefaultStackProps>`
	display: flex;
	height: ${({ height }) => `${height}px`};
	width: ${({ width }) => `${width}px`};
`;

StackStyles.defaultProps = {
	as: 'div'
};
