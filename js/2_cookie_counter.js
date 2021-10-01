let cCounter = 0;
// Set a Cookie function
function setCookie(cName, cValue) {
        document.cookie = cName + "=" + cValue + "; path=/";
}
// Apply setCookie
setCookie('cCounter', cCounter);
console.log(document.cookie);