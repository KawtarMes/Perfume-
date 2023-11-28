/*        
    catalogue de parfum , 
    chaque parfum a : un nom , famille olfactive, notes, si il est favoris. une image.

*/


const perfumeList = [{
    name: "Chanel n°5",
    notes: ["Ylang-ylang","rose", "jasmin","aldéhydes", "vanille"],
    familleOlf: "Florale",
    favoris: true,
    src: "assets/images/chanel5.jpeg",
    genre: "femme",

},
{
    name: "Dior Sauvage",
    notes: ["Bergamote", "poivre", "patchouli", "ambroxan", "lavande"],
    familleOlf: "Boisée",
    favoris: true,
    src: "assets/images/diorSauvage.jpeg",
    genre: "homme",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam odit sint beatae, blanditiis voluptatibus ratione quos maiores id consequatur iure nobis voluptatem exercitationem impedit cupiditate voluptatum amet quaerat ut qui?",

},

    {name: "Guerlain Shalimar",
    notes: ["Citron", "bergamote", "iris", "vanille", "opoponax"],
    familleOlf: "Chyprée",
    favoris: true,
    src: "assets/images/guerlinShalimar.jpeg",
    genre: "femme",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam odit sint beatae, blanditiis voluptatibus ratione quos maiores id consequatur iure nobis voluptatem exercitationem impedit cupiditate voluptatum amet quaerat ut qui?",
}, 

    {name: "Marc Jacobs Daisy",
    notes: ["Fraise", "violette", "jasmin", "musc", "vanille"],
    familleOlf: "Fruitée",
    favoris: false,
    src: "assets/images/daisyMJ.jpeg",
    genre: "femme",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam odit sint beatae, blanditiis voluptatibus ratione quos maiores id consequatur iure nobis voluptatem exercitationem impedit cupiditate voluptatum amet quaerat ut qui?",
},

    {name: "Tom Ford Black Orchid",
    notes: ["Truffe", "ylang-ylang", "fruits noirs", "vanille, patchouli"],
    familleOlf: "Chyprée",
    favoris: false,
    src: "assets/images/blackOrchidTF.jpg",
    genre: "unisex",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam odit sint beatae, blanditiis voluptatibus ratione quos maiores id consequatur iure nobis voluptatem exercitationem impedit cupiditate voluptatum amet quaerat ut qui?",
},

    {name: "Jo Malone Peony & Blush Suede",
    notes: ["Pivoine", "pomme", "rouge", "rose", "daim", "musc"],
    familleOlf: "Florale",
    favoris: false,
    src: "assets/images/JoMalonePeony.jpg",
    genre: "femme",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam odit sint beatae, blanditiis voluptatibus ratione quos maiores id consequatur iure nobis voluptatem exercitationem impedit cupiditate voluptatum amet quaerat ut qui?",
},

    {name: "Yves Saint Laurent Black Opium",
    notes: ["Café", "poire", "vanille", "jasmin", "patchouli"],
    familleOlf: "Chyprée",
    favoris: false,
    src: "assets/images/blackOpiumYSL.jpg",
    genre: "femme",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam odit sint beatae, blanditiis voluptatibus ratione quos maiores id consequatur iure nobis voluptatem exercitationem impedit cupiditate voluptatum amet quaerat ut qui?",
},

    {name: "Hermès Terre d'Hermès",
    notes: ["Orange", "pamplemousse", "bois de cèdre", "vétiver", "benjoin"],
    familleOlf: "Boisée",
    favoris: false,
    src: "assets/images/TerredHermes.jpg",
    genre: "homme",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam odit sint beatae, blanditiis voluptatibus ratione quos maiores id consequatur iure nobis voluptatem exercitationem impedit cupiditate voluptatum amet quaerat ut qui?",
},

    {name: "Chloe Eau de Parfum",
    notes: ["Pivoine", "rose", "litchi", "cèdre", "ambre"],
    familleOlf: "Florale",
    favoris: false,
    src: "assets/images/chloe.jpg",
    genre: "femme",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam odit sint beatae, blanditiis voluptatibus ratione quos maiores id consequatur iure nobis voluptatem exercitationem impedit cupiditate voluptatum amet quaerat ut qui?",
},

    {name: "Escada Cherry in the Air",
    notes: ["Cerise", "marshmallow", "cocotier", "vanille", "musc"],
    familleOlf: "Fruitée",
    favoris: false,
    src: "assets/images/cherry.jpg",
    genre: "femme",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam odit sint beatae, blanditiis voluptatibus ratione quos maiores id consequatur iure nobis voluptatem exercitationem impedit cupiditate voluptatum amet quaerat ut qui?",
},
]

// console.log(perfumeList)
// console.log(perfumeList[0].src) // je recupre le premier src du premier parfum



let listContainer = document.querySelector(".parfumListContainer");

perfumeList.forEach(parfum => {
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

  // le join est une methode pour concatener les elements d'un tableau ou il y a des "" separer par des virgules ;en chaine de caracteres.
// je pourrais voir toutes mes notes par chaque parfum
  listContainer.appendChild(article);
});

function toggleDescription(button) {
  let card = button.closest('.card');
  let description = card.querySelector('.product-description');
  description.style.display = description.style.display === 'none' ? 'block' : 'none';
}

// ici j'essaye de changer la veleur de favoris pour un objet, et changer son icone aussi. je prend le premier parfum

  // // test filter
  // const results = perfumeList.filter(function(current) {
  // return current.familleOlf === "Boisée"
  // })
  // console.log(results)

// j'ai besoin de filtrer les object en fx de leur nom, qui m'aide à les selectionner car unique , avec la methode filter
// nb: utilise l'index


  // let heart = document.querySelector(".heart-container")

  // // console.log(heart)

  // heart.addEventListener('click',function (e){
  //     // récupérer la valeur du nom du parfum definie par la propriété name
  //     const name = e.target.closest(".card").querySelector(".card-name").innerText
  //     //console.log(name)
  //     // filtrer le tableau des parfums pour récupérer l'objet dont la prop name = la valeur du name
  //     // accéder à sa prop favoris et la basculer entre vrai et faux
  //    const perfumeName = perfumeList.filter(function(currentPerfume){
  //     return currentPerfume.name === name;
  //     // la il me return l'objet dont le nom de parfum est egale à name
  //    })[0] // return du premier element du tableau dans ce cas, mon objet parfum current

  //    //console.log(perfumeName[0].favoris) // la je recuper la veleur boolean de la propriété favoris
  //    //perfumeName.favoris = !perfumeName.favoris
  //   //  console.log(perfumeName.favoris)   
  //   //  console.log(perfumeName)
  // if (perfumeName) {
  //     // Récupérer la valeur booléenne de la propriété favoris et la mettre à jour
  //     perfumeName.favoris = !perfumeName.favoris;
  //     //console.log(perfumeName.favoris)

  //     // opérateur ternaire
  //     heart.innerHTML = perfumeName.favoris ? '<i class="fa-solid fa-heart"></i>' : '<i class="fa-regular fa-heart"></i>'

  //   }
  // }); 





// ca marche pour un ici je Boucle pour tout mes elements de perfumeList

// 

let heartContainers = document.querySelectorAll(".heart-container");

heartContainers.forEach(heart => {
  heart.addEventListener('click', function (e) {
    const card = e.target.closest('.card');
    const name = card.querySelector(".card-name").innerText;
    const selectedPerfume = perfumeList.find(perfume => perfume.name === name);

    if (selectedPerfume) {
      selectedPerfume.favoris = !selectedPerfume.favoris;
      const heartIcon = heart.querySelector("i");
      heartIcon.className = selectedPerfume.favoris ? "fa-solid fa-heart" : "fa-regular fa-heart";
    }
  });
});









