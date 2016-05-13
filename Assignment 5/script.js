document.addEventListener('DOMContentLoaded', bindButtons);

var urlAppID = "&appid=fa7d80c48643dfadde2cced1b1be6ca1";

function bindButtons()
{
	document.getElementById('nameSubmit').addEventListener('click', function(event)
	{
		var req = new XMLHttpRequest();
		var payload = {url:null};
		payload.url = "http://api.openweathermap.org/data/2.5/weather?q=" + document.getElementById('cityName').value + ",us" + urlAppID;
		
		req.open("GET", payload.url, false);
		req.addEventListener('load',function()
		{
			if(req.status >= 200 && req.status < 400)
			{
				var response = JSON.parse(req.responseText);
				console.log(response);
				
				document.getElementById('url').textContent = payload.url;
				document.getElementById('location').textContent = response.name + ", " + response.sys.country;
				document.getElementById('description').textContent = response.weather[0].description;
				document.getElementById('temperature').textContent = parseFloat(response.main.temp - 273).toFixed(2) + " C, " + parseFloat((response.main.temp - 273)*1.8 + 32).toFixed(2) + " F";
				document.getElementById('humidity').textContent = response.main.humidity + "%";
			} 
			
			else 
			{
				console.log("Error in network request: " + request.statusText);
			}
		});
		
		req.send(null);
		event.preventDefault();
	});
	
	document.getElementById('zipSubmit').addEventListener('click', function(event)
	{
		var req = new XMLHttpRequest();
		var payload = {url:null};
		payload.url = "http://api.openweathermap.org/data/2.5/weather?zip=" + document.getElementById('zipCode').value + payload.url + ",us" + urlAppID;
		
		req.open("GET", payload.url, false);
		req.addEventListener('load',function()
		{
			if(req.status >= 200 && req.status < 400)
			{
				var response = JSON.parse(req.responseText);
				console.log(response);
				
				document.getElementById('url').textContent = payload.url;
				document.getElementById('location').textContent = response.name + ", " + response.sys.country;
				document.getElementById('description').textContent = response.weather[0].description;
				document.getElementById('temperature').textContent = parseFloat(response.main.temp - 273).toFixed(2) + " C, " + parseFloat((response.main.temp - 273)*1.8 + 32).toFixed(2) + " F";
				document.getElementById('humidity').textContent = response.main.humidity + "%";
			} 
			
			else 
			{
				console.log("Error in network request: " + request.statusText);
			}
		});
		
		req.send(null);		
		event.preventDefault();
	});
	
	document.getElementById('nameSubmit2').addEventListener('click', function(event)
	{
		var req = new XMLHttpRequest();
		var payload = {url:null};
		payload.url = "http://api.openweathermap.org/data/2.5/weather?q=" + document.getElementById('cityName2').value + ",us" + urlAppID;
		
		req.open("GET", payload.url, false);
		req.addEventListener('load',function()
		{
			if(req.status >= 200 && req.status < 400)
			{
				var response = JSON.parse(req.responseText);
			} 
			
			else 
			{
				console.log("Error in network request: " + request.statusText);
			}
		});
		
		req.send(null);		
		
		var req2 = new XMLHttpRequest();
		
		req2.open("POST", "http://httpbin.org/post", false);
		req2.setRequestHeader('Content-Type', 'application/JSON');
		req2.addEventListener('load',function()
		{
			if(req2.status >= 200 && req2.status < 400)
			{
				var response = JSON.parse(req.responseText);
				console.log(response);
				
				document.getElementById('location2').textContent = response.name + ", " + response.sys.country;
				document.getElementById('description2').textContent = response.weather[0].description;
				document.getElementById('temperature2').textContent = parseFloat(response.main.temp - 273).toFixed(2) + " C, " + parseFloat((response.main.temp - 273)*1.8 + 32).toFixed(2) + " F";
				document.getElementById('humidity2').textContent = response.main.humidity + "%";
			} 
			
			else 
			{
				console.log("Error in network request: " + request.statusText);
			}
		});
		
		req2.send(req.responseText);
		
		event.preventDefault();
	});
	
	document.getElementById('zipSubmit2').addEventListener('click', function(event)
	{
		var req = new XMLHttpRequest();
		var payload = {url:null};
		payload.url = "http://api.openweathermap.org/data/2.5/weather?zip=" + document.getElementById('zipCode2').value + payload.url + ",us" + urlAppID;
		
		req.open("GET", payload.url, false);
		req.addEventListener('load',function()
		{
			if(req.status >= 200 && req.status < 400)
			{
				var response = JSON.parse(req.responseText);
			} 
			
			else 
			{
				console.log("Error in network request: " + request.statusText);
			}
		});
		
		req.send(null);		
		
		var req2 = new XMLHttpRequest();
		
		req2.open("POST", "http://httpbin.org/post", false);
		req2.setRequestHeader('Content-Type', 'application/JSON');
		req2.addEventListener('load',function()
		{
			if(req2.status >= 200 && req2.status < 400)
			{
				var response = JSON.parse(req.responseText);
				console.log(response);
				
				document.getElementById('location2').textContent = response.name + ", " + response.sys.country;
				document.getElementById('description2').textContent = response.weather[0].description;
				document.getElementById('temperature2').textContent = parseFloat(response.main.temp - 273).toFixed(2) + " C, " + parseFloat((response.main.temp - 273)*1.8 + 32).toFixed(2) + " F";
				document.getElementById('humidity2').textContent = response.main.humidity + "%";
			} 
			
			else 
			{
				console.log("Error in network request: " + request.statusText);
			}
		});
		
		req2.send(req.responseText);
		
		event.preventDefault();
	});
}