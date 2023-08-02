'use client';
import { Roboto } from 'next/font/google';
import Providers from './Providers';
import { TChildren } from '@/types/children';
import { Stack } from '@/components/Stack';
import { menuList } from '@/constants/menuList';
import { Button } from '@/components/Button';
import { Typography } from '@/components/Typography';
import { Divider } from '@/components/Divider/Divider';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Box from '@/components/Box/Box';
import Link from 'next/link';
import 'react-loading-skeleton/dist/skeleton.css';

const inter = Roboto({
	weight: ['400', '500', '700', '100', '300', '900'],
	subsets: ['latin']
});

export default function RootLayout({ children }: TChildren) {
	const [height, setHeight] = useState<number | undefined>();
	const elementRef = useRef<HTMLDivElement>(null);
	const pathname = usePathname();

	useEffect(() => {
		const measureHeight = () => {
			if (elementRef.current) {
				setHeight(elementRef.current?.offsetHeight);
			}
		};
		measureHeight();

		window.addEventListener('resize', measureHeight);

		return () => {
			window.removeEventListener('resize', measureHeight);
		};
	}, []);

	console.log(height);

	return (
		<html lang="pt-br">
			<body className={inter.className}>
				<Providers>
					<Box>
						<div className="container-box" ref={elementRef}>
							<Stack as={'section'} className="drawer-desk">
								<Stack height={128}>
									<Typography>BigDashboard</Typography>
								</Stack>
								{menuList.map(menuItem => (
									<Link href={menuItem.path}>
										<Button
											variant={
												pathname === menuItem.path ? 'filled' : 'outlined'
											}
											size="sm"
											style={{
												textAlign: 'left'
											}}
										>
											{menuItem.name}
										</Button>
									</Link>
								))}
							</Stack>
							<Divider width={1} height={height} />
						</div>
						{children}
					</Box>
				</Providers>
			</body>
		</html>
	);
}
