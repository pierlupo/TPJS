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

//console.log(afficherAnnuaire());
//alert(afficherAnnuaire());
//Declarations des variableslet choix, choixMenu, affichage;

const menu = `***** Bienvenue dans l'annuaire *****
                    1) Afficher contact
                    2) Ajouter contact
                    3) Supprimer contact
                    4) Quitter
                    
                    Faites votre choix : `;

choix= prompt(menu);
let contact;
const menuAfficher = `Liste de mes contacts :`

// let afficherTab = function() {
//     //return annuaire[0].nom
//     for(let contact of annuaire) {
//        console.log(`Contact : ${contact.nom} ${contact.prenom}`);
//     }
// }

// let afficherTab = function() {
//     return annuaire.nom
// };

// let afficherTab = function() {
//     return ` ${annuaire.nom} ${annuaire.prenom} ${annuaire.age}`;
// }

//contact is undefined :
// let afficherTab = function(contact) {
//     return `${contact.nom}`
// }

// for(let contact of annuaire) {
//     console.log("###########DEBUT etudiant##########");
//    // console.log(contact.nom);
//    // console.log(contact.prenom);
//    console.log(`Contact : ${contact.nom} ${contact.prenom}`);
   //console.log(etudiant.matieres)
    // for(let key in etudiant.matieres){
    //    // console.log("###########DEBUT Matieres##########");
    //      //   console.log(key);
    //      //   console.log(etudiant.matieres[key]);
    //      console.log(` ${key} : ${etudiant.matieres[key]} /20`);
    //     // console.log(typeof etudiant.matieres[key]);
    //      somme += etudiant.matieres[key];
    //    //  console.log(somme);
    //      nbrNote++;
    //    //  console.log(nbrNote);
    //      //   console.log("###########FIN Matieres##########");
   // }

//console.log(afficherTab());
let afficherTab = function() {
    //return annuaire[0].nom
    for(let contact of annuaire) {
       console.log(`Contact : ${contact.nom} ${contact.prenom} ${contact.age}`);
       `Contact : ${contact.prenom} ${contact.nom}  ${contact.age}`
    }
}
switch(choix) {
    case "1":
        choixMenu = "Afficher contact"
        alert(afficherTab());
        break;
    case "2":
        choixMenu = "Ajouter contact"
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
    

}else {
    affichage = "choix invalide";
}

alert(affichage);
console.log(affichage);