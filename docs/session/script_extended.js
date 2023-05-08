const form = document.getElementById('questionnaire-form');
const btn = document.getElementById('submit');
const headerHeight = $('header').outerHeight();
const queryParams = new URLSearchParams(window.location.search);
const score = queryParams.get('score');

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
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const answers = {
	score1: 0,
	score2: 0,
	score3: 0,
	score4: 0
    };
    const checkboxes = document.querySelectorAll("input[type=radio]:checked");
    checkboxes.forEach((checkbox) => {
	answers[checkbox.value] += 1;
    });
    var score2 = +score;
    score2 += answers.score1 * 1 + answers.score2 * 2 + answers.score3 * 3 + answers.score4 * 4;
    if (score2 <= 22) {
	window.location.href ="questions_answers.html?score=" + score2;
    } else if (score2 <= 44 && score > 22) {
	window.location.href = "questions_answers2.html?score=" + score2;
    } else if (score2 <= 66 && score > 44) {
	window.location.href = "questions_answers3.html?score=" + score2;
    } else {
	window.location.href = "questions_answers4.html?score=" + score2;
    }
});
/*
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
}*/
