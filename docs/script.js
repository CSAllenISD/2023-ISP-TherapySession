const form = document.getElementById("form");
const btn = document.getElementById("submit");
const serviceID = "service_fv6oze8";
const templateID1 = "template_mtyfdys";
const templateID2 = "template_m5b91ug";
const headerHeight = $('header').outerHeight();

form.addEventListener("submit", (event) => {
    event.preventDefault();
    btn.value = "Submitting...";
    emailjs.sendForm(serviceID, templateID1, form)
        .then(() => {
	    btn.value = "Submitted!";
	})
        .catch(() => {
	    btn.value = "Failed!";
	});

    emailjs.sendForm(serviceID, templateID2, form)
        .then(() => {
	    btn.value = "Submitted!";
	})
        .catch(() => {
	    btn.value = "Failed!";
	});

    document.getElementById("formContainer").style.display = "none";
    document.getElementById("thankYou").style.display = "block";
});
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
	var target = $(this.getAttribute('href'));
	if (target.length) {
	    event.preventDefault();
	    $('html, body').stop().animate({
		scrollTop: target.offset().top
	    }, 1000);
	}
    });
});
$(window).scroll(() => {
    const scrollPos = $(this).scrollTop();
    if (scrollPos > headerHeight) {
	$("nav").addClass("fixed");
	$("main").addClass("fixednav");
    } else {
	$("nav").removeClass("fixed");
	$("main").removeClass("fixednav");
    }
});
