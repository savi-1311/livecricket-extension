window.onload = function()
{
	console.log("started");
var m1title = document.getElementById("m1title");
var m2title = document.getElementById("m2title");
var uid1;
var uid2;

fetch("https://cricapi.com/api/cricket/Wh4CFtViqVbDCgaYC61AIw45UUM2")
	.then(response => response.json())
            .then(data => {
				var m1t = data.data[0].title;
				var m2t = data.data[1].title;
				m1title.textContent = m1t;
				m2title.textContent = m2t;
				
				
			})
	  .catch(() => {
		 var error = document.getElementById("error");
		 error.textContent = "Error Ocuured!" 
	  });
}
