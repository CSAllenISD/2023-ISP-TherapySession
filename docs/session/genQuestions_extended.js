const questions = [
    {
	question: "Q1. Have you tried fixing your issues?",
	choices: ["Yes I have", "I've tried", "Rarely", "Not at all"]
    },
    {
	question: "Q2. Please describe/summarize your past expereinces",
	choices: ["I have some good memories", "I'd rather not say", "Nothing bad nothing good", "Traumatizing"]
    },
    {
	question: "Q3. Do you feel as much emotion as you used to?",
	choices: ["I feel them", "I some but not all", "I only feel extreme emotions", "I'm numb"]
    },
    {
	question: "Q4. How often do you indulge in healthy habits like eating fruits and vegetables?",
	choices: ["I generally eat healthy", "I have only healthy things as my diet", "I cheat on junk food every now and then eat healthy", "I don't eat anything heatlhy"]
    },
    {
	question: "Q5. How often do you engage in moderate to vigorous physical activity/exercise?",
	choices: ["Usually everyday", "One or two days a week", "Once a month", "None whatsoever"]
    },
    {
	question: "Q6. Have you ever been hospitalized for a medical condition?",
	choices: ["Nope", "I don't know", "Only once or twice", "Frequently"]
    },
    {
	question: "Q7. In the past 7 days, did you need help from others to perform everyday activities?",
	choices: ["Nope I got it all by myself", "Rarely if at all", "I needed a little assistance", "I needed a lot of assistance"]
    },
    {
	question: "Q8. Do you have trouble sleeping?",
	choices: ["I can sleep just fine", "I have one or two nights that I don't sleep", "Every once in a while, but it gets fixed quickly", "I have frequent insomnia"]
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
