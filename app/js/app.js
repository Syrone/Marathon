import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination])

document.addEventListener('DOMContentLoaded', () => {

	const heroSwiper = new Swiper('.hero-slider', {
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	})

	// marketing
	const marketing = document.querySelector('.marketing'),
		data = [
			{
				title: 'Title of product One',
				where: '15 minutes ago Moscow, Russia',
			},
			{
				title: 'Title of product Two',
				where: '15 minutes ago Petersburg, Russia',
			},
			{
				title: 'Title of product Three',
				where: '15 minutes ago Kaliningrad, Russia',
			},
		],
		// Close Marketing
		closeMarketing = () => {
			marketing.classList.remove('visible')
		}

	let counter = 0,
		delay = 4000

	marketing.addEventListener('click', (e) => {
		if (e.target.classList.contains('marketing-close')) {
			closeMarketing()
		}
	})

	const changeMarketingData = () => {
		marketing.classList.remove('visible')

		setTimeout(() => { marketing.classList.add('visible') }, delay - 3000)


		const stringTitle = data[counter].title,
			stringWhere = data[counter].where

		marketing.querySelector('.marketing-title').textContent = stringTitle
		marketing.querySelector('.marketing-text').textContent = stringWhere

		counter++

		if (counter == data.length) {
			counter = 0
		}

	}

	changeMarketingData()

	setInterval(changeMarketingData, delay)

})
