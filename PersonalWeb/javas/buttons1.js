document.getElementById("home").addEventListener('click', function(event){
	window.location.href = '/';
	event.preventDefault();
});


document.getElementById("page2").addEventListener('click', function(event){
	window.location.href = '/page2';
	event.preventDefault();
});


document.getElementById("page3").addEventListener('click', function(event){
	window.location.href = '/page3';
	event.preventDefault();
});

document.getElementById("downloadButton").addEventListener('click', function(event){
	window.location.href = '/Resume.pdf';
	event.preventDefault();
});
