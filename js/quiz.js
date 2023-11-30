
// Tableu d'objet question
// chaque reponse apporte les point à une famille olfactive 
// la categorie avec le plus de point est la catégorie suggèrée 

let Questions = [
    {
        question:"Choisi la scenteur preferé parmi celles ci?",
        options:["Rose","Cèdre ","Pomme","Mousse de chêne"],
        },
    
    {
        question:"Choisi la scenteur preferé parmi celles ci?",
        options:["Muguet","Santal","Fraise","Patchouli"],
            },
        
    {
        question:"Choisi la scenteur preferé parmi celles ci?",
        options:["Jasmin ","Vétiver","Citron ","Bergamote"],
                },
            
    {
        question:"Choisi la scenteur preferé parmi celles ci?",
        options:["Pivoine","Pin","Pêche","Labdanum"],
                    },
];





console.log(Questions);


let currentQuestionIndex = 0;

let score = 0;
// objet pour associé valeur à sa clé , pour recuperer le nom
let Florale = {score:0,name:"Florale"};
let Boisée = {score:0,name:"Boisée"};
let Fruitée = {score:0,name:"Fruitée"};
let Chyprée = {score:0,name:"Chyprée"};
// variable pour compter dedans
// possible un switch


    // Function to check the user's answer and update the score
    function checkAnswer(selectedOption) {
        const currentQuestion = Questions[currentQuestionIndex];

        if (selectedOption === currentQuestion.options[0])
        { 
            Florale.score += 10; // incremente de 10 la var florale
            // alert('florale ici' ) // 
        } else if (selectedOption === currentQuestion.options[1]){
            Boisée.score += 10 // increment la var boisée
            // alert('boisée indeed ' );
        }else if (selectedOption === currentQuestion.options[2]){
            Fruitée.score += 10 // increment var fruitée
            // alert('fruitée here')
        }
            else if (selectedOption === currentQuestion.options[3]){
                Chyprée.score += 10 // incremente la var chyprée
                // alert('chyprée')
            };


                    // fx pour comparer les valeurs des variable et trouvé la plus grande

                    function resultatQuiz() {
                        let categories = [Florale, Boisée, Fruitée, Chyprée];

                        // Trouver la catégorie avec le score le plus élevé
                        let highestCategory = categories.reduce((max, category) => max.score > category.score ? max : category, categories[0]);

                        console.log(highestCategory.name);

                        return highestCategory.name;
                    }



    // passer à la question d'apres ou finir le jeux
    currentQuestionIndex++;

    if (currentQuestionIndex < Questions.length) {
        updateQuestion(); // si <totalité des question je continue
    } else {
        // Fin du quiz avec les points
        alert('La famille olfactive pour toi est: ' + resultatQuiz());// recupere la categorie à partir de la fx resultat quiz
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


