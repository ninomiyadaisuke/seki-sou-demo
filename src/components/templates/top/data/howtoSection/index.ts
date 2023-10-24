import HowToImage1 from '@assets/images/howto/home_howto_1@2x.jpg';
import HowToImage2 from '@assets/images/howto/home_howto_2@2x.jpg';
import HowToImage3 from '@assets/images/howto/home_howto_3@2x.jpg';

import type { TImage } from '../topsection';

type THowTo = {
	image: TImage;
	title: string;
	subTitle?: string;
	text: string;
};

export const howToData = [
	{
		image: {
			src: HowToImage1,
			alt: 'howto1',
			sizes: '80vw ,23.6vw'
		},
		title: '冷凍',
		text: '冷凍庫から出してすぐは、アイスケーキのように味わうことができます。ひんやり冷たくパリパリした食感をお楽しみいただけます。'
	},
	{
		image: {
			src: HowToImage2,
			alt: 'howto2',
			sizes: '80vw ,23.6vw'
		},
		title: '解凍',
		subTitle: 'おすすめ',
		text: '冷凍庫から冷蔵庫に移して1〜2時間ほどで解凍できます。甘みや香り、食感を一番よい状態でお召し上がりいただけます。'
	},
	{
		image: {
			src: HowToImage3,
			alt: 'howto3',
			sizes: '80vw ,23.6vw'
		},
		title: '少し時間を置く',
		text: '冷蔵庫から出してしばらくするとクリームがやわらかくなります。なめらかなクリームにサブレをつけて食べるのもおすすめです。'
	}
] satisfies THowTo[];
