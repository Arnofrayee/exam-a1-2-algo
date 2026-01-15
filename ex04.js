function premierElement(tab) {
	if (tab.length == 0) {
		return null;
	} else {
		return tab[0];
	}
}

console.log(premierElement([1, 2, 3])); // Résultat attendu: 1
console.log(premierElement(["a", "b", "c"])); // Résultat attendu: "a"
console.log(premierElement([])); // Résultat attendu: null
