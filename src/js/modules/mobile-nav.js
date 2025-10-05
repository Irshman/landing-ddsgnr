function mobileNav() {
	// Mobile nav button
	const burgerButton = document.querySelector('.burger');
	const nav = document.querySelector('.mobile-nav');
	const menuIcon = document.querySelector('.nav-icon');

	burgerButton.onclick = function () {
		burgerButton.classList.toggle('burger--active')
		nav.classList.toggle('mobile-nav--open');
		menuIcon.classList.toggle('nav-icon--active');
		document.body.classList.toggle('no-scroll');
	};
}

export default mobileNav;