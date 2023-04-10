document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar');
	const burgerMenu = document.querySelector('.navbar-collapse');
	const allLinks = document.querySelectorAll('.nav-link');

	const addShadow = () => {
		if (window.scrollY >= 50) {
			nav.classList.add('nav-shadow');
		} else {
			nav.classList.remove('nav-shadow');
		}
	};

	window.addEventListener('scroll', addShadow);
});
