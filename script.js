let currentQuestion = 0;
let score = 0;

function loadQuestion(){

let q = questions[currentQuestion];

document.getElementById("progress").innerText =
"Question " + (currentQuestion+1) + " / " + questions.length;

document.getElementById("question").innerText = q.question;

let optionsHTML = "";

q.options.forEach((opt,index)=>{

optionsHTML += `
<button class="option" onclick="selectAnswer(${index}, this)">
${opt}
</button>
`;

});

document.getElementById("options").innerHTML = optionsHTML;

}

function selectAnswer(selected, element){

let correct = questions[currentQuestion].answer;

let buttons = document.querySelectorAll(".option");

buttons.forEach(btn => btn.disabled = true);

if(selected === correct){

element.classList.add("correct");
score++;

}else{

element.classList.add("wrong");
buttons[correct].classList.add("correct");

}

setTimeout(nextQuestion,1200);

}

function nextQuestion(){

currentQuestion++;

if(currentQuestion < questions.length){

loadQuestion();

}else{

document.querySelector(".quiz-container").innerHTML =
"<div id='result'>Quiz Finished<br><br>Your Score: "+score+" / "+questions.length+"</div>";

}

}

loadQuestion();
