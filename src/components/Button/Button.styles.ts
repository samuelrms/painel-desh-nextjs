import { theme } from '@/theme/theme';
import styled from '@emotion/styled';
import { ButtonMixin, ButtonProps, ButtonSizeMixin } from './Button.types';

const buttonStyles: ButtonMixin = {
	primary: {
		filled: {
			background: theme.actions.actionPrimaryDefault,
			color: theme.text.textDefault,
			hoverBackground: theme.actions.actionPrimaryHovered,
			hoverColor: theme.text.textDefault,
			activeBackground: theme.actions.actionPrimaryPressed
		},
		outlined: {
			background: theme.borders.borderSubdued,
			color: theme.text.textSecondary,
			hoverBackground: theme.actions.actionPrimaryDefault,
			hoverColor: theme.text.textDefault,
			activeBackground: theme.actions.actionPrimaryHovered
		}
	},
	secondary: {
		filled: {
			background: theme.actions.actionSecondaryDefault,
			color: theme.text.textOnPrimary,
			hoverBackground: theme.actions.actionSecondaryHovered,
			hoverColor: theme.text.textOnPrimary,
			activeBackground: theme.actions.actionSecondaryPressed
		},
		outlined: {
			background: theme.borders.borderInteractive,
			color: theme.actions.actionSecondaryDefault,
			hoverBackground: theme.actions.actionSecondaryDefault,
			hoverColor: theme.text.textOnPrimary,
			activeBackground: theme.actions.actionSecondaryPressed
		}
	}
};

const buttonSizes: ButtonSizeMixin = {
	sm: {
		verticalPadding: '12px',
		horizontalPadding: '44px',
		fontSize: '1rem'
	},
	md: {
		verticalPadding: '16px',
		horizontalPadding: '16px',
		fontSize: '1.25rem'
	}
};

export const StyledButton = styled.button<ButtonProps>`
	border-radius: 48px;
	cursor: pointer;
	line-height: 24.38px;
	font-family: 'Montserrat', sans-serif;
	font-weight: 700;
	transition: 0.5s ease;
	width: 100%;

	${({ color = 'primary', variant = 'filled', size = 'md' }) => `
    background: ${buttonStyles[color][variant].background};
    box-shadow: ${
			variant === 'filled'
				? `inset 0px 0px 0px 2px ${buttonStyles[color][variant].background}`
				: 'none'
		};
    color: ${buttonStyles[color][variant].color};
    padding: ${`${buttonSizes[size].verticalPadding} ${buttonSizes[size].horizontalPadding}`};
    font-size: ${buttonSizes[size].fontSize};

    &:hover {
      background: ${buttonStyles[color][variant].hoverBackground};
      box-shadow: none;
      color: ${buttonStyles[color][variant].hoverColor};
    }

    &:active {
      background: ${buttonStyles[color][variant].activeBackground};
      box-shadow: none;
    }
  `};
`;
