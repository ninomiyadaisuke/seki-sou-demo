import TopImage1 from '@assets/images/top/home_main_1_1@2x.jpg';
// import TopImage2 from '@assets/images/top/home_main_1_2@2x.jpg';
// import TopImage3 from '@assets/images/top/home_main_2_1@2x.jpg';
// import TopImage4 from '@assets/images/top/home_main_2_2@2x.jpg';
// import TopImage5 from '@assets/images/top/home_main_3_1@2x.jpg';
// import TopImage6 from '@assets/images/top/home_main_4_1@2x.jpg';
// import TopImage7 from '@assets/images/top/home_main_4_2@2x.jpg';
// import TopImage8 from '@assets/images/top/home_main_5_1@2x.jpg';
import type { ImageMetadata } from 'astro';

type TImage = {
	src: ImageMetadata;
	alt: string;
	widths?: readonly number[];
	sizes?: string;
	loading?: 'lazy' | 'eager';
	decoding?: 'async' | 'sync';
};

export const imageData = [
	{
		src: TopImage1,
		alt: 'TopImage1',
		loading: 'eager',
		decoding: 'sync',
		sizes: '640px, 100vw'
	}
	// {
	// 	src: TopImage2,
	// 	alt: 'TopImage2',
	// 	loading: 'eager',
	// 	decoding: 'sync'
	// },
	// {
	// 	src: TopImage3,
	// 	alt: 'TopImage3',
	// 	sizes: '640px, 100vw',
	// 	loading: 'eager',
	// 	decoding: 'sync'
	// },
	// {
	// 	src: TopImage4,
	// 	alt: 'TopImage4',
	// 	sizes: '640px, 100vw',
	// 	loading: 'eager',
	// 	decoding: 'sync'
	// },
	// {
	// 	src: TopImage5,
	// 	alt: 'TopImage5',
	// 	loading: 'eager',
	// 	decoding: 'sync'
	// },
	// {
	// 	src: TopImage6,
	// 	alt: 'TopImage6',
	// 	loading: 'eager',
	// 	decoding: 'sync'
	// },
	// {
	// 	src: TopImage7,
	// 	alt: 'TopImage7',
	// 	loading: 'eager',
	// 	decoding: 'sync'
	// },
	// {
	// 	src: TopImage8,
	// 	alt: 'TopImage8',
	// 	loading: 'eager',
	// 	decoding: 'sync'
	// }
] satisfies TImage[];
