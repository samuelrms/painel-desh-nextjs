import styled from '@emotion/styled';
import { CardMixin, CardProps, CardSize, CardSizeMixin } from './Card.types';

const cardStyles: CardMixin = {
	primary: {
		static: {
			activeBackground: '',
			animation: 'none',
			background: '',
			hoverBackground: ''
		}
	},
	secondary: {
		static: {
			activeBackground: '',
			animation: 'none',
			background: '',
			hoverBackground: ''
		}
	}
};

const cardSizes: CardSizeMixin = {
	md: {
		horizontalPadding: '',
		verticalPadding: ''
	},
	sm: {
		horizontalPadding: '',
		verticalPadding: ''
	}
};

export const CardStyle = styled.div<CardProps>`
	border-radius: 16px;
	padding: 32px;
	display: flex;
	transition: 0.5s ease;
	height: ${({ height }) => `${height}px`};
	width: ${({ width }) => `${width}px`};
	background-size: 200% 100%;
	background-position-x: 180%;
	background-color: #d9d9d9;
	flex-direction: column;
	gap: 16px;

	${({ color = 'primary', size = 'md', variant = 'static' }) => `
  background: ${
		variant === 'static' ? cardStyles[color][variant].background : 'transparent'
	};
    padding: ${`${cardSizes[size].verticalPadding} ${cardSizes[size].horizontalPadding}`};
    animation: ${cardStyles[color][variant].animation};
    &:hover {
      background: ${cardStyles[color][variant].hoverBackground};
      box-shadow: none;
    }
    &:active {
      background: ${cardStyles[color][variant].activeBackground};
      box-shadow: none;
    }
  `};

	@keyframes loading {
		to {
			background-position-x: -20%;
		}
	}
`;
