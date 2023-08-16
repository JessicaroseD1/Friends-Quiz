let startButton = document.getElementById("start-btn")
startButton.addEventListener("click", startGame)
console.log("Started"); // This is not appearing in the console

function startGame() {
  
}

function setNextQuestion() {

}

function selectAnswer() {

}

// Questions that will be asked

    const questions = [ {
        question: 'In The Matrix, does Neo take the blue pill or the red pill?',
            answers: [{
                text: 'red',
                correct: true
            },
            {
                text: 'blue',
                correct: false
            },
            {
                text: 'green',
                correct: false
            }
            {
                text: 'orange',
                correct: false
                
            }
            ]
        },
        {
        question: 'In the film Mean Girls, what day do they wear pink?',
            answers: [{
                text: 'wednesday',
                correct: true
            },
            {
                text: 'monday',
                correct: false
            },
            {
                text: 'thursday',
                correct: false
            },
            {
                text: 'friday',
                correct: false
            }
            ]
        },
        {
        question: 'What DC movie was shockingly canceled by Warner Bros. in 2022?',
            answers: [{
                text: 'batgirl',
                correct: true
            },
           {
                text: 'batman',
                correct: false
            }, 
            {
                text: 'batman',
                correct: false
            },
            {
                text: 'venom',
                 correct: false
                },
            ]
        },
        {
        question: 'What is the first rule of Fight Club?',
            answers: [{
                text: 'You do not talk about Fight Club.',
                correct: true
            },
            {
                text: 'have a glass of water',
                    correct: false
                },
            {
                text: 'eat nothing but chicken',
                correct: false
            },
            {
                text: 'sleep for 3 hours before the fight',
                correct: false
            },
        }
        ]
        

