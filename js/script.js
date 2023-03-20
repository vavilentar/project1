const feedbackBtns = document.querySelectorAll('.feedback-btn');

feedbackBtns.forEach(item => {
	item.addEventListener('click', (e) => {
		console.log(e.target)
	})
})


var slider = tns({
	container: '.my-slider',
	items: 1,
	mouseDrag: true,
	autoplay: true,
	autoplayButtonOutput: false,
	controls: false,
	responsive: {
		640: {
			edgePadding: 20,
			gutter: 20,
			items: 2
		},
		700: {
			gutter: 30
		},
		900: {
			items: 3
		}
	},
});

var slider2 = tns({
	container: '.my-slider2',
	items: 1,
	autoplay: true,
	autoplayButtonOutput: false,
	controls: false,
	responsive: {
		640: {
			edgePadding: 20,
			gutter: 20,
			items: 1
		},
		700: {
			gutter: 30
		},
		900: {
			items: 1
		}
	},
});