function buildList(list) {
    var result = [];
	
    for (var i = 0; i < list.length; i++)
	{
		var getNum = function(x)
		{
			return function() {return x;};
		}(i);

        var item = 'item[' + getNum() + '] ='; 
		
        result.push( function(x)
		{
			return function(){alert(item + ' ' + list[x])}	
		}(i));
    }
	
    return result;
}
 
function testList() {
    var fnlist = buildList([1,2,3,5]);
	
    for (var j = 0; j < fnlist.length; j++) {
        fnlist[j]();
    }
}

testList();