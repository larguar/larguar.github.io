$(document).ready(()=> {

	let facts = {
		0: {
			fact: 'I started learning how to code in 7th grade so I could have a cooler Myspace page than all of my friends.',
			image: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXhuejY0eThtZDNwYWxvdDF1NmFlMTV1YXk1MjJtMHdxeXNtdmtnMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rOdtJJS9Xf4TYx2aT8/giphy.gif'
		},
		1: {
			fact: 'I’m a third-generation Cuban immigrant that can’t speak Spanish (I’m learning).',
			image: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3gydDN4cGdib3A4cm5idXFjdDFoZDR5cGZxdDRyajNodTUyYWRqayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rfqHxai5XJnuU/giphy.gif'
		},
		2: {
			fact: 'I bought a smart water bottle to stay hydrated and my only motivation to drink water is my 300+ day streak.',
			image: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnMwbjhyNm80c3hqdmV4b3h3dWRxc3hqNHhiNmszdTd1Mjd3ZzBiayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xULW8Nc2KygKVEcGk0/giphy.gif'
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
			image: 'https://media.giphy.com/media/AF2BK0kTirsHsbLeqQ/giphy.gif'
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
			image: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbm5oa3FzazczY3Q1a3RxbDcwdWR2aW5waHF3Y3YycWxtcXgxdmg0cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CITdQjMyUgCnvHNrJ1/giphy.gif'
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
		let p = $('<p>').addClass('comment').html('// conversation starter: ' + facts[i].fact);
		let tooltip = $('<div>').attr('id', 'tooltip');
		$('#main .col').append(p.append(tooltip));
		p.on('mouseover', () => tooltip.html('<img src="' + facts[i].image + '">'));
		p.on('mouseout', () => tooltip.html(''));
	}

});
