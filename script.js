function addTable{
    var newBody = document.getElementsByTagName("body")[0];

    var newTable = document.createElement("table");
    var tableBody = document.createElement("tbody");

    for(var i = 0; i < 4; i++){
	var newRow = document.createElement("tr");
	for(var j = 0; j < 4; j++){
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
    newBody.appendChild(newTable);	 

}

addTable();
