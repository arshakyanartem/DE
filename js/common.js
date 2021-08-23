let contactBtn = document.querySelector('.contacts__btn');
let popup = document.querySelector('.popup');
let body = document.querySelector('body');
let submitBtn = document.querySelector('.popup__form-btn');

const showModal = (ev) => {
	popup.classList.add('show');
	body.classList.add('lock');
};

const submitForm = () => {
	let name = document.querySelector('#name');
	let email = document.querySelector('#email');
	let message = document.querySelector('#message');
	if (name.value == '') {
		name.classList.add('req');
	}
	else if (email.value == '') {
		email.classList.add('req');
	}
	else if (message.value == '') {
		message.classList.add('req');
	}
	else {
		popup.classList.remove('show');
		name.value = '';
		email.value = '';
		message.value = '';
		body.classList.remove('lock');
		alert ('Your message successfully sent!');
	}

	name.addEventListener('keydown', () => {
		name.classList.remove('req');
	});
	email.addEventListener('keydown', () => {
		email.classList.remove('req');
	});
	message.addEventListener('keydown', () => {
		message.classList.remove('req');
	});
}

contactBtn.addEventListener('click', showModal);

popup.addEventListener('click', (ev) => {
	if (ev.target == popup) {
		popup.classList.remove('show');
	}
})

document.addEventListener('keydown', (ev) => {
	if (ev.key == 'Escape') {
		popup.classList.remove('show');
		body.classList.remove('lock');
	}
})

submitBtn.addEventListener('click', submitForm);



