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
//========================à faire ==>animation pour faire descendre lors de l'apparition de la section
  
// display toggle avec la meme logique pour le menu burger en version mobile
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


