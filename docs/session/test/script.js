const form = document.getElementById('questionnaire-form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // 기본 제출 동작 중지

    // Get user's answers
    const answers = {
	never: 0,
	sometime: 0,
	often: 0,
	always: 0/*
	question1: "",
	question2: "",
	question3: "",
	question4: ""*/
    };
    const checkboxes = document.querySelectorAll(
	"input[type=radio]:checked"
    );
    checkboxes.forEach((checkbox) => {
	answers[checkbox.value] += 1;
    });

    // Calculate user's score based on answers
    let score = 0;
    score += answers.never * 1 + answers.sometime * 2 + answers.often * 3 + answers.always * 4;/*
    if (answers.question1 === "often" || answers.question1 === "always") {
	score += 2;
    } else if (answers.question1 === "sometime") {
	score += 1;
    }

    if (answers.question2 === "often" || answers.question2 === "always") {
	score += 2;
    } else if (answers.question2 === "sometime") {
	score += 1;
    }

    if (answers.question3 === "often" || answers.question3 === "always") {
	score += 2;
    } else if (answers.question3 === "sometime") {
	score += 1;
    }

    if (answers.question4 === "often" || answers.question4 === "always") {
	score += 2;
    } else if (answers.question4 === "sometime") {
	score += 1;
    }
    const encodedscore = encodeURIComponent(score);
    const queryString = "?score=${encodedscore}";*/
    window.location.href = "result.html?score=" + score;

/*    // Display advice based on score
    let adviceTitle = "";
    let adviceContent = "";
    if (score < 4) {
	adviceTitle = "You Need to Improve Your Habits!";
	adviceContent =
	    "It looks like you have some unhealthy habits that you should work on. Try to exercise regularly, eat a balanced diet, and avoid smoking and drinking alcohol.";
    } else if (score < 8) {
	adviceTitle = "You're Doing Okay, But There's Room for Improvement.";
	adviceContent =
	    "You're on the right track, but there are still some areas where you can improve your health. Try to exercise more often, eat a balanced diet, and limit your smoking and drinking.";
    } else {
	adviceTitle = "Congratulations, You're Healthy!";
	adviceContent =
	    "Great job! Your healthy habits are paying off. Keep up the good work and continue to exercise regularly, eat a balanced diet, and avoid smoking and drinking alcohol.";
    }

    // Display advice on the page
    document.getElementById("questionnaire-form").style.display = "none";
    document.getElementById("advice-container").style.display = "block";
    document.getElementById("advice-title").innerText = adviceTitle;
    document.getElementById("advice-content").innerText = adviceContent;*/
});
