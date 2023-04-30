const form = document.getElementById("form");
const btn = document.getElementById("submit");
const serviceID = "service_fv6oze8";
const templateID1 = "template_mtyfdys";
const templateID2 = "template_m5b91ug";
const sendFeedbackPos = $("#send-feedback").offset().top;
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
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
	    if (
		location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
		    &&
		    location.hostname == this.hostname
	    ) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
		    event.preventDefault();
		    $('html, body').animate({
			scrollTop: target.offset().top
		    }, 1000, function() {
			var $target = $(target);
			$target.focus();
			if ($target.is(":focus")) {
			    return false;
			} else {
			    $target.attr('tabindex','-1');
			    $target.focus();
			};
		    });
		}
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
    if (
	scrollPos > sendFeedbackPos ||
	    $(window).scrollTop() + $(window).height() == $(document).height()
    ) {
	document.getElementById("homeButton").style.fontSize = "18px";
	document.getElementById("sendFeedbackButton").style.fontSize = "30px";
    } else {
	document.getElementById("homeButton").style.fontSize = "30px";
	document.getElementById("sendFeedbackButton").style.fontSize = "18px";
    }
});
