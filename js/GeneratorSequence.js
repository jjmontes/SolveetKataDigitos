function GeneratorSequence() {
	return this;
}
GeneratorSequence.prototype.sequence = function (number) {
	var sequence = "";

	for (var index=1; index <= number; index++) {
		sequence += index.toString();
	}	

	return sequence;
}