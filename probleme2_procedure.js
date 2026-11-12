// Problème 2 (questions 1 et 2) : produit scalaire avec une PROCÉDURE
// v1, v2 : données (tableaux) ; n : donnée (par valeur) ; ps : résultat (par référence)

function dot_product(v1, v2, n, ps) {
  ps.valeur = 0;
  for (let i = 0; i < n; i++) {
    ps.valeur += v1[i] * v2[i];
  }
}

// n couples de vecteurs
const couples = [
  { v1: [1, 2, 3], v2: [3, 0, -1] },  // 3 + 0 - 3 = 0 → orthogonaux
  { v1: [1, 0],    v2: [0, 5] },      // 0 → orthogonaux
  { v1: [2, 1],    v2: [1, 4] }       // 6 → non orthogonaux
];
const nbCouples = couples.length;

for (let k = 0; k < nbCouples; k++) {
  const ps = { valeur: 0 };
  const taille = couples[k].v1.length;

  dot_product(couples[k].v1, couples[k].v2, taille, ps);

  if (ps.valeur === 0) {
    console.log("Couple " + (k + 1) + " : orthogonaux (ps = 0)");
  } else {
    console.log("Couple " + (k + 1) + " : non orthogonaux (ps = " + ps.valeur + ")");
  }
}
