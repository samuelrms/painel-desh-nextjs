'use client';

import { Card } from '@/components/Card';
import { CustomSkeleton } from '@/components/CustomSkeleton';
import { Stack } from '@/components/Stack';
import { Typography } from '@/components/Typography';

export default function Home() {
	return (
		<main>
			<Stack
				style={{
					padding: '128px 96px 0',
					flexDirection: 'column'
				}}
			>
				<Typography
					variant="txtHeading"
					color="#1d1c1c"
					style={{
						fontWeight: 'bold'
					}}
				>
					Painel
				</Typography>
				<Typography
					variant="txtSubtitle"
					color="#1d1c1c"
					style={{
						paddingBottom: '32px'
					}}
				>
					As útimas atualizações de hoje
				</Typography>
				<Stack
					style={{
						gap: 16
					}}
				>
					<Card height={300} width={500}>
						<CustomSkeleton
							skeleton={{
								count: 1,
								borderRadius: 8
							}}
							themeSkeleton={{
								height: 20,
								width: 200,
								baseColor: '#fff'
							}}
						/>
						<CustomSkeleton
							skeleton={{
								count: 2,
								borderRadius: 8,
								style: {
									marginBottom: '16px'
								}
							}}
							themeSkeleton={{
								height: 20,
								width: 300,
								baseColor: '#fff'
							}}
						/>
					</Card>
					<Card height={300} width={500}>
						<CustomSkeleton
							skeleton={{
								count: 1,
								borderRadius: 8
							}}
							themeSkeleton={{
								height: 20,
								width: 200,
								baseColor: '#fff'
							}}
						/>
						<CustomSkeleton
							skeleton={{
								count: 2,
								borderRadius: 8,
								style: {
									marginBottom: '16px'
								}
							}}
							themeSkeleton={{
								height: 20,
								width: 300,
								baseColor: '#fff'
							}}
						/>
					</Card>
				</Stack>
				<Card
					// width={500}
					style={{
						flexDirection: 'row',
						marginTop: 16
					}}
				>
					<CustomSkeleton
						skeleton={{
							count: 5,
							borderRadius: 8,
							style: {
								marginRight: '16px'
							}
						}}
						themeSkeleton={{
							height: 20,
							width: 150,
							baseColor: '#fff',
							inline: true
						}}
					/>
				</Card>
				<Card
					height={300}
					style={{
						marginTop: 16
					}}
				>
					<CustomSkeleton
						skeleton={{
							count: 1,
							borderRadius: 8
						}}
						themeSkeleton={{
							height: 20,
							width: 200,
							baseColor: '#fff'
						}}
					/>
					<CustomSkeleton
						skeleton={{
							count: 2,
							borderRadius: 8,
							style: {
								marginBottom: '16px'
							}
						}}
						themeSkeleton={{
							height: 20,
							width: 300,
							baseColor: '#fff'
						}}
					/>
				</Card>
			</Stack>
		</main>
	);
}
