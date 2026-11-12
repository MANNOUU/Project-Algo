// Problème 1 : somme des éléments distincts de deux ensembles (avec tableaux)

function sommeDistincts(ens1, ens2) {
  let somme = 0;

  // Éléments de ens1 absents de ens2
  for (let i = 0; i < ens1.length; i++) {
    let present = false;
    for (let j = 0; j < ens2.length; j++) {
      if (ens1[i] === ens2[j]) {
        present = true;
        break;
      }
    }
    if (!present) somme += ens1[i];
  }

  // Éléments de ens2 absents de ens1
  for (let j = 0; j < ens2.length; j++) {
    let present = false;
    for (let i = 0; i < ens1.length; i++) {
      if (ens2[j] === ens1[i]) {
        present = true;
        break;
      }
    }
    if (!present) somme += ens2[j];
  }

  return somme;
}

console.log(sommeDistincts([3, 1, 7, 9], [2, 4, 1, 9, 3])); // 13 (7 + 4 + 2)
