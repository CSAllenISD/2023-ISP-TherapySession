function sendEmail() {
    const btn = document.getElementById("submit");
    document.getElementById("form").addEventListener("submit", function(event) {
	event.preventDefault();
	btn.value = "Submitting...";
	const serviceID = "service_fv6oze8";
	const templateID1 = "template_mtyfdys";
	const templateID2 = "template_m5b91ug";
	emailjs.sendForm(serviceID, templateID1, this)
            .then(() => {
		btn.value = "Submitted!";
	    }, (err) => {
		btn.value = "Failed!";
	    });
	emailjs.sendForm(serviceID, templateID2, this)
            .then(() => {
		btn.value = "Submitted!";
	    }, (err) => {
		btn.value = "Failed!";
	    });
	document.getElementById("formContainer").style.display = "none";
	document.getElementById("thankYou").style.display = "block";
    });
}
$(document).ready(function() {
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	    var target = $(this.hash);
	    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

	    if (target.length) {
		event.preventDefault();
		$('html, body').animate(
		    {scrollTop: target.offset().top},
		    1000,
		    function() {
			var $target = $(target);
			$target.focus();
			if ($target.is(":focus")) { return false }
			else {
			    $target.attr('tabindex','-1');
			    $target.focus();
			};
		    });
	    }
	}
    });
    var headerHeight = $('header').outerHeight();
    $(window).scroll(function() {
	var scrollPos = $(this).scrollTop();
	if (scrollPos > headerHeight) {
	    $('nav').addClass('fixed');
	} else {
	    $('nav').removeClass('fixed');
	}

    });
});
