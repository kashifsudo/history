let currentQuestion = 0;
let score = 0;

function loadQuestion(){

let q = questions[currentQuestion];

document.getElementById("question").innerText =
(currentQuestion+1) + ". " + q.question;

let optionsHTML = "";

q.options.forEach((opt,index)=>{

optionsHTML += `
<button class="option"
onclick="checkAnswer(${index})">
${opt}
</button>
`;

});

document.getElementById("options").innerHTML = optionsHTML;

}

function checkAnswer(selected){

if(selected === questions[currentQuestion].answer){
score++;
}

}

function nextQuestion(){

currentQuestion++;

if(currentQuestion < questions.length){
loadQuestion();
}else{
document.getElementById("question").innerHTML = "Quiz Finished";
document.getElementById("options").innerHTML = "";
document.getElementById("score").innerHTML =
"Your Score: " + score + " / " + questions.length;
}

}

loadQuestion();
