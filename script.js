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



 let choix, personne, choixMenu, affichage;

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
//        console.log(`Contact : ${contact.nom} ${contact.prenom}`)
//     }
// };


let afficherTab = function() {
    //return annuaire[0].nom
    for(let contact of annuaire) {
       console.log(`Contact : ${contact.nom} ${contact.prenom} ${contact.age}`);
       return `Contact : Nom : ${contact.nom} Prénom : ${contact.prenom} Âge : ${contact.age}`
       
    }
}

personne = `Contact : Nom : ${contact.nom} Prénom : ${contact.prenom} Âge : ${contact.age}`;

switch(choix) {
    case "1":
        choixMenu = "Afficher contact"
        alert(personne);
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