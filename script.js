const originalQuestions = [
    {
        "question": "- Frecuencia cardiaca menor de 60 lpm. Seleccione una:",
        "options": [
            "a. Sindrome de Stock Adams.",
            "b. Bradicardia",
            "c. Bradisfigmia",
            "d. Bradipnea "
        ],
        "correctOption": 1
    },
    {
        "question": "- En la clasificación de Levine para soplos cardíacos a partir de este grado podemos encontrar un Thrill. Seleccione una:",
        "options": [
            "a. Grado IV",
            "b. Grado III",
            "c. Grado V "
        ],
        "correctOption": 0
    },
    {
        "question": "- Sensaciones vibratorias que son producidas por un flujo turbulento de sangre que son perceptibles al tacto Seleccione una:",
        "options": [
            "a. Thrill",
            "b. Choque de la punta",
            "c. Sibilancias",
            "d. Soplo cardiaco "
        ],
        "correctOption": 0
    },
    {
        "question": "-Posición que consiste en colocar al paciente en decúbito lateral izquierdo cuando no se logra apreciar el choque de punta en decúbito supino. Seleccione una:",
        "options": [
            "a. Posición Genupectoral",
            "b. Posición Semifowler.",
            "c. Posición de Trendelenburg",
            "d. Posición de Pachón "
        ],
        "correctOption": 3
    },
    {
        "question": "- Cuáles son los ruidos que usted esperaría encontrar en adulto sano. Seleccione una:",
        "options": [
            "a. S2 y S3",
            "b. S1 y S3",
            "c. S1 y S2",
            "d. S4 y S1 "
        ],
        "correctOption": 2
    },
    {
        "question": "- El foco accesorio aórtico se localiza usualmente en: Seleccione una",
        "options": [
            "a. Segundo espacio intercostal línea paraesternal izquierda.",
            "b. Segundo espacio intercostal línea paraesternal derecha.",
            "c. Tercer espacio intercostal línea paraesternal derecha.",
            "d. Tercer espacio intercostal línea paraesternal izquierda. "
        ],
        "correctOption": 3
    },
    {
        "question": "- Se le conoce también como foco de Erb. Seleccione una:",
        "options": [
            "a. Foco tricuspídeo",
            "b. Foco pulmonar",
            "c. Foco mitral",
            "d. Foco accesorio aórtico. "
        ],
        "correctOption": 3
    },
    {
        "question": "- Al percutir el área pulmonar tenemos este sonido característico Seleccione una:",
        "options": [
            "a. Murmullo vesicular.",
            "b. Mate",
            "c. Resonante",
            "d. Timpánico "
        ],
        "correctOption": 2
    },
    {
        "question": "- Cuando tenemos el choque de la punta mayor de 2.5 cm, en el quinto espacio intercostal derecho a nivel de la línea medio clavicular nos traduce el siguiente diagnóstico: Seleccione una:",
        "options": [
            "a. Hipertrofia cardiaca",
            "b. Situs inversus",
            "c. Cardiomegalia",
            "d. Localización normal. "
        ],
        "correctOption": 1
    },
    {
        "question": "-Llamamos así al dedo que colocamos sobre el tórax de nuestro paciente al realizar la percusión. Seleccione una:",
        "options": [
            "a. Percutor.",
            "b. Plexor",
            "c. Plesímetro",
            "d. índice "
        ],
        "correctOption": 2
    },
    {
        "question": "- Signo clásico del infarto, al llevarse la mano al pecho. Seleccione una:",
        "options": [
            "a. Signo de Levine",
            "b. Signo de Musset",
            "c. Signo de Becker.",
            "d. Signo de Muller. "
        ],
        "correctOption": 0
    },
    {
        "question": "- Signo clásico al observar la pulsación de la úvula. Select one:",
        "options": [
            "a. Signo de Becker.",
            "b. Signo de Musset",
            "c. Signo de Müller.",
            "d. Signo de Levine "
        ],
        "correctOption": 2
    },
    {
        "question": "- Grado de soplo cardiaco que se caracteriza por que se ausculta a distancia. Seleccione una:",
        "options": [
            "a. Grado IV",
            "b. Grado VII",
            "c. Grado III",
            "d. Grado VI "
        ],
        "correctOption": 3
    },
    {
        "question": "-Este soplo lo auscultamos característicamente en la persistencia del conducto arterioso: Select one:",
        "options": [
            "a. Soplo holosistólico",
            "b. Soplo pansistólico",
            "c. Soplo Continuo",
            "d. Soplo presistólico. "
        ],
        "correctOption": 2
    },
    {
        "question": "- Soplo que se produce en una estenosis mitral. Select one:",
        "options": [
            "a. Soplo continuo",
            "b. Soplo inocente.",
            "c. Soplo sistólico",
            "d. Soplo diastólico "
        ],
        "correctOption": 3
    },
    {
        "question": "- Soplo que se produce en la estenosis tricuspídea: Seleccione una:",
        "options": [
            "a. Soplo diastólico",
            "b. Soplo inocente",
            "c. Soplo sistólico",
            "d. Soplo continuo "
        ],
        "correctOption": 0
    },
    {
        "question": "- Se refiere a las pulsaciones visibles de las arterias retinianas, que es otro signo de insuficiencia aórtica. Seleccione una:",
        "options": [
            "a. Signo de Levine.",
            "b. Signo de Musset.",
            "c. Signo de Becker.",
            "d. Signo de Muller."
        ],
        "correctOption": 2
    },
    {
        "question": "- Este signo se caracteriza por el movimiento rítmico de asentimiento o balanceo de la cabeza en sincronía con el latido del corazón, típicamente visto en la insuficiencia aórtica. Seleccione una:",
        "options": [
            "a. Signo de Levine.",
            "b. Signo de Musset.",
            "c. Signo de Becker.",
            "d. Signo de Muller. "
        ],
        "correctOption": 1
    },
    {
        "question": "- Este signo no está directamente relacionado con las pulsaciones. En cambio, describe el característico puño cerrado sostenido sobre el pecho cuando un paciente experimenta angina de pecho (dolor en el pecho debido a isquemia). Seleccione una:",
        "options": [
            "a. Signo de Levine.",
            "b. Signo de Musset.",
            "c. Signo de Becker.",
            "d. Signo de Muller. "
        ],
        "correctOption": 0
    },
    {
        "question": "- Se refiere a una frecuencia del pulso lenta, que puede ser sinónimo de bradicardia, pero se enfoca más en la lentitud del pulso palpable. Seleccione una:",
        "options": [
            "a. Sindrome de Stock Adams.",
            "b. Bradicardia",
            "c. Bradisfigmia",
            "d. Bradipnea "
        ],
        "correctOption": 2
    },
    {
        "question": "- Se refiere a episodios de pérdida de conciencia debidos a un trastorno del ritmo cardíaco (generalmente bradicardia extrema o bloqueo cardíaco completo). Seleccione una:",
        "options": [
            "a. Sindrome de Stock Adams.",
            "b. Bradicardia",
            "c. Bradisfigmia",
            "d. Bradipnea "
        ],
        "correctOption": 0
    },
    {
        "question": "- Este soplo es moderadamente fuerte y se puede escuchar fácilmente con el estetoscopio, pero no presenta un \"thrill\". Seleccione una:",
        "options": [
            "a. Grado IV",
            "b. Grado III",
            "c. Grado V",
            "d. Grado VI "
        ],
        "correctOption": 1
    },
    {
        "question": "- Es muy fuerte y se puede escuchar con el borde del estetoscopio apenas en contacto con la piel. Seleccione una:",
        "options": [
            "a. Grado IV",
            "b. Grado III",
            "c. Grado V",
            "d. Grado VI "
        ],
        "correctOption": 2
    },
    {
        "question": "- Es el impulso apical palpable del corazón contra la pared torácica, percibido normalmente en el quinto espacio intercostal en la línea media clavicular. Seleccione una:",
        "options": [
            "a. Thrill",
            "b. Choque de la punta", "c. Sibilancias",
            "d. Soplo cardiaco "
        ],
        "correctOption": 1
    },
    {
        "question": "- Son sonidos respiratorios anormales, agudos y continuos, que ocurren por la obstrucción del flujo de aire en las vías respiratorias, y no están relacionados con las sensaciones vibratorias de la sangre. Seleccione una:",
        "options": [
            "a. Thrill",
            "b. Choque de la punta", "c.Sibilancias",
            "d. Soplo cardiaco "
        ],
        "correctOption": 2
    },
    {
        "question": "- Es un sonido producido por el flujo turbulento de sangre a través de las válvulas cardíacas o cerca de ellas, escuchado a través del estetoscopio, pero no necesariamente perceptible al tacto como un \"thrill\". Seleccione una:",
        "options": [
            "a. Thrill",
            "b. Choque de la punta",
            "C. Sibilancias",
            "d. Soplo cardiaco "
        ],
        "correctOption": 3
    },
    {
        "question": "- Esta posición implica que el paciente se arrodille y coloque el pecho contra la superficie de apoyo, también conocida como posición de rodillas y pecho. Seleccione una:",
        "options": [
            "a. Posición Genupectoral",
            "b. Posición Semifowler.",
            "c. Posición de Trendelenburg",
            "d. Posición de Pachón "
        ],
        "correctOption": 0
    },
    {
        "question": "- En esta posición, el paciente está semi-sentado con el cabecero de la cama elevado a un ángulo de 30 a 45 grados, usada frecuentemente para mejorar la respiración y el confort. Seleccione una:",
        "options": [
            "a. Posición Genupectoral",
            "b. Posición Semifowler.",
            "c. Posición de Trendelenburg",
            "d. Posición de Pachón "
        ],
        "correctOption": 1
    },
    {
        "question": "- En esta posición, el cuerpo del paciente se inclina hacia abajo desde la cabeza hacia los pies, utilizada a veces para procedimientos quirúrgicos y mejorar el retorno venoso. Seleccione una:",
        "options": [
            "a. Posición Genupectoral",
            "b. Posición Semifowler.",
            "c. Posición de Trendelenburg",
            "d. Posición de Pachón "
        ],
        "correctOption": 2
    },
    {
        "question": "- Este tipo de soplo se escucha durante la sístole y puede ser causado por condiciones como la insuficiencia mitral o la estenosis aórtica: Seleccione una:",
        "options": [
            "a. Soplo diastólico",
            "b. Soplo inocente",
            "c. Soplo sistólico",
            "d. Soplo continuo"
        ],
        "correctOption": 2
    }
];

let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let incorrectQuestions = [];

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const scoreContainer = document.getElementById('score-container');
const scoreText = document.getElementById('score-text');

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';

    const shuffledOptions = shuffle([...currentQuestion.options]);
    shuffledOptions.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.className = 'option';
        if (currentQuestion.options[currentQuestion.correctOption] === option) {
            button.dataset.correct = true;
        }
        button.onclick = () => checkAnswer(button);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(button) {
    const buttons = document.getElementsByClassName('option');
    if (button.dataset.correct) {
        button.classList.add('correct');
        score++;
    } else {
        button.classList.add('incorrect');
        for (let btn of buttons) {
            if (btn.dataset.correct) {
                btn.classList.add('correct');
            }
        }
        incorrectQuestions.push(questions[currentQuestionIndex]);
    }
    setTimeout(nextQuestion, 500);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else if (incorrectQuestions.length > 0) {
        questions = shuffle([...incorrectQuestions]);
        incorrectQuestions = [];
        currentQuestionIndex = 0;
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    scoreContainer.style.display = 'block';
    scoreText.textContent = `Tu puntuación es ${score}/${originalQuestions.length}`;
    document.getElementById('quiz-container').style.display = 'none';
}

function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    incorrectQuestions = [];
    questions = shuffle([...originalQuestions]);
    scoreContainer.style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    loadQuestion();
}

questions = shuffle([...originalQuestions]);
loadQuestion();
