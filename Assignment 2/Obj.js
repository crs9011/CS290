var obj = {here: {is: "an"}, object: 2}
var bool;

console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, {here: 1, object: 2}));

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));

function deepEqual(obj1, obj2)
{
	var count1 = 0, count2 = 0;
	
	if (typeof(obj1) == typeof(obj2))
	{
		if (typeof(obj1) == "object")
		{
			bool = false;
			
			for (var obj3 in obj1)
			{
				count1++;
				
				for (var obj4 in obj2)
					if (bool != true)
						bool = deepEqual(obj3, obj4);
			
				if (bool == true)
					count2++;
			}
			
			if (count1 == count2)
				return true;
			else
				return false;
		}
		
		else
		{
			if (obj1 == obj2)
				return true;
			else
				return false;
		}
	}
	
	else
		return false;
}