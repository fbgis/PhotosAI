document.addEventListener('DOMContentLoaded', () => {

	document.querySelector('a').onclick = function() {
		alert("hola1");
	};    


	document.querySelector('.dropdown-item').onclick = function() {
		alert("hola2");
	}; 

	document.querySelectorAll('.opcio').forEach(function(button) {
		button.onclick = function() {
			alert("hola3");
			alert(button.id);
		};	
	}); 

	document.querySelector('.dropdown-item').onchange = function() {
		alert("hola5");
	}; 

	document.querySelector('.btn').onclick = function() {
		alert("hola6");
	}; 


});    