const questions = [
    { question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "High Tool Markup Level", "Hyperlinks Text Making Language", "Home Tool Markup Language"],
      answer: 0
    },
    { question: "Which language styles web pages?",
      options: ["JavaScript", "CSS", "HTML", "Python"],
      answer: 1
    },
    { question: "Which tag is used for JavaScript?",
      options: ["<js>", "<javascript>", "<script>", "<code>"],
      answer: 2
    },
    { question: "CSS property for text color?",
      options: ["font-color", "color", "text-style", "background-color"],
      answer: 1
    },
    { question: "Comment symbol in JS?",
      options: ["//", "/*", "<!--", "#"],
      answer: 0
    },
    { question: "Largest HTML heading?",
      options: ["<h6>", "<h1>", "<header>", "<heading>"],
      answer: 1
    },
    { question: "Who created JavaScript?",
      options: ["Google", "Netscape", "Microsoft", "Oracle"],
      answer: 1
    },
    { question: "CSS stands for?",
      options: ["Creative Style System", "Cascading Style Sheets", "Color Style System", "Computer Styling Sheet"],
      answer: 1
    },
    { question: "Image tag?",
      options: ["<image>", "<pic>", "<img>", "<src>"],
      answer: 2
    },
    { question: "Stores multiple values?",
      options: ["String", "Array", "Boolean", "Char"],
      answer: 1
    },
    { question: "Console method?",
      options: ["print()", "console.log()", "message()", "write()"],
      answer: 1
    },
    { question: "ID selector?",
      options: [".", "#", "*", "&"],
      answer: 1
    },
    { question: "Hyperlink tag?",
      options: ["<a>", "<link>", "<href>", "<url>"],
      answer: 0
    },
    { question: "JavaScript is a ____ language.",
      options: ["Markup", "Programming", "Styling", "Database"],
      answer: 1
    },
    { question: "Image source attribute?",
      options: ["alt", "link", "src", "href"],
      answer: 2
    },
    { question: "Strict equality?",
      options: ["==", "=", "===", "===="],
      answer: 2
    },
    { question: "Line break tag?",
      options: ["<break>", "<lb>", "<br>", "<line>"],
      answer: 2
    },
    { question: "Background color property?",
      options: ["bg", "background", "color", "background-color"],
      answer: 3
    },
    { question: "Boolean means?",
      options: ["true/false", "numbers", "text", "arrays"],
      answer: 0
    },
    { question: "HTML file extension?",
      options: [".txt", ".js", ".html", ".css"],
      answer: 2
    }
];

let currentQuestion = 0;
let score = 0;
let selected = -1;

function startQuiz() {
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");

    loadQuestion();
}

function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;

    q.options.forEach((opt, index) => {
        const btn = document.getElementById("opt" + index);
        btn.innerText = opt;
        btn.classList.remove("correct", "wrong", "disabled");
    });

    selected = -1;
}

function disableAllButtons() {
    for (let i = 0; i < 4; i++) {
        document.getElementById("opt" + i).classList.add("disabled");
    }
}

function selectAnswer(index) {
    selected = index;
    const correct = questions[currentQuestion].answer;

    if (index === correct) {
        document.getElementById("opt" + index).classList.add("correct");
        score++;
    } else {
        document.getElementById("opt" + index).classList.add("wrong");
        document.getElementById("opt" + correct).classList.add("correct");
    }

    disableAllButtons();
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("end-screen").classList.remove("hidden");

    document.getElementById("final-score").innerText =
        score + " / " + questions.length;
}

function retryQuiz() {
    currentQuestion = 0;
    score = 0;

    document.getElementById("end-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");

    loadQuestion();
}
