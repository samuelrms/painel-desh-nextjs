import styled from '@emotion/styled';
import { PropsDivider } from './Divider.types';

export const DividerStyle = styled.hr<PropsDivider>`
	height: ${({ height }) => `${height ? height + 'px' : '100%'}`};
	width: ${({ width }) => `${width ? width + 'px' : '100%'}`};
	background: ${({ bgColor, theme }) =>
		bgColor ?? theme.neutral.neutralModerateGray};
	margin-left: ${({ marginLeft }) => `${marginLeft ?? 0}px`};
	margin-bottom: ${({ marginBottom }) => `${marginBottom ?? 0}px`};
	margin-top: 0;
	border: none;
`;
