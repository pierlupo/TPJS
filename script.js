//console.log("tpVendredi13")
"use strict";
let annuaire = [
    {
        nom: "Dupont",
        prenom: "Jean",
        age: 15
    },
    {
        nom: "Durant",
        prenom: "Pierre",
        age: 16
    },
    {
        nom: "Martin",
        prenom: "Jean",
        age: 17
    }
];
console.table(annuaire);



let choix, contact, personne, choixMenu, affichage, newName;

const menu = `*** Bienvenue dans l'annuaire ***

                    1) Afficher contact
                    2) Ajouter contact
                    3) Supprimer contact
                    4) Quitter
                    
                    Faites votre choix : `;

choix = prompt(menu);

// function dump(obj) {
//         let out = '';
//         for (var i in obj) {
//             out += i + ": " + obj[i] + "\n";
//         }
//  }
// Affiche les donnees dans une alert
//       alert(out);
// let afficherTab = function() {
//     //return annuaire[0].nom
//     for(let contact of annuaire) {
//        console.log(`Contact : ${contact.nom} ${contact.prenom}`)
//     }
// };


// const afficherTab = function() {
//      console.log(`Contact : ${contact.nom} ${contact.prenom} ${contact.age}`);
//      return `Contact : Nom : ${contact.nom} Prénom : ${contact.prenom} Âge : ${contact.age}`

// }

// afficherTab();
// const menuAfficher = `Liste de mes contacts :`;
// let afficherTab = function(personne){
//         return `Contact : ${personne.nom} ${personne.prenom} ${personne.age}`

// }
//personne = annuaire[0].nom, annuaire[1].nom, annuaire[2].nom;



// const newPrenom = function() {annuaire.push()};
// const newAge = function() {annuaire.push()};


// function insertNom() {
// let array = annuaire;    
// let index ;
//     // element that you want to add
//     let element = newName;
  
//     for (let i = array.length; i > index; i--) {

//         //shift the elements that are greater than index
//         array[i] = array[i-1];
//     }

//     // insert element at given index
//     array[index] = element;

//     console.log(array);
// }

// insertNom();
for(let contact of annuaire) {
    console.log(`Contact : ${contact.nom} ${contact.prenom} ${contact.age}`);
    `Contact : ${contact.nom} ${contact.prenom} ${contact.age}`;
}  


switch(choix) {
    case "1":
        choixMenu = "Afficher contact"
        //console.log(personne);
        alert(JSON.stringify(annuaire,null,1));
        break;

        case "2":
            choixMenu = "Ajouter contact"
            annuaire.push({nom:prompt("Entrez le nom"), prenom:prompt("Entrez le prénom"), age:Number(prompt("Entrez l'âge")) });
            //annuaire.push({prenom:prompt("Entrez le prénom")});
            //annuaire.push({age:Number(prompt("Entrez l'âge"))}); 
            console.table(annuaire);
            break;
    
        case "3":
            choixMenu = "Supprimer contact"
            break;
    
        case "4":
    
            choixMenu = "Quitter"
            break;

        default :
            choixMenu ="Inconnu"
            break;
    }
        

       


        

if (choixMenu != "Inconnu" && choixMenu == 1){
    affichage = `Voici votre ${choixMenu}`;
    

}else if(choixMenu != "Inconnu" && choixMenu == 2){

}else(){
    affichage = "choix invalide";
}

alert(affichage);
console.log(affichage);