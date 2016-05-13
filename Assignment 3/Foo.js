function Sum(a, b)
{
	return a + b;
}

function arrayWork(Array, Work)
{
	var sum = 0;
	
	for (var i = 0; i < Array.length; i++)
		sum = Work(Array[i], sum);
		
	return sum;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var c = arrayWork(arr, Sum);
console.log("Sum is: ");
console.log(c);