// Exercice 2 : Les fonctions

// 2- Créez une fonction appelée "addition" qui prend deux paramètres (a et b) et retourne leur somme. Testez cette fonction en lui passant deux nombres et affichez le résultat dans la console.

function addition(a, b) {
  return a + b;
}
// Testons la fonction avec deux nombres.
console.log(addition(5, 7)); // Affiche 12 dans la console.

// 3- Créez une fonction appelée "estPair" qui prend un nombre en paramètre et retourne true s'il est pair, sinon false. Testez cette fonction avec différents nombres et affichez le résultat dans la console.

function estPair(nombre) {
  return nombre % 2 == 0;
}
// 4- Créez une fonction appelée "calculerMoyenne" qui prend un tableau de nombres en paramètre et retourne leur moyenne. Testez cette fonction avec un tableau de nombres et affichez le résultat dans la console.
function calculMoyenne(numArray) {
  // 1. Vérifier si l'argument est un tableau
  if (!Array.isArray(numArray)) {
    console.error("L'argument fourni n'est pas un tableau.");
    return; // Sort de la fonction si ce n'est pas un tableau
  }
  // 2. Vérifions que le tableau n'est pas vide
  if (numArray.length === 0) {
    console.error("Le tableau est vide.");
    return; // Sort de la fonction si le tableau est vide
  }
  // 3. Vérifier que tous les éléments sont des nombres
  for (let i = 0; i < numArray.length; i++) {
    if (typeof numArray[i] !== "number") {
      console.error("le tableau ne doit contenir que des nombres!!");
      return; // Sort de la fonction si un element n'est pas un nombre
    }
  }
  // 4. Calculer la somme et la moyenne
  let somme = 0;
  for (let i = 0; i < numArray.length; i++) {
    somme += numArray[i];
  }
  let moyenne = somme / numArray.length;
  // 5. Afficher la moyenne dans la console
  console.log("La moyenne est : " + moyenne);
  // retourner la moyenne
  return moyenne;
}
