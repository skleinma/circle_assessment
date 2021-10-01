// Cookie Managment Functions
function setCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
	alert('Cookie created');
}

function getCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function deleteCookie(name) {
	setCookie(name,"",-1);
}

function initOrIncrement(name) {
	var x = getCookie(name);
    if (!x) {
		setCookie('cCounter',0,7);
		alert('Cookie created ' + getCookie(name));
	}
    else {
		var cCounterInt = parseInt(getCookie(name));
		cCounterInt++;
		setCookie('cCounter',cCounterInt,7);
        alert('Cookie counter incremented ' + getCookie(name));
	}
}

window.onload = initOrIncrement('cCounter');

// Print cookie to console log
console.log(document.cookie);