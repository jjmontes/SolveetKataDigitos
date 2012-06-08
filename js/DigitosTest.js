$(document).ready(function(){
	module("Kata Digitos: Generador de secuencia.");
	test( 'Se genera la secuencia para 5.', function() {
		var digiSec = new GeneratorSequence();
		
		equal (digiSec.sequence(5), "12345");
	} );
	test( 'Se genera la secuencia para 3.', function() {
		var digiSec = new GeneratorSequence();
		
		equal (digiSec.sequence(3), "123");
	} );
	test( 'Se genera la secuencia para 9.', function() {
		var digiSec = new GeneratorSequence();
		
		equal (digiSec.sequence(9), "123456789");
	} );
	test( 'Se genera la secuencia para 12.', function() {
		var digiSec = new GeneratorSequence();
		
		equal (digiSec.sequence(12), "123456789101112");
	} );
	
	module("Kata Digitos: Buscador de digito.");
	test( 'Para ENTRADA=15, SALIDA=20.', function() {
		var search = new DigitSearch(new GeneratorSequence());
		
		equal (search.input(15), 20);
	} );
	test( 'Para ENTRADA=34, SALIDA=3.', function() {
		var search = new DigitSearch(new GeneratorSequence());
		
		equal (search.input(34), 3);
	} );
	test( 'Para ENTRADA=142, SALIDA=73.', function() {
		var search = new DigitSearch(new GeneratorSequence());
		
		equal (search.input(142), 73);
	} );
	test( 'Para ENTRADA=1, SALIDA=1.', function() {
		var search = new DigitSearch(new GeneratorSequence());
		
		equal (search.input(1), 1);
	} );
	test( 'Para ENTRADA=0, SALIDA="".', function() {
		var search = new DigitSearch(new GeneratorSequence());
		
		equal (search.input(0), "");
	} );
	test( 'Para ENTRADA=100001, SALIDA="".', function() {
		var search = new DigitSearch(new GeneratorSequence());
		
		equal (search.input(100001), "");
	} );
});
