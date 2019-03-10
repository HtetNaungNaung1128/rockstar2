var PI = 3.14;

function area(r) {
	
	return PI * r * r; 	// calaulate area...
}

module.exports = {
	'PI' : PI,
	'area' : area
}


//===================== (with arrow function , delete function keywords)

/*var add = (a,b) => a+b;
var area = r => PI*r*r;

module.exports = {

	PI,
	area,

}*/