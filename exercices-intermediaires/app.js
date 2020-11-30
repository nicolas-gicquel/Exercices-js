//Exercice 1//

//Je créé une fonction me permettant de générer aléatoirement un chiffre compris entre 1 et 3
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//J'initialise mes trois variables//
var a = getRandomArbitrary(1, 3);
console.log(a);
var b = getRandomArbitrary(1, 3);
console.log(b);
var c = getRandomArbitrary(1, 3);
console.log(c);
console.log('toto');

//et je vérifie les conditions
if (a === b && b === c) {
    console.log("Les 3 variables sont égales.");
} else {
    if (b === c || a === c || a === b) {
        console.log("2 des variables sont égales.");
    } else {
        console.log("Les 3 variables sont différentes.");
    }
}

//Exercice 2//


var quantity = 4,
    unit = 'T',
    result;

//  Résolution avec if...else. 
if (unit === 'K') {
    result = 1000 * quantity;
} else if (unit === 'M') {
    result = 1000000 * quantity;
} else if (unit === 'B') {
    result = 1e9 * quantity;
} else if (unit === 'T') {
    result = 1e12 * quantity;
} else {
    result = false;
}

console.log(result);

// Résolution avec switch. 
switch (unit) {
    case 'K':
        result = 1e3 * quantity;
        break;
    case 'M':
        result = 1e6 * quantity;
        break;
    case 'B':
        result = 1e9 * quantity;
        break;
    case 'T':
        result = 1e12 * quantity;
        break;
    default:
        result = false;
}

console.log(result);

//Exercice 3//

var bytes = '150k';
var letter = bytes.substr(bytes.length - 1); // Retourne le dernier caractère 
var puissance = parseInt(bytes, 10); // Convertit la chaîne de caractères '150K' en le nombre 150. 

// Gère le cas où bytes n'est pas une valeur numérique convertissable. 
if (isNaN(puissance)) {
    puissance = false;
    // Gère le cas où le dernier caractère de `bytes` est une lettre. 
} else if (isNaN(letter)) {
    // Teste la valeur de la lettre mise en majuscule. 
    switch (letter.toUpperCase()) {
        case 'T':
            puissance *= 1024; // Multiplie par 1024. 
            //fall through 
        case 'G':
            puissance *= 1024; // Multiplie par 1024. 
            //fall through 
        case 'M':
            puissance *= 1024; // Multiplie par 1024. 
            //fall through 
        case 'K':
            puissance *= 1024; // Multiplie par 1024. 
            break; // Sort du switch. 
        default:
            puissance = false; // Renvoie false si la lettre est inconnue. 
    }
}

console.log(puissance);