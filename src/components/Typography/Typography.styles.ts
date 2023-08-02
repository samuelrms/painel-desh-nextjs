import { fonts } from '@/theme/fonts';
import styled from '@emotion/styled';
import { DefaultTextProps, TextMixin, TextProps } from './Typography.types';

const textStyles: TextMixin = {
	lg: {
		txtXLG: fonts.lg.txtXLG,
		txtLG: fonts.lg.txtLG,
		txtMD: fonts.lg.txtMD,
		txtSM: fonts.lg.txtSM,
		txtHeading: fonts.lg.txtHeading,
		txtSubheading: fonts.lg.txtSubheading,
		txtBody: fonts.lg.txtBody,
		txtSubtitle: fonts.lg.txtSubtitle,
		txtCaption: fonts.lg.txtCaption
	},
	sm: {
		txtXLG: fonts.sm.txtXLG,
		txtLG: fonts.sm.txtLG,
		txtMD: fonts.sm.txtMD,
		txtHeading: fonts.sm.txtHeading,
		txtSubheading: fonts.sm.txtSubheading,
		txtBody: fonts.sm.txtBody,
		txtCaption: fonts.sm.txtCaption,
		txtSM: fonts.sm.txtSM,
		txtSubtitle: fonts.sm.txtSubtitle
	}
};

export const TextStyles = styled.p<TextProps & DefaultTextProps>`
	color: ${({ theme, color }) => color ?? theme.text.textSecondary};

	${({ size = 'lg', variant = 'txtBody' }: TextProps) => `
  font-size: ${textStyles[size][variant].fontSize};
  font-weight: ${textStyles[size][variant].fontWeight};
  line-height: ${textStyles[size][variant].lineHeight};
  `}
`;

TextStyles.defaultProps = {
	as: 'p'
};
