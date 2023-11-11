/*
TABLEAUX - PRÉPA 4 : Date valide - version 3
- Déclarez deux fonctions :
    - La première fonction 'isBissextile' retourne true ou false selon que l'année est bissextile ou pas.
    - La deuxième fonction 'isValid' retourne true ou false selon que la date est valide ou pas.
    Stockez cette fois le nombre maximum de jours autorisé par mois dans un tableau (utilisez 'isBissextile' pour gérer le cas du mois de février).
- Utilisez 'isValid' pour décider si votre date est valide avant d'afficher votre message dans la console.
*/

// Fonction pour vérifier si une année est bissextile
function isBissextile(annee) {
    // Code pour déterminer si 'annee' est bissextile
    console.log(`${annee} est bissextile`);
    return (annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0);
}

// Fonction pour vérifier si une date est valide
function isValid(jour, mois, annee){
    console.log(`${jour} ${mois} ${annee} est une date valide`);
    return (jour >= 1 && jour <= 31) && (mois >= 1 && mois <= 12) && (annee >= 0);
}
    // Code pour vérifier si la date (jour, mois, annee) est valide

// Utilisez 'isValid' pour vérifier si une date est valide avant d'afficher un message dans la console

console.log(isBissextile(2023));
console.log(isValid(11, 11, 2023));

const maxJours = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];