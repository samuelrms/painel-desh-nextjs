'use client';

import React from 'react';
import { Global, ThemeProvider } from '@emotion/react';
import { theme } from '@/theme/theme';
import { globalStyle } from '@/theme/globalStyle';
import { TChildren } from '@/types/children';
import '@/styles/home.css';

const Providers = ({ children }: TChildren) => {
	return (
		<ThemeProvider theme={theme}>
			<Global styles={globalStyle} />
			{children}
		</ThemeProvider>
	);
};

export default Providers;
