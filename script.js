function addTable{
    var body = document.getElementsByTagName("body")[0];

    var newTable = document.createElement("table");
    var tableBody = document.createElement("tbody");

    for(var i = 0; i < 4; i++){
	var newRow = document.createElement("tr");
	if(i == 0){
	    for(var j = 1; j < 5; j++){
		var newHeader = document.createElement("th");
		var headText = document.createTextNode("Header " + j);
		newHeader.appendChild(headText);
		newRow.appendChild(newHeader); 
	    } 
	}
	else{
	    for(var j = 1; j < 5; j++){
		var newCell = document.createElement("td");
		var cellText = document.createTextNode(j+" , "+i);
		newCell.appendChild(cellText);
		newRow.appendChild(newCell); 
	    }
        }
	tableBody.appendChild(newRow);	
    }
    newTable.appendChild(tableBody);
    body.appendChild(newTable);	 

}

addTable();
