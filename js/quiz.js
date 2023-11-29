
// Tableu d'objet question
// chaque reponse apporte les point à une famille olfactive 
// la categorie avec le plus de point est la catégorie suggèrée 

let Questions = [
    {
        question:"Quel type de fleur préférez-vous ?",
        options:["Rose","Cèdre ","Pomme","Mousse de chêne"],
        },
    
    {
        question:"Quel type de fleur préférez-vous ?",
        options:["Muguet","Santal","Fraise","Patchouli"],
            },
        
    {
        question:"Quel type de fleur préférez-vous ?",
        options:["Jasmin ","Vétiver","Citron ","Bergamote"],
                },
            
    {
        question:"Quel type de fleur préférez-vous ?",
        options:["Pivoine","Pin","Pêche",""],
                    },
];





console.log(Questions);




let currentQuestionIndex = 0;
let score = 0;

// Function to check the user's answer and update the score
function checkAnswer(selectedOption) {
    const currentQuestion = Questions[currentQuestionIndex];

    if (selectedOption === currentQuestion.reponse) {
        score += 10; // incremente de 10 la barre
        alert('YESS SSIR' ) // message reponse correcte
    } else{
        alert('Oupsie!Reponse pas correcte tu fera mieux à la prochaine ' );// message reponse fausse

    }
    // Actualiser l'affichage de la barre , label et niveau
    const scoreContainer = document.querySelector('.score');
    scoreContainer.innerHTML = `
    <label for="score">Score:${score}%</label>
    <progress id="file" max="100" value="${score}"></progress>
`;

    // passer à la question d'apres ou finir le jeux
    currentQuestionIndex++;

    if (currentQuestionIndex < Questions.length) {
        updateQuestion(); // si <totalité des question je continue
    } else {
        // Fin du quiz avec les points
        alert('Bravo ton score final est: ' + score);
    }
}

// Mettre à jour les option correspondante à la question actuelle
    function updateQuestion() {
        const questionActuelle = Questions[currentQuestionIndex];
        const questionAffichage = document.getElementById('question'); // affiche dans la div question
        const optionsAffichage = document.querySelector('.Reponses');// les option dans la div reponses

    // nouvelle question qui s'affiche
    questionAffichage.textContent = questionActuelle.question; 

    // refresh les options 
    optionsAffichage.innerHTML = ''; // en les enleveant

    // crée à nouveau les options pour la question actuelle avec append
    questionActuelle.options.forEach((option, index) => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        optionsAffichage.appendChild(optionElement);

        // rajoute un event listenerpour chaque option
        optionElement.addEventListener('click', () => {
            checkAnswer(option);
        });
    });
}

// Initial question update
updateQuestion();
// // button pour reload la page et rejouer à nouveua
// let joueEncore = document.createElement('button');

// document.quizContainer.appendChild(joueEncore)


