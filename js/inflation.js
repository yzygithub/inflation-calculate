var year;
var inflation;
function inflationCalculate() {
	var multiple=1;
	var sum=0;
	year =document.getElementById("years").value;
	inflation = document.getElementById("inflation").value;

	for (var i = 0; i < year ; i++) {
		for (var j = 0; j < i+1 ; j++) {
			multiple = 1;
			multiple = Math.pow(inflation,j);
		}
		sum+= multiple;
	}
	multiple = multiple.toFixed(2);
	sum = sum.toFixed(2);
	document.getElementById("multiple").innerHTML = "multiple:"+multiple;
	document.getElementById("sum").innerHTML = "sum:"+sum;
}

function clearOutput() {
	document.getElementById("multiple").innerHTML = "multiple:";
	document.getElementById("sum").innerHTML = "sum:";
}