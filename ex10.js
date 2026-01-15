function filtrerDoublon(tab) {
	let compte = {};

	for (let i = 0; i < tab.length; i++) {
		let element = tab[i];
		if (compte[element]) {
			compte[element] += 1;
		} else {
			compte[element] = 1;
		}
	}
	return compte;
}

console.log(filtrerDoublon([1, 2, 3])); // Résultat attendu: [1]
console.log(filtrerDoublon([1, 1, 2, 2, 3])); // Résultat attendu: [1, 2]
console.log(filtrerDoublon([1, 1, 4, 3, 4, 2])); // Résultat attendu: [1, 4]
console.log(filtrerDoublon([0, 0, 16, 25, 24, 16, 24, 2, 16, 4])); // Résultat attendu: [0, 16, 24]
