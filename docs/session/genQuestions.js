const questions = [
    {
	question: "Q1. Do you have sudden mood swings?",
	choices: ["Nope", "Rarely", "Sometimes", "Often"]
    },
    {
	question: "Q2. Do you feel sad all the time?",
	choices: ["No", "A little", "Sometimes", "Yes"]
    },
    {
	question: "Q3. Do you have random thoughts that are hard to get out from your mind?",
	choices: ["No", "Every once in a while", "Occasionally", "All the time"]
    },
    {
	question: "Q4. How have you been feeling lately?",
	choices: ["Pretty great. Nothing wrong so far","Just ok. I'm alright","Meh. could be better","Pretty awful. I don't feel happy"]
    },
    {
	question: "Q5. Can you tell me more about your past experiences and how they may be impacting you now?",
	choices: ["I think it was a pretty decent past. I like to look back on the good times","The past was the past. I look to the future and feel nothing"," I can't remember. But I don't care too much","I don't like my past. Pretty scary"]
    },
    {
	question: "Q6. How do you typically cope with stress or difficult emotions?",
	choices: ["I just take deep breaths and claim myself down","I try my hardest but it only goes away partially","I don't show emotion and keep a straight face","I don't know. I usually end up freaking out"]
    },
    {
	question: "Q7. How often do you get a health checkup?",
	choices: ["I get two/three or more each month","I get one each month or so","I get one at least once or twice a year","I don't get/can't afford checkups"]
    },
    {
	question: "Q8. Over the past 2 weeks, how often have you felt nervous, anxious, or on edge?",
	choices: ["Barely, if at all","Maybe once or twice","Probably a few times","Almost every day"]
    },
    {
	question: "Q9. On how many of the last 7 days did you engage in moderate to strenuous exercise?",
	choices: ["Six/Seven","Three to Five","One/two","I didn't exercise"]
    },
    {
	question: "10. Overall how would you rate your physical health?",
	choices: ["I'm in the best shape I can be","I think I'm decent","I could use some improvements","I'm pretty unhealthy looking"]
    },
    {
	question: "Q11. Have you felt particularly low or down for more than 2 weeks in a row?",
	choices: ["Never","Close to two weeks","Less than a week","Yes"]
    },
    {
	question: "Q12. Do you think about past events too much?",
	choices: ["Why live in the past?","I've thought about them for a day or two only","I think about them from time to time","I think about them constantly"]
    },
    {
	question: "Q13. Do you constantly feel like checking things like if the door is locked in the house or if the stove if off?",
	choices: ["Not at all. I trust myself enough","I like to check sometimes just in case","I only do that for valuable items","Yes"]
    },
    {
	question: "Q14. Do you have any worries/fears?",
	choices: ["Nope, I don't fear anything","I don't know if I have any","I have only one or two","I've got a whole library"]
    }
];

function generateQuestions() {
    const questionsContainer = document.getElementById("questions-container");

    questions.forEach((question, index) => {
	const questionDiv = document.createElement("div");
	questionDiv.classList.add("question");

	const questionLabel = document.createElement("label");
	questionLabel.setAttribute("for", `question${index + 1}`);
	questionLabel.textContent = question.question;
	questionDiv.appendChild(questionLabel);

	question.choices.forEach((choice, choiceIndex) => {

	    const checkboxesDiv = document.createElement("div");
	    checkboxesDiv.classList.add("checkboxes");
	    
	    const input = document.createElement("input");
	    input.setAttribute("type", "radio");
	    input.setAttribute("id", `score${4 - choiceIndex}-q${index + 1}`);
	    input.setAttribute("name", `question${index + 1}`);
	    input.setAttribute("value", `score${4 - choiceIndex}`);
	    
	    const label = document.createElement("label");
	    label.setAttribute("for", `score${4 - choiceIndex}-q${index + 1}`);
	    label.textContent = choice;
	    
	    checkboxesDiv.appendChild(input);
	    checkboxesDiv.appendChild(label);
	    questionDiv.appendChild(checkboxesDiv);
	});
	questionsContainer.appendChild(questionDiv);
    });
}
generateQuestions();
