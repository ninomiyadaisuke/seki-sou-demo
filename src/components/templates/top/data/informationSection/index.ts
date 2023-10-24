import InformationImage1 from '@assets/images/notice/01.jpg';
import InformationImage2 from '@assets/images/notice/02.jpg';

import type { TImage } from '../topsection';

export type TInformaition = {
	image: TImage;
	date: string;
	description: string;
	href: string;
};

export const informaitonData = [
	{
		image: {
			src: InformationImage1,
			alt: 'InformationImage1',
			sizes: '81vw, 17vw'
		},
		date: '23.10.18',
		description:
			'【神戸初出店】10月18日（水）から10月24日（火）まで、大丸神戸店に期間限定出店いたします。',
		href: '/'
	},
	{
		image: {
			src: InformationImage2,
			alt: 'InformationImage2',
			sizes: '81vw, 17vw'
		},
		date: '23.09.11',
		description:
			'【神戸初出店】10月18日（水）から10月24日（火）まで、大丸神戸店に期間限定出店いたします。',
		href: '/'
	}
] satisfies TInformaition[];
