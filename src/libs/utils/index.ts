export const generateSrcset = (data: ImageMetadata[]): string => {
	// widthの降順でソート
	const sortedData = data.sort((a, b) => b.width - a.width);
	// 各アイテムを`${src} ${width}w`の形式に変換
	const srcsetStrings = sortedData.map(item => `${item.src} ${item.width}w`);
	// 文字列を連結して返す
	return srcsetStrings.join(', ');
};
