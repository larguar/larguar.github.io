// get logo asterisk to spin - convert this to jquery
(function(){
	var throttle = function(type, name, obj){
	  var obj = obj || window;
	  var running = false;
	  var func = function(){
		if (running){ return; }
		running = true;
		requestAnimationFrame(function(){
		  obj.dispatchEvent(new CustomEvent(name));
		  running = false;
		});
	  };
	  obj.addEventListener(type, func);
	}; 
	throttle("scroll", "optimizedScroll");
  })();
  window.addEventListener('optimizedScroll', function(){  
	  document.getElementById('asterisk').style.transform = 'rotate(-' + window.pageYOffset + 'deg)';
  });