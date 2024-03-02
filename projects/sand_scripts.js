window.onload = () => {
	const canvas = document.getElementById('canvas');
	if (!canvas.getContext) {
		alert('canvas elements are not supported on your browser.');
		return;
	}
	const ctx = canvas.getContext('2d');
	const widthPX = canvas.width;

	const commonColors = [
		'rgb(255 255 255)', // White
		'rgb(0 0 0)', // Black
		'rgb(255 0 0)', // Red
		'rgb(0 255 0)', // Lime
		'rgb(0 0 255)', // Blue
		'rgb(255 255 0)', // Yellow
		'rgb(0 255 255)', // Cyan/Aqua
		'rgb(255 0 255)', // Magenta/Fuchsia
		'rgb(192 192 192)', // Silver
		'rgb(128 128 128)', // Gray
		'rgb(128 0 0)', // Maroon
		'rgb(128 128 0)', // Olive
		'rgb(0 128 0)', // Green
		'rgb(128 0 128)', // Purple
		'rgb(0 128 128)', // Teal
		'rgb(0 0 128)', // Navy
	];

	let sizes = [20, 15, 10, 5];
	let activeSize = sizes[2];

	ctx.fillStyle = commonColors[0];
	ctx.fillRect(0, 0, widthPX, widthPX);
	ctx.fillStyle = commonColors[1];
	let rect = canvas.getBoundingClientRect();

	let isMouseDown = false;
	function mousedown(e) {
		isMouseDown = true;
	}
	function mouseup(e) {
		isMouseDown = false;
	}
	function whilemousedown(e) {
		if (isMouseDown) {
			let x = e.clientX - rect.left; //x position within the element.
			let y = e.clientY - rect.top; //y position within the element.
			ctx.beginPath();
			ctx.arc(x, y, activeSize, 0, 2 * Math.PI);
			ctx.fill();
		}
	}

	canvas.addEventListener('mousedown', mousedown);
	document.addEventListener('mouseup', mouseup);
	addEventListener('mousemove', whilemousedown);

	// add controls (size, color, erase)
	const controlsEle = document.getElementById('controls');
	for (let color of commonColors) {
		let colorControl = document.createElement('div');
		colorControl.onclick = () => {
			ctx.fillStyle = color;
		};
		colorControl.style.border = '1px solid black';
		colorControl.style.backgroundColor = color;
		colorControl.style.height = '24px';
		colorControl.style.width = '24px';
		controlsEle.appendChild(colorControl);
	}
	for (let size of sizes) {
		let sizeControl = document.createElement('div');
		sizeControl.onclick = () => {
			activeSize = size;
		};
		sizeControl.style.height = `${size}px`;
		sizeControl.style.width = `${size}px`;
		sizeControl.style.borderRadius = '50px';
		sizeControl.style.backgroundColor = 'black';
		sizeControl.style.padding = '5px';
		sizeControl.style.margin = '5px';

		controlsEle.appendChild(sizeControl);
	}

	let trashcan = document.createElement('div');
	// 🗑️
	trashcan.onclick = () => {
		const color = ctx.fillStyle;
		ctx.fillStyle = commonColors[0];
		ctx.fillRect(0, 0, widthPX, widthPX);
		ctx.fillStyle = color;
	};
	trashcan.style.height = '24px';
	trashcan.style.width = '24px';
	trashcan.style.padding = '5px';
	trashcan.style.margin = '5px';

	trashcan.appendChild(document.createTextNode('🗑️'));

	controlsEle.appendChild(trashcan);

	if (window !== window.parent) {
		document.getElementById('header').style.display = 'none';
	}
};
