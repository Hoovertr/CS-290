(function(){
    var curRow = 1;      //to keep track of current place
    var curCol = 1;      //index is given by 4*(curRow-1)+(curCol-1) 

function addTable(){
    var newBody = document.getElementsByTagName("body")[0]; 

    var newTable = document.createElement("table");
    var tableBody = document.createElement("tbody");

    for(var i = 0; i < 4; i++){
	var newRow = document.createElement("tr");
	for(var j = 1; j < 5; j++){
	    if(i == 0){
		var newHeader = document.createElement("th");
		var headText = document.createTextNode("Header "+(j));
		newHeader.appendChild(headText);
		newRow.appendChild(newHeader); 
	    } 
	    else{
	    	var newCell = document.createElement("td");
		var cellText = document.createTextNode((j)+" , "+(i));
		newCell.appendChild(cellText);
		newRow.appendChild(newCell); 
	    }
        } 
    
	tableBody.appendChild(newRow);	
    }
    newTable.appendChild(tableBody);
    newTable.setAttribute("border", "1px");
    newBody.appendChild(newTable);
   	 
    var firstC = document.getElementsByTagName("td")[0];
    firstC.style.border = "solid";

}

function addButtons(){
    var btUp = document.createElement("button");
    var upText = document.createTextNode("Up");
    btUp.appendChild(upText);
    btUp.id = "UP";
    document.body.appendChild(btUp);

    var btDown = document.createElement("button");
    var downText = document.createTextNode("Down");
    btDown.appendChild(downText);
    btDown.id = "DOWN";
    document.body.appendChild(btDown);
   
    var btLeft = document.createElement("button");
    var leftText = document.createTextNode("Left");
    btLeft.appendChild(leftText);
    btLeft.id = "LEFT";
    document.body.appendChild(btLeft);

    var btRight = document.createElement("button");
    var rightText = document.createTextNode("Right");
    btRight.appendChild(rightText);
    btRight.id = "RIGHT";
    document.body.appendChild(btRight);

    var btMark = document.createElement("button");
    var markText = document.createTextNode("Mark Cell");
    btMark.appendChild(markText);
    btMark.id = "MARK";
    document.body.appendChild(btMark);
}

function moveUp(event){
    if(curRow == 1){
	return;
    }
    else{
        var index = 4*(curRow-1)+curCol - 1;
        var oldCell = document.getElementsByTagName("td")[index];
        oldCell.style.borderWidth = "1px";
        curRow = curRow - 1;
	var newIndex = 4*(curRow-1)+curCol - 1;
	var newCell = document.getElementsByTagName("td")[newIndex];
	newCell.style.border = "solid";	
    }
}

function moveDown(event){
    if(curRow == 3){
	return;
    }
    else{
	var index = 4*(curRow-1)+curCol - 1;
	var oldCell = document.getElementsByTagName("td")[index];
	oldCell.style.borderWidth = "1px";
	curRow = curRow + 1;
	var newIndex = 4*(curRow-1)+curCol - 1;
	var newCell = document.getElementsByTagName("td")[newIndex];
	newCell.style.border = "solid";
    }
}

function moveLeft(event){
    if(curCol == 1){
	return;
    }
    else{
	var index = 4*(curRow-1)+curCol - 1;
	var oldCell = document.getElementsByTagName("td")[index];
	oldCell.style.borderWidth = "1px";
	curCol = curCol - 1;
	var newIndex = 4*(curRow-1)+curCol - 1;
	var newCell = document.getElementsByTagName("td")[newIndex];
	newCell.style.border = "solid";
    }
}

function moveRight(event){
    if(curCol == 4){
	return;
    }
    else{
	var index = 4*(curRow-1)+curCol - 1;
	var oldCell = document.getElementsByTagName("td")[index];
	oldCell.style.borderWidth = "1px";
	curCol = curCol + 1;
	var newIndex = 4*(curRow-1)+curCol - 1;
	var newCell = document.getElementsByTagName("td")[newIndex];
	newCell.style.border = "solid";
    }
}

function markCell(event){
    var index = 4*(curRow-1)+curCol-1;
    var newCell = document.getElementsByTagName("td")[index];
    newCell.style.backgroundColor = "yellow";
}
addTable();
addButtons();

document.getElementById("UP").addEventListener("click", moveUp);
document.getElementById("DOWN").addEventListener("click", moveDown);
document.getElementById("LEFT").addEventListener("click", moveLeft);
document.getElementById("RIGHT").addEventListener("click", moveRight);
document.getElementById("MARK").addEventListener("click", markCell);

})();
