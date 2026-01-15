function doublerSi(nombre, estDouble) {
	if (estDouble === true) {
		return nombre * 2;
	} else {
		return nombre * 1;
	}
}

console.log(doublerSi(1, true)); // Résultat attendu: 2
console.log(doublerSi(2, false)); // Résultat attendu: 2
