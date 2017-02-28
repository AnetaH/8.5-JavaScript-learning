var a = 3,
	b = 10;

var value = (a * a) + (2 * a * b) - (b * b);
console.log('wynik ' + value);

if (value === 0) { 
  console.log('wynik jest równy 0');
} else if (value > 0) {
  console.log('wartość dodatnia');
} else {
  console.log('wartość ujemna');
}