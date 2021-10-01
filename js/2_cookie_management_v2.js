// Cookie Managment Functions
var Cookies = {
	setCookie: function(name,value,days) {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
			document.cookie = name+"="+value+expires+"; path=/";
			this[name] = value;
			console.log(document.cookie);
			alert('Cookie created');
	},
	getCookie: function(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
			console.log(document.cookie);
		}
		return null;
	},
	deleteCookie: function(name) {
		this.setCookie(name,"",-1);
		this[name] = undefined;
		console.log("Cookie deleted.");
	},
	initOrIncrement: function(name) {
		var x = this.getCookie(name);
    	if (!x) {
			this.setCookie('cCounter',0,7);
			console.log(document.cookie);
			alert('Cookie created ' + this.getCookie(name));
		}
    	else {
			var cCounterInt = parseInt(this.getCookie(name));
			cCounterInt++;
			this.setCookie('cCounter',cCounterInt,7);
			console.log(document.cookie);
        	alert('Cookie counter incremented ' + this.getCookie(name));
		}
	}
};

// window.onload = Cookies.initOrIncrement('cCounter');

// Print cookie to console log
console.log(document.cookie);