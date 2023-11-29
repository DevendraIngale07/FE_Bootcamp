const quizData = [
{
    question: "which language runs in a web browser",
    a: "java",
    b:"python",
    c:"C",
    d:"JavaScript",
},
{
    question: "which language runs in a web browser",
    a: "java",
    b:"python",
    c:"C",
    d:"JavaScript",
},
{
    question: "which language runs in a web browser",
    a: "java",
    b:"python",
    c:"C",
    d:"JavaScript",
},
{
    question: "which language runs in a web browser",
    a: "java",
    b:"python",
    c:"C",
    d:"JavaScript",
},
{
    question: "which language runs in a web browser",
    a: "java",
    b:"python",
    c:"C",
    d:"JavaScript",
},
{
    question: "which language runs in a web browser",
    a: "java",
    b:"python",
    c:"C",
    d:"JavaScript",
}
];

const quiz = document.getElementById('quiz')
const answerEls = document.getElementById('.answer')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0 
let score = 0

loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    a_text.innerText = currentQuizData.b
    a_text.innerText = currentQuizData.c
    a_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEls => answerEls.checked = false)
}

function getSelected(){
    let answerEls
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answerEl = answerEl.quizData
        }
    })
    return answerEls
}


