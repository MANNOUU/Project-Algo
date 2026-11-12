// Problème 2 (question 3) : produit scalaire avec une FONCTION

function dot_product(v1, v2, n) {
  let ps = 0;
  for (let i = 0; i < n; i++) {
    ps += v1[i] * v2[i];
  }
  return ps;
}

const couples = [
  { v1: [1, 2, 3], v2: [3, 0, -1] },
  { v1: [1, 0],    v2: [0, 5] },
  { v1: [2, 1],    v2: [1, 4] }
];
const nbCouples = couples.length;

for (let k = 0; k < nbCouples; k++) {
  const ps = dot_product(couples[k].v1, couples[k].v2, couples[k].v1.length);

  if (ps === 0) {
    console.log("Couple " + (k + 1) + " : orthogonaux");
  } else {
    console.log("Couple " + (k + 1) + " : non orthogonaux (ps = " + ps + ")");
  }
}
