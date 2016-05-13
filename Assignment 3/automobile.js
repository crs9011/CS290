function Automobile( year, make, model, type, logMe ){
    this.year = year; //integer (ex. 2001, 1995)
    this.make = make; //string (ex. Honda, Ford)
    this.model = model; //string (ex. Accord, Focus)
    this.type = type; //string (ex. Pickup, SUV)
	this.logMe = logMe; //function
}

function logMe(bool)
{
	if (bool == true)
		console.log(this.year + ' ' + this.make + ' ' + this.model + ' ' + this.type);
	else
		console.log(this.year + ' ' + this.make + ' ' + this.model);
}

var automobiles = [ 
    new Automobile(1995, "Honda", "Accord", "Sedan", logMe),
    new Automobile(1990, "Ford", "F-150", "Pickup", logMe),
    new Automobile(2000, "GMC", "Tahoe", "SUV", logMe),
    new Automobile(2010, "Toyota", "Tacoma", "Pickup", logMe),
    new Automobile(2005, "Lotus", "Elise", "Roadster", logMe),
    new Automobile(2008, "Subaru", "Outback", "Wagon", logMe)
    ];
	
function deepCopy( obj1, obj2)
{
	obj1.year = obj2.year;
	obj1.make = obj2.make;
	obj1.model = obj2.model;
	obj1.type = obj2.type;
}

function quicksort( comparator, array, left, right)
{
	var i = left, j = right;
	var tmp = new Automobile(0, "", "", "");
	var pivot = new Automobile(0, "", "", "");
	deepCopy(pivot, array[right]);
	
	while (i <= j)
	{
		while (comparator(array[i], pivot))
			i++;
		
		while (comparator(pivot, array[j]))
			j--;
		
		if (i <= j) 
		{
			deepCopy(tmp, array[i]);
			deepCopy(array[i], array[j]);
			deepCopy(array[j], tmp);
			
			i++;
			j--;
		}
	}

	if (left < j)
		array = quicksort(comparator, array, left, j);
	
	if (i < right)
		array = quicksort(comparator, array, i, right);
	
	return array;
}
	
/*This function sorts arrays using an arbitrary comparator. You pass it a comparator and an array of objects appropriate for that comparator and it will return a new array which is sorted with the largest object in index 0 and the smallest in the last index*/
function sortArr( comparator, array ){
	return quicksort(comparator, array, 0, array.length - 1);
}

/*A comparator takes two arguments and uses some algorithm to compare them. If the first argument is larger or greater than the 2nd it returns true, otherwise it returns false. Here is an example that works on integers*/
function exComparator( int1, int2){
    if (int1 > int2){
        return true;
    } else {
        return false;
    }
}

/*For all comparators if cars are 'tied' according to the comparison rules then the order of those 'tied' cars is not specified and either can come first*/

/*This compares two automobiles based on their year. Newer cars are "greater" than older cars.*/
function yearComparator( auto1, auto2){
    if (auto1.year > auto2.year)
		return true;
	else
		return false;
}

/*This compares two automobiles based on their make. It should be case insensitive and makes which are alphabetically earlier in the alphabet are "greater" than ones that come later.*/
function makeComparator( auto1, auto2){
	if (auto1.make < auto2.make)
		return true;
	else if (auto1.make == auto2.make)
		return yearComparator(auto1, auto2);
	else
		return false;
}

/*This compares two automobiles based on their type. The ordering from "greatest" to "least" is as follows: roadster, pickup, suv, wagon, (types not otherwise listed). It should be case insensitive. If two cars are of equal type then the newest one by model year should be considered "greater".*/
function typeComparator( auto1, auto2){
    var temp = [0, 0];
	var type = [auto1.type, auto2.type];
	
	for (var i = 0; i < 2; i++)
	{
		if (type[i].toLowerCase() == "roadster")
			temp[i] = 1;
		else if (type[i].toLowerCase() == "pickup")
			temp[i] = 2;
		else if (type[i].toLowerCase() == "suv")
			temp[i] = 3;
		else if (type[i].toLowerCase() == "wagon")
			temp[i] = 4;
		else
			temp[i] = 5;
	}
	
	if (temp[0] < temp[1])
		return true;
	else if (temp[0] == temp[1])
		return yearComparator(auto1, auto2);
	else
		return false;
}

console.log("*****");
console.log("The cars sorted by year are:");

var newArray = sortArr( yearComparator, automobiles);

for (var i = 0; i < 6; i++)
	newArray[i].logMe(false);

console.log('\n');
console.log("The cars sorted by make are:");

newArray = sortArr( makeComparator, automobiles);

for (var i = 0; i < 6; i++)
	newArray[i].logMe(false);

console.log('\n');
console.log("The cars sorted by type are:");

newArray = sortArr( typeComparator, automobiles);

for (var i = 0; i < 6; i++)
	newArray[i].logMe(true);

console.log("*****");

/*Your program should output the following to the console.log, including the opening and closing 5 stars. All values in parenthesis should be replaced with appropriate values. Each line is a seperate call to console.log.

Each line representing a car should be produced via a logMe function. This function should be added to the Automobile class and accept a single boolean argument. If the argument is 'true' then it prints "year make model type" with the year, make, model and type being the values appropriate for the automobile. If the argument is 'false' then the type is ommited and just the "year make model" is logged.

*****
The cars sorted by year are:
(year make model of the 'greatest' car)
(...)
(year make model of the 'least' car)

The cars sorted by make are:
(year make model of the 'greatest' car)
(...)
(year make model of the 'least' car)

The cars sorted by type are:
(year make model type of the 'greatest' car)
(...)
(year make model type of the 'least' car)
*****

As an example of the content in the parenthesis:
1990 Ford F-150 */