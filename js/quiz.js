
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





// console.log(Questions);


let currentQuestionIndex = 0; 

let score = 0;
// objet pour associé valeur à sa clé , pour recuperer le nom
let Florale = {score:0,name:"Florale"};
let Boisée = {score:0,name:"Boisée"};
let Fruitée = {score:0,name:"Fruitée"};
let Chyprée = {score:0,name:"Chyprée"};
// variable pour compter dedans
// possible un switch


    // verifier en fx e la reponse et passer à la question suivante
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

    let quizResult;// rappeler la var dehors, le resultat du quiz
    function setQuizResult(result) {
        localStorage.setItem('quizResult', result);
    }//stocker en localstorage
    

    if (currentQuestionIndex < Questions.length) {
        updateQuestion(); // si <totalité des question je continue
    } else {
        // Fin du quiz avec les points
        quizResult = resultatQuiz(); // recupere la categorie à partir de la fx resultat quiz
        setQuizResult(quizResult);// rappelle la fx
        alert('La famille olfactive pour toi est: ' + quizResult);}
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

       
     
// Mettre le resultat du quiz dans la section mon profil
//quand je refresh la page 
document.addEventListener("DOMContentLoaded", function () {
  
         // Recupere le resultat du quiz dans localStorage
         let storedResult = localStorage.getItem('quizResult');
         let monProfil = document.getElementById("FamilleOlfPref");
        //  console.log(monProfil) //la section famille olf preferée
         // si on a deja fait le quiz sinon rien

         if (storedResult) {
         console.log(storedResult); 
           //je veux afficher dans mon profil la familleOlfactive issue du quiz:
         
             monProfil.innerHTML = `<h3>Famille Olfactive </h3> <p> D'apres le quiz , il semble que la famille olfactive ${storedResult}, soit la plus adaptée à tes gout </p>`
         } else {
         console.log('No quiz result stored');
          // Display a default message or take other action
          monProfil.innerHTML = `Faites le quiz pour decouvrir la famille olfactive que vous préferez`;// div vide
         }
    
        // je veux que la propriété favoris et le nom d parfum en question
        let favorisArray = perfumeList.map(perfume => ({ name: perfume.name, favoris: perfume.favoris }));
        console.log(favorisArray);
        // les favoris je beux les afficher dans la section mon profil
        favorisArray.forEach(perfume => {
            if (perfume.favoris) {
            const favoritePerfumeElement = document.getElementById('mesParfumsPréferés');
            console.log(favoritePerfumeElement)
            favoritePerfumeElement.innerHTML = `<h3>Favorite perfume:</h3> ${perfume.name}
    `;
            }
      });
      
    
})


