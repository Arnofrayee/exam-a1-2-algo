function compterChaine(tab) {
	return tab.find(" ").length;
}

console.log(compterChaine([4, 6, 8])); // Résultat attendu: 0
console.log(compterChaine(["toto", 6, "tutu"])); // Résultat attendu: 2
console.log(compterChaine([4, false, "nunu"])); // Résultat attendu: 1
