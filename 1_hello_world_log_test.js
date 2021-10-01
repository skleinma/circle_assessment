(function(){
    var sayHello = function() {
      var now = new Date();
      const ts_str = now.toUTCString();
      console.log("Hello World : " + ts_str);
      };
    window.setInterval(sayHello, 10000);
    sayHello();
  }
)
();