import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { TCustomSkeleton } from '.';

export const CustomSkeleton = ({
	themeSkeleton,
	skeleton
}: TCustomSkeleton) => {
	return (
		<SkeletonTheme {...themeSkeleton}>
			<Skeleton {...skeleton} />
		</SkeletonTheme>
	);
};
