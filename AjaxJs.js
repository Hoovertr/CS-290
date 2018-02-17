var apiKey = 'fa7d80c48643dfadde2cced1b1be6ca1';

document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
    document.getElementById('citySubmit').addEventListener('click', function(event){
        var req = new XMLHttpRequest();
		if(document.getElementById('city').value != ""){
			var payload = {city:null};
        	payload.city = document.getElementById('city').value;
        	req.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q='+payload.city+'&appid=' + apiKey+'&units=imperial', true);
			req.addEventListener('load',function(){
				if(req.status >= 200 && req.status < 400){
					var response = JSON.parse(req.responseText);
		    		document.getElementById('weatherCity').textContent = response.name;
            		document.getElementById('curTemp').textContent = response.main.temp;
					document.getElementById('curCond').textContent = response.weather[0].main;
            		document.getElementById('curHumid').textContent = response.main.humidity;
				} else {
					console.log("Error in network request " + req.statusText);
				}});
			req.send(null);
        	event.preventDefault();
		} else{
			var payload = {zipcode:null};
			payload.zipcode = document.getElementById('zipc').value;
			req.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q='+payload.zipcode+'&appid='+apiKey+'&units=imperial', true);
			req.addEventListener('load',function(){
				if(req.status >= 200 && req.status < 400){
					var response = JSON.parse(req.responseText);
					document.getElementById('weatherCity').textContent = response.name;
					document.getElementById('curTemp').textContent = response.main.temp;
					document.getElementById('curCond').textContent = response.weather[0].main;
					document.getElementById('curHumid').textContent = response.main.humidity;
				} else {
					console.log("Error in network request " + req.statusText);
				}});
			req.send(null);
			event.preventDefault();
		}
	});
}

