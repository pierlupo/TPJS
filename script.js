"use strict";

//console.log("tpVendredi13")

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

let choix,
    personne,
    choixMenu, 
    affichage = "choix invalide";

const menu =  `*** Bienvenue dans l'annuaire ***

                    1) Afficher contact
                    2) Ajouter contact
                    3) Supprimer contact
                    0) Quitter
                    
                    Faites votre choix : `;


let suppr;

// let afficherMenu = fonction () {

//                     };

//let elementsSupprimes = annuaire.splice(0, 2);
console.table(annuaire);
//
while(choixMenu != 0) {
choix = prompt(menu);
switch(choix) {
    
        case "1":
            choixMenu = "Afficher contact";
            //alert(JSON.stringify(annuaire,null,1));
            // for(let contact of annuaire) {
                
            //  console.log(`Contact : ${contact.nom} ${contact.prenom} ${contact.age}`);
            //`Contact : ${contact.nom} ${contact.prenom} ${contact.age}`;
            //  personne += ` ${contact.nom} ${contact.prenom} ${contact.age} 
            //  `;

                //alert(JSON.stringify(contact)); 
                //console.log(personne);
            // }  
            //alert(personne);
personne = ""/* `                            *** Liste de contacts ***\n
                        \n${annuaire[0].nom} ${annuaire[0].prenom} ${annuaire[0].age}
`;*/
             for(let i= 0; i < annuaire.length; i++){
                    console.log(annuaire[i]);
                    personne += `${i} ${annuaire[i].nom} ${annuaire[i].prenom} ${annuaire[i].age}
`
                 }

            alert(personne);
            
            break;
            
        case "2":
            choixMenu = "Ajouter contact"
            annuaire.push({nom:prompt("Entrez le nom"), prenom:prompt("Entrez le prénom"), age:Number(prompt("Entrez l'âge"))}); 
            console.table(annuaire);
            alert(JSON.stringify(annuaire,null,1));
            break;
    
        case "3":
            choixMenu = "Supprimer contact"
            suppr = (prompt("Veuillez entrer un numéro de contact à supprimer:")); 
            annuaire.splice(suppr, 1);
            console.table(annuaire);
            break;
    
        case "0":
            choixMenu = "Quitter"
            break;

        default :
            choixMenu ="Inconnu"
            alert(affichage);
            break;
    }



        if(choixMenu == 1){
        
        affichage = `Voici votre ${choixMenu}`;

        }else if(choixMenu == 2){

        affichage = `Voici votre ${choixMenu}`;

        }else if(choixMenu == 3){

        affichage = `Voici votre ${choixMenu}`;}

        else if(choixMenu == 0){

        affichage = `Voici votre ${choixMenu}`;
        
        }
        else{

        affichage = "choix invalide";
        
        affichage = `Voici votre ${choixMenu}`;

    }
}
// alert(affichage);
// console.log(affichage);

// function dump(obj) {
//         let out = '';
//         for (var i in obj) {
//             out += i + ": " + obj[i] + "\n";
//         }
//  }
// Affiche les donnees dans une alert
//       alert(out);

//     return annuaire[0].nom
//     for(let contact of annuaire) {
//        console.log(`Contact : ${contact.nom} ${contact.prenom}`)

// };

// personne = afficherTab;

// const afficherTab = function() {
//      console.log(`Contact : ${contact.nom} ${contact.prenom} ${contact.age}`);
//      return `Contact : Nom : ${contact.nom} Prénom : ${contact.prenom} Âge : ${contact.age}`

// }

// afficherTab();

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


