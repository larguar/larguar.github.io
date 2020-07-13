var asterisk = document.getElementById('asterisk');

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
	asterisk.style.transform = 'rotate(-' + window.pageYOffset + 'deg)';
});

$(document).ready(function() {
	
	var funFacts = [
		'I’m not afraid to use open source fonts.',
		'I made an Instagram page for my dog and I\'m not ashamed (shameless plug: <a href="https://www.instagram.com/rengstagram/" target="_blank">@rengstagram</a>)',
		'I enjoy building out a website more than I enjoy designing it (most of the time).',
		'My favorite color is <span style="color: #333">#333</span>.',
		'I’m a Virgo so I like it when things are perfect.',
		'I\'m a self preservation enneagram type 3',
		'I definitely prefer Sketch (sorry Adobe).',
		'Google Spreadsheets spark joy.'		
	];

	var userID = 'siminski';
	var apiKey = 'v8SNqxsyD70hgx1EXIQPjmjiQVe9K7HQ'
	var queryURL = 'https://api.behance.net/v2/users/' + userID + '/projects?api_key=' + apiKey;
	
	// We then created an AJAX call
	$.ajax({
	  url: queryURL,
	  method: "GET"
	}).then(function(response) {
		
		var projects = response.projects;
		console.log(projects);
	
		projects.forEach(function(i) {
			
			var fieldsArray = i.fields;
			var fieldsString = '';
			fieldsArray.forEach(function(i) {	
				fieldsString = fieldsString.concat(i);					
			});
			
			var r = i.colors[0].r;
			var g = i.colors[0].g;
			var b = i.colors[0].b;	
			
			if (r > 100) {r = r - 100;} else {r = 0;}
			if (g > 100) {g = g - 100;} else {g = 0;}
			if (b > 100) {b = b - 100;} else {b = 0;}	
				
			var color = 'rgb(' + r + ',' + g + ',' + b + ')';
			
			var col = $('<div>').addClass('col col-12 col-sm-6 col-lg-4');
			var a = $('<a>').attr('target', '_blank').attr('href', i.url);
			
			var card = $('<div>').addClass('project-card');
			card.attr('style', 'background-image: url("' + i.covers.original + '");');
			
			var cover = $('<div>').addClass('cover d-flex').attr('data-aos', 'fade');
			//cover.attr('style', 'background: linear-gradient(0deg, ' + color + ', transparent);');	
			var info = $('<div>').addClass('info align-self-end');
			
			var fields = $('<p>').addClass('fields').attr('data-aos', 'fade-down').attr('data-aos-duration', '300');
			var title = $('<p>').addClass('title').attr('data-aos', 'fade-down').attr('data-aos-duration', '250');		
			var button = $('<div>').addClass('btn-outline').attr('data-aos', 'fade').attr('data-aos-duration', '250');
			button.attr('style', 'padding: 10px 24px;');
			
			info.append(fields, title, button);
			cover.append(info);
			
			card.append(cover);
			
			a.append(card);
			col.append(a);
			$('section.projects .row').append(col);	
			
			card.on('mouseover', function() {
				cover.attr('style', 'background: linear-gradient(0deg, ' + color + ', transparent);').attr('data-aos', '');
				fields.text('// ' + fieldsString).attr('data-aos', '');
				title.text(i.name).attr('data-aos', '');
				button.addClass('btn-outline').html('View Project <i class="fal fa-long-arrow-right"></i>').attr('data-aos', '');
				button.attr('style', 'padding: 10px 24px;');
			});
			card.on('mouseout', function() {
				cover.attr('style', 'background: transparent;').attr('data-aos', 'fade');
				fields.text('').attr('data-aos', 'fade-down').attr('data-aos-duration', '300');
				title.text('').attr('data-aos', 'fade-down').attr('data-aos-duration', '250');
				button.removeClass('btn-outline').html('').attr('data-aos', 'fade').attr('data-aos-duration', '250');
				button.attr('style', 'padding: 10px 24px;');
			});
			
		});
	
	});
	
	$('.menu-toggle').on('click', function(event) {
		event.preventDefault();
		
		if ($(this).hasClass('closed')) {
			$(this).removeClass('closed');
			$(this).addClass('open');
			$('header').attr('style', 'background: rgba(255,255,255,0.9); z-index: 1;').attr('data-aos', '');
			$('ul.nav').attr('style', 'opacity: 1;').attr('data-aos', '').attr('data-aos-duration', '1000');
		} else {
			$(this).removeClass('open');
			$(this).addClass('closed');
			$('header').attr('style', 'background: rgba(255,255,255,0); z-index: -1;').attr('data-aos', 'fade');
			$('ul.nav').attr('style', 'opacity: 0;').attr('data-aos', 'fade').attr('data-aos-duration', '50');
		}
	});

	AOS.init();

});