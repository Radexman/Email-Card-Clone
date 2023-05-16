// Form Validation

const output = document.getElementById('output');
const form = document.getElementById('form');

const validate = (e) => {
	e.preventDefault();
	let msg;

	if (!e.target.firstElementChild.value) {
		msg = 'Please enter your email adderss.';
	} else {
		msg = 'Thank you for your submission';
	}

	output.textContent = msg;
};

form.addEventListener('submit', validate);
