let previous = document.querySelector('.left')
let next = document.querySelector('.right')
let slider = document.querySelector('.slider-position')
let images = slider.querySelectorAll('img')

let offset = 0;
let offset2 = 0;
let step1 = 0;
let step2 = 0;
for (let img of images) {
	img.remove();
}
//  set images into slider==============
for (let i = 0; i < images.length; i++) {
	let img = images[i];
	img.style.left = offset * 480 - 480 + 'px';
	slider.appendChild(img);
	offset++
	if (step1 < 3) {
		step1++
	} else {
		step1 = 0
		offset = 0;
		step2 = images.length - 1;
		addImgR()
		addImgL()
		break
	}	
}
// support function add img to right==================
function addImgR(params) {
	let img

	if (step1< images.length) {
		img = images[step1].cloneNode(false);
	} else {
		step1 = 0;
		img = images[step1].cloneNode(false);
	}

	img.style.left = 1440 + 'px';
	slider.appendChild(img);
	step1++
}

function addImgL(params) {
	let img;
	
	if (step2 > 0) {
		img = images[step2].cloneNode(false);
	} else {
		img = images[step2].cloneNode(false);
		step2 = images.length;
	}

	img.style.left = -960 + 'px';
	slider.insertBefore(img, slider.firstElementChild);
	step2--
}
// move intagrated images ================
function moveR(params) {
	next.removeEventListener('click', moveR);
	let integrImages = slider.querySelectorAll('img');

	for (let img of integrImages) {
		img.style.left = offset * 480 - 480 * 3 + 'px';
		if (offset < 5) {
			offset++
		} else {
			offset = 0;
		}
	}
	setTimeout(function (params) {
		addImgR()
	},1000)
	let size = Number.parseInt(integrImages[0].style.left);
	if (size == -1440) {
		integrImages[0].remove();
	}
	setTimeout(function () {
		next.addEventListener('click', moveR);
	}, 1000)
}



function moveL(params) {
	previous.removeEventListener('click', moveL);
	let integrImages = slider.querySelectorAll('img');
	console.log(offset2)
	for (let img of integrImages) {
		img.style.left = offset2 * 480 - 480 + 'px';
		if (offset2 < 5) {
			offset2++
		} else {
			offset2 = 0;
		}
	}

	setTimeout(function (params) {
		addImgL()
	},1000)

	let size = Number.parseInt(integrImages[integrImages.length - 1].style.left);
	if (size == 1920) {
		integrImages[integrImages.length - 1].remove();
	}
	setTimeout(function () {
		previous.addEventListener('click', moveL);
	}, 1000)
}
next.addEventListener('click', moveR);
previous.addEventListener('click', moveL);
/* let src = []
let offsetR = 0;
let stepR = 0;
// copy src and remove all img===========
for (let i = 0; i < images.length; i++) {
	src[i] = images[i].src
	images[i].remove()
}
//  fill slider ======================
for (let i = 0; i < 5; i++) {
	createImg()
}

//  create img and load into end ==========
function createImg(params) {
	let img = document.createElement('img')
	img.src = src[stepR]
	img.style.left = offsetR * 480 + "px"
	slider.appendChild(img)
	
	if (stepR < src.length - 1) {
		stepR++
	} else {
		stepR = 0;
	}
	if (offsetR < 4) {
		offsetR++
	}
}

let flag = false;
window.addEventListener('load', function (params) {
	let call = new Event('click')
	next.dispatchEvent(call);
})
function move(params) {
	let imagesExist = slider.querySelectorAll('img')
	let offset2 = 0;
	if (this.matches('.right')) {
		for (let img of imagesExist) {
			img.style.left = `${offset2 * 480 - 480}px`
			offset2++
		}
		if (flag) {
			createImg()
			this.removeEventListener('click', move)
			setTimeout(function (params) {
				imagesExist[0].remove()
				params.addEventListener('click', move)
			}, 900, this)
		}
		flag = true;
	} else {
		for (let img of imagesExist) {
			img.style.left = `${offset2 * 480 + 480}px`
			offset2++
		}
		left()
		this.removeEventListener('click', move)
		setTimeout(function (params) {
			imagesExist[4].remove()
			params.addEventListener('click', move)
		}, 900, this)
	}

	
}
 */
/* previous.addEventListener('click', move)
next.addEventListener('click', move) */
