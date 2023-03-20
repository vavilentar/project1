const feedbackBtns = document.querySelectorAll('.feedback-btn');
const feedbackModal = document.querySelector('.feedback-modal');
const feedbackCloseBtn = document.querySelector('.close-modal');

feedbackBtns.forEach(item => {
	item.addEventListener('click', (e) => {
		feedbackModal.classList.remove('feedback-modal_closed')
	})
})

feedbackCloseBtn.addEventListener('click', (e) => {
	feedbackModal.classList.add('feedback-modal_closed')
})

$('#phone').mask("+7 (999) 999-9999");

$('form').submit(function(e) {
	e.preventDefault();
	$.ajax({
		type: "POST",
		url: "../mailer/smart.php",
		data: $(this).serialize()
	}).done(function() {
		$(this).find("input").val("");


		$('form').trigger('reset');
	});

	return false;
});


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