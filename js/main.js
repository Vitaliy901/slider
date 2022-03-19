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
for (let i = 0; i < 5; i++) {
	let img = images[i];
	img.style.left = offset * 480 - 480 + 'px';
	slider.appendChild(img);
	offset++
	if (step1 < 3) {
		step1++
	} else {
		step2 = images.length;
		offset = 0;
		addImgR()
		addImgL()
		break
	}	
}
// support function add img to right==================
function addImgR(params) {
	let img

	if (step1 <  images.length - 1) {
		step1++
	} else {
		step1 = 0
	}
	
	console.log(step1)
	if (step1 < images.length) {
		img = images[step1].cloneNode(false);
	} else {
		step1 = 0;
		img = images[step1].cloneNode(false);
	}

	img.style.left = 1440 + 'px';
	slider.appendChild(img);

}

function addImgL(params) {
	let img;
	console.log(step1)
	if (step2 > 0) {
		step2--
	} else {
		step2 = images.length -1
	}

	if (step2 > 0) {
		img = images[step2].cloneNode(false);
	} else {
		img = images[step2].cloneNode(false);
		step2 = images.length;
	}

	img.style.left = -960 + 'px';
	slider.insertBefore(img, slider.firstElementChild);

}
// move intagrated images ================
function moveR(e) {
	previous.removeEventListener('click', moveL);
	next.removeEventListener('click', moveR);

	if (step2 < images.length - 1) {
		step2++
	}else {
		step2 = 0

	}


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
		previous.addEventListener('click', moveL);
	}, 1200)
}



function moveL(e) {
	previous.removeEventListener('click', moveL);
	next.removeEventListener('click', moveR);

	if (step1 > 0) {
		step1--
	}else {
		step1 = images.length
		step1--
	}

	let integrImages = slider.querySelectorAll('img');
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
		next.addEventListener('click', moveR);
		previous.addEventListener('click', moveL);
	}, 1200)
}
next.addEventListener('click', moveR);
previous.addEventListener('click', moveL);
