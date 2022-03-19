let previous = document.querySelector('.left')
let next = document.querySelector('.right')
let slider = document.querySelector('.slider-position')
let images = slider.querySelectorAll('img')

let offset = 0;
let stepImg = 0;
for (let img of images) {
	img.remove();
}
//  set images into slider==============
for (let i = 0; i < images.length; i++) {
	let img = images[i];
	img.style.left = offset * 480 - 480 + 'px';
	slider.appendChild(img);
	offset++
	if (stepImg < 3) {
		stepImg++
	} else {
		offset = 0;
		addImgR()
		break
	}	
}
// support function==================
function addImgR(params) {
	if (stepImg < images.length - 1) {
		let img = images[stepImg].cloneNode(false);
		img.style.left = 1440 + 'px';
		slider.appendChild(img);
		stepImg++
	} else {
		stepImg = 0;
		let img = images[stepImg].cloneNode(false);
		img.style.left = 1440 + 'px';
		slider.appendChild(img);
		stepImg++
	}
}
// move intagrated images ================
function moveR(params) {
	next.removeEventListener('click', moveR);
	let integrImages = slider.querySelectorAll('img');
	for (let img of integrImages) {
		img.style.left = offset * 480 - 480 * 2 + 'px';
		if (offset < 5) {
			console.log(offset * 480 - 480 * 2 + 'px')
			offset++
		} else {
			offset = 0;
		}
	}
	addImgR()
	let size = Number.parseInt(integrImages[0].style.left);
	if (size == 1440) {
		integrImages[0].remove();
	}
	setTimeout(function () {
		next.addEventListener('click', moveR);
	}, 1000)
}

next.addEventListener('click', moveR);

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
