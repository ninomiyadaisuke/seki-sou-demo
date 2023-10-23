import KazeImage from '@assets/images/product/home_products_kaze@2x.jpg';
import NamiImage from '@assets/images/product/home_products_nami@2x.jpg';
import NiziImage from '@assets/images/product/home_products_niji@2x.jpg';

import type { TImage } from '../topsection';

export type TProduct = {
	type: '風' | '波' | '虹';
	href: string;
	imagePostion?: 'left' | 'right';
	description: string;
	imageData: TImage;
};

export const productsData = [
	{
		type: '風',
		href: '/',
		description: '馴染んで呼吸と同じ、定番の4種',
		imagePostion: 'right',
		imageData: {
			src: KazeImage,
			alt: 'kazeImage',
			sizes: '81vw, 600px'
		}
	},
	{
		type: '波',
		href: '/',
		description: '寄せては返す、香りほどける4種',
		imagePostion: 'left',
		imageData: {
			src: NamiImage,
			alt: 'namiImage',
			sizes: '81vw, 600px'
		}
	},
	{
		type: '虹',
		href: '/',
		description: '季節は移り、特別な巡り合わせ4種',
		imagePostion: 'right',
		imageData: {
			src: NiziImage,
			alt: 'niziImage',
			sizes: '81vw, 600px'
		}
	}
] satisfies TProduct[];
