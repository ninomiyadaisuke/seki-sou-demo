import Nami1 from '@assets/images/nami/nami_1@2x.png';
import Nami2 from '@assets/images/nami/nami_2@2x.png';
import Nami3 from '@assets/images/nami/nami_3@2x.png';
import Nami4 from '@assets/images/nami/nami_4@2x.png';
import TopImage1 from '@assets/images/top/home_main_1_1@2x.jpg';
import TopImage2 from '@assets/images/top/home_main_1_2@2x.jpg';
import TopImage3 from '@assets/images/top/home_main_2_1@2x.jpg';
import TopImage4 from '@assets/images/top/home_main_2_2@2x.jpg';
import TopImage5 from '@assets/images/top/home_main_3_1@2x.jpg';
import TopImage6 from '@assets/images/top/home_main_4_1@2x.jpg';
import TopImage7 from '@assets/images/top/home_main_4_2@2x.jpg';
import TopImage8 from '@assets/images/top/home_main_5_1@2x.jpg';
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
		src: TopImage1, //width 800
		alt: 'TopImage1',
		loading: 'eager',
		decoding: 'sync',
		sizes: '64vw, 31vw'
	},
	{
		src: TopImage2, // width 320
		alt: 'TopImage2',
		loading: 'eager',
		decoding: 'sync',
		sizes: '27vw, 12.5vw'
	},
	{
		src: TopImage3, // width 480
		alt: 'TopImage3',
		loading: 'eager',
		decoding: 'sync',
		sizes: '36vw, 18.8vw'
	},
	{
		src: TopImage4, // width 320
		alt: 'TopImage4',
		loading: 'eager',
		decoding: 'sync',
		sizes: '27vw, 12.5vw'
	},
	{
		src: TopImage5, // width 480
		alt: 'TopImage5',
		loading: 'eager',
		decoding: 'sync',
		sizes: '36vw, 18.8vw'
	},
	{
		src: TopImage6, // width 640
		alt: 'TopImage6',
		loading: 'eager',
		decoding: 'sync',
		sizes: '54vw, 25vw'
	},
	{
		src: TopImage7, // width 480
		alt: 'TopImage7',
		loading: 'eager',
		decoding: 'sync',
		sizes: '27vw, 12.5vw'
	},
	{
		src: TopImage8, // width 320
		alt: 'TopImage8',
		loading: 'eager',
		decoding: 'sync',
		sizes: '27vw, 12.5vw'
	},
	{
		src: Nami1,
		alt: 'Nami1',
		loading: 'eager',
		decoding: 'sync'
	},

	{
		src: Nami2,
		alt: 'Nami3',
		loading: 'eager',
		decoding: 'sync'
	},
	{
		src: Nami3,
		alt: 'Nami2',
		loading: 'eager',
		decoding: 'sync'
	},
	{
		src: Nami4,
		alt: 'Nami4',
		loading: 'eager',
		decoding: 'sync'
	}
] satisfies TImage[];
