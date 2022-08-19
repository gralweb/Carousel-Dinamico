const carousel = document.querySelector('.gral-banner')
const carousel_item = document.querySelectorAll('.gral-banner-card')
const carousel_items = carousel_item ? carousel_item.length : 1

const gral_btn_prev = document.querySelector('.gral-btn-prev')
const gral_btn_next = document.querySelector('.gral-btn-next')

let _counter = 0

const init_carousel = () => {
	if (carousel_item) {
		carousel_item[0].classList.add('active')
		carousel_item[carousel_items - 1].classList.add('last')
	}
}

const carousel_prev = () => {
	if (carousel_item) {
		if (_counter === 0) {
			_counter = carousel_items
		}

		carousel_item.forEach(item => {
			item.classList.remove('active')
		})

		carousel_item[_counter - 1].classList.add('active')
		carousel_item[_counter - 1].classList.remove('last')

		if (carousel_item[_counter - 2]) {
			carousel_item[_counter - 2].classList.add('last')
		}

		if (!carousel_item[_counter - 2]) {
			carousel_item[carousel_items - 1].classList.add('last')
		}

		_counter--
	}
}

const carousel_next = () => {
	if (carousel_item) {
		if (_counter === carousel_items) {
			_counter = 0
		}

		carousel_item.forEach(item => {
			item.classList.remove('active')
			item.classList.remove('last')
		})

		carousel_item[_counter].classList.add('last')

		if (carousel_item[_counter + 1]) {
			carousel_item[_counter + 1].classList.add('active')
		}

		if (!carousel_item[_counter + 1]) {
			carousel_item[0].classList.add('active')
		}
		_counter++
	}
}

const carousel_loop = () => {
	setInterval(() => {
		carousel_next()
	}, 3000)
}

gral_btn_prev.addEventListener('click', () => {
	carousel_prev()
})

gral_btn_next.addEventListener('click', () => {
	carousel_next()
})


window.onload = () => {
	init_carousel()
	carousel_loop()
}