window.onload = function(){
	var oDivs = document.getElementsByTagName("div");
	oDivs[0].style.width = '50px';
	oDivs[0].style.height = '50px';
	oDivs[0].style.background = 'red';
	oDivs[0].onclick = function(){
		alert('dddd');
	};
};
