import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';
import { breakPoints } from './breakPoints';

export const globalStyle = css`
	${emotionReset}

	*, body, div, span, h1, h2, h3, h4, h5, h6, p, a, img, footer, header, nav, section {
		margin: 0;
		padding: 0;
		border: 0;
		box-sizing: border-box;
	}

	body {
		overflow-x: hidden;
		display: flex;
		/* justify-content: center; */

		display: flex;
		flex-direction: column;
		max-width: 1920px;
		margin: 0 auto;
		width: 100vw;
		background: #eff3f6;
		min-height: 100vh;
	}

	body::-webkit-scrollbar {
		display: none;
	}

	html {
		scroll-behavior: smooth;
	}

	a:focus,
	a:hover,
	a:active {
		text-decoration: none !important;
	}

	a {
		width: 100%;
		text-decoration: none;
		color: inherit;
	}

	svg {
		cursor: pointer;
	}

	main {
		display: flex;
		flex-direction: row;
	}

	@media (max-width: ${breakPoints.desk.string}) {
	}

	@media (max-width: ${breakPoints.smallDesk.string}) {
	}

	@media (max-width: ${breakPoints.tabletLarge.string}) {
	}
`;
