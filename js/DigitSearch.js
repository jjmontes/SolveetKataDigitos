function DigitSearch(generatorSequence) {
	this._generatorSequence = generatorSequence;
	return this;
}
DigitSearch.prototype.input = function(number) {
	if (number < 1 || number > 100000)
		return "";
	
	return this._generatorSequence.sequence(number).indexOf(number) + 1;
}