document.addEventListener('DOMContentLoaded', () => {

	document.querySelector('a').onclick = function() {
		alert("hola1");
	};    


	document.querySelector('.dropdown-item').onclick = function() {
		alert("hola4");
	}; 

	document.querySelector('.item').onclick = function() {
		alert("hola4");
	}; 

	document.querySelector('.dropdown-item').onchange = function() {
		alert("hola5");
	}; 

	document.querySelector('.btn').onclick = function() {
		alert("hola6");
	}; 
	document.querySelector('#btn').onclick = function() {
		alert("hola7");
	}; 

});    