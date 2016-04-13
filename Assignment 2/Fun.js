var x = poly(4); //Will work, because of hoisting

function poly(x)
{
	return (0.5 * (x ^ 2) + x + 1);
}

var y = poly2(4); //Will not work, because the variable 'poly2' has yet to be declared

var poly2 = function(x)
{
	return (0.5 * (x ^ 2) + x + 1);
};