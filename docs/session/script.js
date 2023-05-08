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
    document.querySelector('.more-button.send-feedback').style.display = 'none';
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
    /* checkbox creation and count */
    var count = 0;
    function updateCount() {
	count = 0;
	var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
	for (var i = 0; i < checkboxes.length; i++) {
            count += parseInt(checkboxes[i].value);
	}
    }
    /* event listeners (detects checkbox click) */
    document.getElementById('checkbox1').addEventListener('click', function() {
	handleCheckboxClick('checkbox1');
	updateCount();
    });
    document.getElementById('checkbox2').addEventListener('click', function() {
	handleCheckboxClick('checkbox2');
	updateCount();
    });
    document.getElementById('checkbox3').addEventListener('click', function() {
	handleCheckboxClick('checkbox3');
	updateCount();
    });

    // Update link based on count
    const link = document.getElementById('link');
    if (count === 0) {
	link.href = '#';
    } else if (count === 1) {
	link.href = 'questions_extended.html';
    } else if (count === 2) {
	link.href = 'questions_extended2.html';
    } else if (count === 3) {
	link.href = 'https://www.coolmathgames.com/';
    }
const facts = [
    'The tallest mountain in our solar system is Olympus Mons, located on Mars.',
    'A group of flamingos is called a flamboyance.',
    'The Earth has a diameter of about 12,742 kilometers.',
    'Cats can make over 100 different sounds.'
];

function generateRandomFact() {
    const factIndex = Math.floor(Math.random() * facts.length);
    const random_fact = facts[factIndex];
    const factElement = document.getElementById('random_fact');
    factElement.innerHTML = random_fact;
}

window.onload = generateRandomFact();

