let previous = document.querySelector('.left')
let next = document.querySelector('.right')
let slider = document.querySelector('.slider-position')
let images = slider.querySelectorAll('img')

let src = []
let offset = 0;
let step = 0;
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
	img.src = src[step]
	img.style.left = offset * 480 + "px"
	slider.appendChild(img)
	
	if (step < src.length - 1) {
		step++
	} else {
		step = 0;
	}
	if (offset < 4) {
		offset++
	}
}

function move(params) {
	let imagesExist = slider.querySelectorAll('img')
	let offset2 = 0;
	if (this.matches('.right')) {
		for (let img of imagesExist) {
			img.style.left = `${offset2 * 480 - 480}px`
			offset2++
		}
		createImg()
	} else {

	}
	this.removeEventListener('click', move)
	setTimeout(function (params) {
		imagesExist[0].remove()
		params.addEventListener('click', move)
	}, 900, this)
}

previous.addEventListener('click', move)
next.addEventListener('click', move)
