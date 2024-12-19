$(document).ready(()=> {

	let facts = {
		0: {
			fact: 'I started learning how to code in 7th grade so my Myspace page would be cooler than all of my friends’.',
			image: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2J6MXE5MGduOHY2MWQ1d2JxYmp0enR2c29nejIwOWt5cm12ODkwZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ekjmhJUGHJm7FC4Juo/giphy.gif'
		},
		1: {
			fact: 'I’m a third-generation Cuban immigrant that can’t speak Spanish (I’m learning).',
			image: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3gydDN4cGdib3A4cm5idXFjdDFoZDR5cGZxdDRyajNodTUyYWRqayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rfqHxai5XJnuU/giphy.gif'
		},
		2: {
			fact: 'I bought a smart water bottle to stay hydrated and my only motivation to drink water is my 300+ day streak.',
			image: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTM0OXJzcW40MW91YXpyZ2kzOGxkbXFsbHZ3ZnBrbjJ5eTR6OGF2NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1dJtV4lVcN8jxh2mxG/giphy.gif'
		},
		3: {
			fact: 'I have a 900+ day streak on Duolingo.',
			image: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnNvMDl2ZDYza2J6bWh5b2l0N2ZwNzAwMjI3eTVicWU0eWNrZGR3NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YpZ7QhrIRfKhsajAK8/giphy.gif'
		},
		4: {	
			fact: 'I’m learning sign language for no reason in particular.',
			image: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTV2NHM3dzVtc2U0NHowMmVkM3hxMWpnbXd2YXlxYjVteGdqanlvayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xYRnmpVIIadxu/giphy.gif'
		},
		5: {
			fact: 'I’m a Virgo so I like it when things are perfect.',
			image: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHhoa3E5MnQ0NXAzMG9ybnVlYTN0ZXhneWV4dm1uZ3d2bjNxZmM3YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dSdSzjYn5LpENYPc3G/giphy-downsized-large.gif'
		},
		6: {
			fact: 'My favorite color is black.',
			image: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGJmbnIwZzBhM3d0amx2bm9kNHVuOGczYmZsMXU5MmtqOHl4cWZ6ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pVuja7BJl0Eow/giphy.gif'
		},
		7: {
			fact: 'I’m vegan and I love animals.',
			image: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTk4dnMzcWd0NmczeXd5NHl2Z3J2ZGNrZWVtbDN0Mnh5cjBwMXg1YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ke28LeKwQU4rFLulNl/giphy.gif'
		},
		8: {
			fact: 'If I could have any superpower, I’d slow down time like they do in <a href="https://www.imdb.com/title/tt0157472/" target="_blank">Clockstoppers</a> so I could take more naps/breaks.',
			image: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXZuMDR1ZDVqeWViOTVibWd3ZWkwNDdldWU4Mmt0ZXk2MGZxeW9zYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26gJA86nNiY4a39Ze/giphy.gif'
		},
		9: {
			fact: 'I like my coffee like I like my clothes (black and basic).',
			image: 'https://media.giphy.com/media/DQ9bqFm7hBTJS/giphy.gif'
		},
		10: {
			fact: 'I’ve watched all 121 episodes of Lost (twice).',
			image: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmpqdjFxa2Fld2R2azVlZWQ4engwY2N5eDk0dGEwNzEycGJvNmtkMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CbNeTOSwGdpg4/giphy.gif'
		},
		11: {
			fact: 'The first concert I ever went to was Evanescence. The second was The Cheetah Girls.',
			image: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmd5bWVtNzEyenB0OGI5YzQwYWtjdXI1a2x0a2s3d3Vzc2l6Z3hkeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohs7IOGoGcZdVNIzK/giphy.gif'
		}
	};


	let i = Math.floor(Math.random() * Object.keys(facts).length);	
	if (i >= 0) {
		let num = i + 1;
		let p = $('<p>').addClass('comment').html('// icebreaker ' + num + ': ' + facts[i].fact);
		let tooltip = $('<div>').attr('id', 'tooltip');
		$('#main .col').append(p.append(tooltip));
		p.on('mouseover', () => tooltip.html('<img src="' + facts[i].image + '">'));
		p.on('mouseout', () => tooltip.html(''));
	}

});
