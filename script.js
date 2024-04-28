var currentQuestion = 0;
var quizQuestions = [
    {
        question: "What is the capital of Japan?",
        options: ["Tokyo", "Seoul", "Beijing", "Bangkok", "Hanoi", "Singapore", "Manila", "Kuala Lumpur", "Jakarta", "New Delhi"],
        correctAnswer: "Tokyo"
    },
    {
        question: "Who wrote the play 'Hamlet'?",
        options: ["William Shakespeare", "Oscar Wilde", "Jane Austen", "Anton Chekhov", "Fyodor Dostoevsky", "Charles Dickens", "Homer", "Virginia Woolf", "George Orwell", "J.K. Rowling"],
        correctAnswer: "William Shakespeare"
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Oxygen", "Gold", "Iron", "Silver", "Carbon", "Hydrogen", "Nitrogen", "Helium", "Sodium", "Copper"],
        correctAnswer: "Oxygen"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet", "Edvard Munch", "Salvador Dali", "Rembrandt", "Michelangelo", "Raphael", "Georgia O'Keeffe"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        question: "In what year did the Titanic sink?",
        options: ["1912", "1901", "1923", "1935", "1876", "1950", "1987", "2000", "1945", "1898"],
        correctAnswer: "1912"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Mars", "Venus", "Jupiter", "Saturn", "Neptune", "Uranus", "Earth", "Mercury", "Pluto", "Sun"],
        correctAnswer: "Mars"
    },
    {
        question: "Who is the 44th President of the United States?",
        options: ["Barack Obama", "Donald Trump", "George W. Bush", "Bill Clinton", "Ronald Reagan", "Jimmy Carter", "John F. Kennedy", "Abraham Lincoln", "Franklin D. Roosevelt", "Thomas Jefferson"],
        correctAnswer: "Barack Obama"
    },
    {
        question: "What is the currency of Brazil?",
        options: ["Brazilian Real", "Peso", "Euro", "Dollar", "Yen", "Pound", "Rupee", "Yuan", "Ruble", "Ringgit"],
        correctAnswer: "Brazilian Real"
    },
    {
        question: "Who is the Greek god of thunder?",
        options: ["Zeus", "Poseidon", "Hades", "Apollo", "Athena", "Artemis", "Hermes", "Dionysus", "Hephaestus", "Demeter"],
        correctAnswer: "Zeus"
    }
];

function startQuiz(event) {
    event.preventDefault(); // Prevent form submission

    // Get form input values
    var username = document.getElementById("username").value;
    var numQuestions = parseInt(document.getElementById("numQuestions").value);

    // Generate quiz questions
    quizQuestions = shuffle(quizQuestions).slice(0, numQuestions);

    // Display first question
    displayQuestion(username);
}

function displayQuestion(username) {
    var quizResult = document.getElementById("quizResult");
    var question = quizQuestions[currentQuestion];
    var optionsHTML = "";

    optionsHTML += "<h2>Hello, " + username + "!</h2>";
    optionsHTML += "<h3>" + question.question + "</h3>";

    question.options.forEach(function (option, index) {
        optionsHTML += "<input type='radio' id='option" + index + "' name='answer' value='" + option + "'>";
        optionsHTML += "<label for='option" + index + "'>" + option + "</label><br>";
    });

    optionsHTML += "<button type='button' onclick='checkAnswer()'>Next Question</button>";

    quizResult.innerHTML = optionsHTML;
}

function checkAnswer() {
    var selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
        alert("Please select an option.");
        return;
    }

    if (selectedAnswer.value === quizQuestions[currentQuestion].correctAnswer) {
        alert("Correct!");
    } else {
        alert("Incorrect. The correct answer is: " + quizQuestions[currentQuestion].correctAnswer);
    }

    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {
        displayQuestion(document.getElementById("username").value);
    } else {
        displayQuizResult();
    }
}

function displayQuizResult() {
    var quizResult = document.getElementById("quizResult");
    quizResult.innerHTML = "<h2>Quiz Results</h2>";
    quizResult.innerHTML += "<p>Quiz completed!</p>";
}

// Function to shuffle an array
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
