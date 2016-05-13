function upHighlight()
{
	for (var i = 1; i < 3; i++)
	{
		for (var j = 0; j < 4; j++)
		{
			if (document.getElementById((j + 1) + ", " + (i + 1)).style.border == "3px solid black")
			{
				document.getElementById((j + 1) + ", " + (i + 1)).style.border = "1px solid black";
				document.getElementById((j + 1) + ", " + i).style.border = "3px solid black";
				return;
			}
		}
	}
}

function downHighlight()
{
	for (var i = 0; i < 2; i++)
	{
		for (var j = 0; j < 4; j++)
		{
			if (document.getElementById((j + 1) + ", " + (i + 1)).style.border == "3px solid black")
			{
				document.getElementById((j + 1) + ", " + (i + 1)).style.border = "1px solid black";
				document.getElementById((j + 1) + ", " + (i + 2)).style.border = "3px solid black";
				return;
			}
		}
	}
}

function leftHighlight()
{
	for (var i = 0; i < 3; i++)
	{
		for (var j = 1; j < 4; j++)
		{
			if (document.getElementById((j + 1) + ", " + (i + 1)).style.border == "3px solid black")
			{
				document.getElementById((j + 1) + ", " + (i + 1)).style.border = "1px solid black";
				document.getElementById(j + ", " + (i + 1)).style.border = "3px solid black";
				return;
			}
		}
	}
}

function rightHighlight()
{
	for (var i = 0; i < 3; i++)
	{
		for (var j = 0; j < 3; j++)
		{
			if (document.getElementById((j + 1) + ", " + (i + 1)).style.border == "3px solid black")
			{
				document.getElementById((j + 1) + ", " + (i + 1)).style.border = "1px solid black";
				document.getElementById((j + 2) + ", " + (i + 1)).style.border = "3px solid black";
				return;
			}
		}
	}
}

function Mark()
{
	for (var i = 0; i < 3; i++)
	{
		for (var j = 0; j < 4; j++)
		{
			if (document.getElementById((j + 1) + ", " + (i + 1)).style.border == "3px solid black")
			{
				document.getElementById((j + 1) + ", " + (i + 1)).style.backgroundColor = 'yellow';
			}
		}
	}
}

var newTable = document.createElement("table");
newTable.style.border = "1px solid black";
document.body.appendChild(newTable);

var newHeader = document.createElement("tr");
newTable.appendChild(newHeader);

for (var i = 0; i < 4; i++)
{
	var newCell = document.createElement("th");
	newCell.textContent = "Header " + (i + 1);
	newCell.style.border = "1px solid black";
	newHeader.appendChild(newCell);
}

for (var i = 0; i < 3; i++)
{
	var newRow = document.createElement("tr");
	newTable.appendChild(newRow);
	
	for (var j = 0; j < 4; j++)
	{
		var newCell = document.createElement("td");
		newCell.textContent = (j + 1) + ", " + (i + 1);
		newCell.id = (j + 1) + ", " + (i + 1);
		newCell.style.border = "1px solid black";
		newRow.appendChild(newCell);
	}
}

var firstBorder = document.getElementById("1, 1");
firstBorder.style.border = "3px solid black";
document.cookie = "1, 1";

var newDiv = document.createElement("div");
newDiv.padding = "5px";
newDiv.margins = "5px";
newDiv.backgroundColor = "#87CEFA";
document.body.appendChild(newDiv);

var newButton = document.createElement("button");
newButton.textContent = "Up";
newButton.addEventListener("click", upHighlight);
newDiv.appendChild(newButton);

var newButton = document.createElement("button");
newButton.textContent = "Down";
newButton.addEventListener("click", downHighlight);
newDiv.appendChild(newButton);

var newButton = document.createElement("button");
newButton.textContent = "Left";
newButton.addEventListener("click", leftHighlight);
newDiv.appendChild(newButton);

var newButton = document.createElement("button");
newButton.textContent = "Right";
newButton.addEventListener("click", rightHighlight);
newDiv.appendChild(newButton);

var newButton = document.createElement("button");
newButton.textContent = "Mark";
newButton.addEventListener("click", Mark);
newDiv.appendChild(newButton);