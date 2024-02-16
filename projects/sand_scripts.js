function init() {
	const canvas = document.getElementById('canvas');
	if (!canvas.getContext) {
		alert('canvas elements are not supported on your biser.');
		return;
	}

	const ctx = canvas.getContext('2d');

	const widthPX = canvas.width;
	const blocks = 401;
	const BLOCK_SIZE = widthPX / blocks;
	let cells = new Array(blocks);
	for (let cell of cells) {
		cell.push(new Array(blocks));
	}

	let styles = ['rgb(0 0 0)', 'rgb(255 100 200 / 50%)'];
	let activeStyle = 0;
	for (let i = 0; i < blocks; i++) {
		for (let j = 0; j < blocks; j++) {
			if (activeStyle === 0) {
				ctx.fillStyle = styles[1];
				activeStyle = 1;
			} else {
				ctx.fillStyle = styles[0];
				activeStyle = 0;
			}
			ctx.fillRect(i * BLOCK_SIZE, j * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
		}
	}
}
