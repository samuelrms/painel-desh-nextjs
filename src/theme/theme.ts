import { colors } from './colors';

export const theme = {
	name: 'default',
	colors: {
		primary: colors.yellow[0],
		secondary: colors.green[2],
		text: {
			buttonColor: colors.textButtonColor,
			paragraphColor: colors.paragraphColor
		},
		hoverButton: {
			outlineSecondary: colors.green[7],
			primary: colors.yellow[7],
			secondary: colors.green[7]
		},
		hoverText: {
			buttonColor: colors.textButtonColorHover
		}
	},

	textButtonColor: colors.textButtonColor,
	textButtonColorHover: colors.textButtonColorHover,
	paragraphColor: colors.paragraphColor,
	productsBg: colors.productsBg,
	sustainabilityBg: colors.sustainabilityBg,
	white: colors.white,
	transparent: colors.transparent,
	shadowNav: colors.shadowNav,

	actions: {
		actionPrimaryDefault: colors.actions.actionPrimaryDefault,
		actionPrimaryHovered: colors.actions.actionPrimaryHovered,
		actionPrimaryPressed: colors.actions.actionPrimaryPressed,
		actionPrimaryDisabled: colors.actions.actionPrimaryDisabled,
		actionSecondaryDefault: colors.actions.actionSecondaryDefault,
		actionSecondaryHovered: colors.actions.actionSecondaryHovered,
		actionSecondaryPressed: colors.actions.actionSecondaryPressed,
		actionSecondaryDisabled: colors.actions.actionSecondaryDisabled
	},

	text: {
		textDefault: colors.text.textDefault,
		textSecondary: colors.text.textSecondary,
		textHighlightPrimary: colors.text.textHighlightPrimary,
		textOnInteractive: colors.text.textOnInteractive,
		textSubdued: colors.text.textSubdued,
		textHighlightSecondary: colors.text.textHighlightSecondary,
		textOnPrimary: colors.text.textOnPrimary,
		textDisabled: colors.text.textDisabled,
		textOnCritical: colors.text.textOnCritical
	},

	borders: {
		borderDefault: colors.borders.borderDefault,
		borderSubdued: colors.borders.borderSubdued,
		borderInteractive: colors.borders.borderInteractive
	},

	icons: {
		iconDefault: colors.icons.iconDefault,
		iconHighlight: colors.icons.iconHighlight
	},

	neutral: {
		neutralModerateGray: colors.neutral.neutralModerateGray
	}
};

export type DefaultTheme = typeof theme;
