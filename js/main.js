let previous = document.querySelector('.left')
let next = document.querySelector('.right')
let slider = document.querySelector('.slider')
let images = slider.querySelectorAll('img')

let src = []
let offset = 0;
let step = 0;
// clone src and remove all img===========
for (let i = 0; i < images.length; i++) {
	src[i] = images[i].src
	images[i].remove()
}
//  fill slider ======================
for (let i = 0; i < 4; i++) {
	createImg()
}
//  create img and load into end ==========
function createImg(params) {
	let img = document.createElement('img')
	img.src = src[step]
	slider.appendChild(img)
	if (step < src.length - 1) {
		step++
	} else {
		step = 0;
	}
}

function move(params) {
	let images2 = slider.querySelectorAll('img')
	if (this.matches('.right')) {
		for (let img of images2) {
			img.style.transform = `translate(${offset * 395 - (395 * 2)}px, 0)`
		}
		createImg()
	} else {

	}
	offset++
	setTimeout(function () {
		images2[0].remove()
	},2000)
}

previous.addEventListener('click', move)
next.addEventListener('click', move)
