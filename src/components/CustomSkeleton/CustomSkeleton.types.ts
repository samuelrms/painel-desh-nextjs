import { SkeletonProps, SkeletonThemeProps } from 'react-loading-skeleton';

export interface PropsSkeleton extends SkeletonProps {}
export interface PropsThemeSkeleton extends SkeletonThemeProps {}

export type TCustomSkeleton = {
	skeleton?: PropsSkeleton;
	themeSkeleton?: PropsThemeSkeleton;
};
