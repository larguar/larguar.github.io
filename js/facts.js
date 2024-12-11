$(document).ready(()=> {

	let facts = {
		0: {
			fact: 'I’m not afraid to use open source fonts.',
			image: 'https://media.giphy.com/media/5nrWPububC3XRg30ir/giphy.gif'
		},
		1: {
			fact: 'I made an Instagram for my dog and I’m not ashamed => <a href="https://www.instagram.com/rengstagram/" target="_blank">@rengstagram</a>.',
			image: 'https://media.giphy.com/media/ZZf4oUBf0bBvNNmaDF/giphy.gif'
		},
		2: {
			fact: 'My favorite color is #222.',
			image: 'https://media.giphy.com/media/ToMjGpvx0uOlm6H9RqU/giphy.gif'
		},
		3: {
			fact: 'I’m a Virgo so I like it when things are perfect.',
			image: 'https://media.giphy.com/media/AF2BK0kTirsHsbLeqQ/giphy.gif'
		},
		4: {
			fact: 'I’m a Self Preservation Enneagram Type 3.',
			image: 'https://media.giphy.com/media/7JTpNYu7oYGX98KJkL/giphy.gif'
		},
		5: {
			fact: 'I definitely prefer Sketch (sorry Adobe).',
			image: 'https://media.giphy.com/media/2vrGD7BtskWD8HB5BK/giphy.gif'
		},
		6: {
			fact: 'Google Spreadsheets are my real passion.',
			image: 'https://media.giphy.com/media/QnbnVPVWhzbCE/giphy.gif'
		},
		7: {
			fact: 'I drink my coffee black.',
			image: 'https://media.giphy.com/media/DQ9bqFm7hBTJS/giphy.gif'
		},
		8: {
			fact: 'I’m vegan for the animals.',
			image: 'https://media.giphy.com/media/bympeqWadSL3G/giphy.gif'
		},
		9: {
			fact: 'My favorite weather is warm thunderstorms.',
			image: 'https://media.giphy.com/media/2wX1ZDx4ddj4zupWAQ/giphy.gif'
		},
		10: {
			fact: 'If I could have any superpower, I’d slow down time like they do in <a href="https://www.imdb.com/title/tt0157472/" target="_blank">Clockstoppers</a> so I could take more naps/breaks.',
			image: 'https://media.giphy.com/media/HwmDZaI4YEeZ2/giphy.gif'
		},
		11: {
			fact: 'I started learning how to code in 7th grade so I could have a cooler Myspace page than all of my friends.',
			image: 'https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif'
		},
		12: {
			fact: 'I find it odd that some people *don’t* treat their dogs like children.',
			image: 'https://media.giphy.com/media/2Y7kJKvzLFnNFPqd5u/giphy.gif'
		},
		13: {
			fact: 'I would love to learn sign language one day.',
			image: 'https://media.giphy.com/media/xTiTnDQ4eawSG7WB6o/giphy.gif'
		},
		14: {
			fact: 'I’m currently re-watching SVU.',
			image: 'https://media.giphy.com/media/3o752fFQRQh0YW4EVi/giphy.gif'
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