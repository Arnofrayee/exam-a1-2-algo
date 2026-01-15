function compterMots(chaine) {
	return chaine.split(" ").length;
}

console.log(compterMots("bonjour")); // Résultat attendu: 1
console.log(compterMots("La vie est cool surtout quand on dev")); // Résultat attendu: 8
