// アニメーションクラスの型定義
type AnimationClasses =
	| 'fromTopSkew'
	| 'fromRightSkew'
	| 'fromBottomSkew'
	| 'fromLeftSkew'
	| 'fromTopRightSkew'
	| 'fromTopLeftSkew'
	| 'fromBottomRightSkew'
	| 'fromBottomLeftSkew';

// アニメーションの実行関数
export function animateItems(targetClass: string) {
	// アニメーションクラスの配列
	const animations: AnimationClasses[] = [
		'fromTopSkew',
		'fromRightSkew',
		'fromBottomSkew',
		'fromLeftSkew',
		'fromTopRightSkew',
		'fromTopLeftSkew',
		'fromBottomRightSkew',
		'fromBottomLeftSkew'
	];

	const options = {
		root: null,
		rootMargin: '0px',
		threshold: 0.1
	};

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const item = entry.target as HTMLElement;
			if (entry.isIntersecting && !item.dataset.animated) {
				// ランダムなアニメーションクラスを取得
				const randomAnimation: AnimationClasses =
					animations[Math.floor(Math.random() * animations.length)];

				// 要素にアニメーションクラスを追加
				item.classList.add(randomAnimation);

				// opacityを1にしてアニメーションを開始
				item.style.opacity = '1';

				// 要素がアニメーション済みであることをマーク
				item.dataset.animated = 'true';
			}
		});
	}, options);

	// 引数で指定されたクラスを持つ要素を監視対象に追加
	document.querySelectorAll<HTMLElement>(targetClass).forEach(item => {
		observer.observe(item);
	});
}
