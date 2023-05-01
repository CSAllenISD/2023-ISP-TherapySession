const form = document.getElementById('form');
const btn = document.getElementById('submit');
const serviceID = 'service_fv6oze8';
const templateID1 = 'template_mtyfdys';
const templateID2 = 'template_m5b91ug';
const headerHeight = $('header').outerHeight();
const moreButtons = document.querySelectorAll('.more-button');
const moreInfos = document.querySelectorAll('.more-info');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    btn.value = 'Submitting...';
    emailjs.sendForm(serviceID, templateID1, form)
        .then(() => {
	    btn.value = 'Submitted!';
	})
        .catch(() => {
	    btn.value = 'Failed!';
	});

    emailjs.sendForm(serviceID, templateID2, form)
        .then(() => {
	    btn.value = 'Submitted!';
	})
        .catch(() => {
	    btn.value = 'Failed!';
	});
    var formContainer = document.getElementById('formContainer');
    formContainer.classList.toggle('show');
    document.getElementById('thankYou').style.display = 'block';    
});
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
	var targetId = $(this).attr('href').substring(1);
	var target = $(this.getAttribute('href'));
	if (target.length) {
	    event.preventDefault();
	    $('html, body').stop().animate({
		scrollTop: target.offset().top
	    }, 1000);
	}
    });
    moreButtons.forEach((moreButton, index) => {
	moreButton.addEventListener('click', () => {
	    var classList = moreInfos[index].classList;
	    clickMoreInfoButton(classList,moreButton);
	});
    });
});
$(window).scroll(() => {
    const scrollPos = $(this).scrollTop();
    if (scrollPos > headerHeight) {
	$('nav').addClass('fixed');
	$('main').addClass('fixednav');
    } else {
	$('nav').removeClass('fixed');
	$('main').removeClass('fixednav');
    }
});
function clickMoreInfoButton(classList,moreButton) {
    if (classList.contains(classList.item(1))) {
	classList.toggle('show');
    }
    if (moreButton.innerHTML.includes('More')) {
	window.location.href = 'faqs.html';
    }	
    if (moreButton.innerHTML.includes('Show') || moreButton.innerHTML.includes('Open') || moreButton.innerHTML.includes('View')) {
	moreButton.innerHTML = moreButton.innerHTML.replace('Show', 'Hide').replace('Open', 'Close').replace('View','More');
    } else if (moreButton.innerHTML.toLowerCase().includes('More')) {
	window.location.href = 'faqs.html';
    } else {
	moreButton.innerHTML = moreButton.innerHTML.replace('Hide', 'Show').replace('Close', 'Open').replace('More','View');
    }
}
