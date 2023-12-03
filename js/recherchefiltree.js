//scroll up button fonction

let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (window.scrollY > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}// faire apparitre le button pour le scroll up 

mybutton.addEventListener('click', function() {
  document.documentElement.scrollTop = 0; // revenir en haut de la page
});
/************************************************************************** */

// si je clicK sur le buton search , affiche le choix des filtre
//sous forme des choix à cocher via des checkbox 

let btnSearch = document.getElementById("search")

btnSearch.addEventListener("click", function(){
    var filterSection = document.querySelector(".filterContainer");
    if (filterSection.style.display === "none") {
      filterSection.style.display = "block";
     
    } else {
      filterSection.style.display = "none";
    }
  });
  
// display toggle avec la meme logique pour le menu burger en version mobile **********/
let burger = document.getElementById("burger")
// console.log(burger)

burger.addEventListener("click",function(){
  let navMobile = document.getElementById("menuMobile")
  if (navMobile.style.display === "none") {
    navMobile.style.display = "block";
  } else {
    navMobile.style.display = "none";
  }
});

/***************************************************************** */
// Recherche filtrée
document.getElementById("submitFilter").addEventListener("click", applyFilters);

function applyFilters() {
  // Récupérez les valeurs des filtres sélectionnés
  const selectedFamilies = getSelectedCheckboxes("parFamille");
  // console.log(selectedFamilies)
  const selectedNotes = getSelectedCheckboxes("parNote");
  // console.log(selectedNotes)

  // Appliquez les filtres au tableau d'objets perfumeList // soit include la famille olf soit les notes ou les deux
  const filteredPerfumes = perfumeList.filter(perfume => {
    return (
      selectedFamilies.includes(perfume.familleOlf) ||
      perfume.notes.some(note => selectedNotes.includes(note))
    );
  });
  console.log(filteredPerfumes)

  // Affichez les parfums filtrés
  displayFilteredPerfumes(filteredPerfumes);
}

// Fonction pour récupérer les valeurs des cases cochées
function getSelectedCheckboxes(formId) {
  const checkboxes = document.querySelectorAll(`.${formId} input[type="checkbox"]:checked`);
  return Array.from(checkboxes).map(checkbox => checkbox.id);
}


// Fonction pour afficher les parfums filtrés // mm inner html affichage catalogue
function displayFilteredPerfumes(filteredPerfumes) {
  const listContainer = document.querySelector(".parfumListContainer");
  listContainer.innerHTML = ""; // Effacez la liste actuelle

  filteredPerfumes.forEach(parfum => {
    // Créez et ajoutez les éléments DOM pour chaque parfum filtré
    let article = document.createElement("div");
    article.className = "card";
    article.innerHTML = `
      <img src="${parfum.src}" alt="${parfum.name}">
      <div class="card-content">
        <div class="card-name">${parfum.name}</div>
        <div class="card-description">${parfum.familleOlf}</div>
      </div>
      <div class="bottom-section">
        <div class="lirePlus">
          <button onclick="toggleDescription(this)" class="lirePlusBtn">Lire plus</button>
        </div>
      <div class= "heart-container">
        ${parfum.favoris ? '<i class="fa-solid fa-heart" id= "fullHeart"></i>' : '<i class="fa-regular fa-heart" id= "emptyHeart"></i>'}
      </div>
        </div>
      <div class="product-description">
        <p><b>Famille olfactive:</b> ${parfum.familleOlf}</p>
        <p><b>Notes:</b> ${parfum.notes.join(", ")}</p> 
        <p><b>pour:</b> ${parfum.genre}</p>
        <p><b>Description:</b> ${parfum.description}</p>
      </div>
    `;
    

    listContainer.appendChild(article);
  });
}
