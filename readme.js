const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

// wfa = short for write file async
const wfa = util.promisify(fs.writeFile);

// creating our user generated prompts
function prompts() {
	return inquirer.prompt([
		{
			type: 'input',
			name: 'title',
			message: 'Project Title:',
			default: '{Add Project Title}'
		},
		{
			type: 'input',
			name: 'description',
			message: 'Project Description:',
			default: '{Add Project Description}'
		},
		{
			type: 'checkbox',
			name: 'languages',
			message: 'Languages Used:',
			choices: [
				'HTML', 
				'CSS', 
				'JavaScript', 
				'API',
				'Node.JS',
				'Express.JS',
				'MySQL'
			],
		},
		{
			type: 'input',
			name: 'projectimage',
			message: 'Project Image URL:'
		},
		{
			type: 'input',
			name: 'asa',
			prefix: 'User Story',
			message: 'AS A:',
			default: '{Add User Story}'
		},	
		{
			type: 'input',
			name: 'iwant',
			prefix: 'User Story',
			message: 'I WANT:',
			default: '{Add User Story}'
		},
		{
			type: 'input',
			name: 'sothat',
			prefix: 'User Story',
			message: 'SO THAT:',
			default: '{Add User Story}'
		},
		{
			type: 'input',
			name: 'functionality',
			prefix: 'Functionality',
			message: 'WHEN/THEN:',
			default: '{Add Functionality Highlights}'
		},
		{
			type: 'input',
			name: 'installation',
			message: 'Installation Instructions:'
		},
		{
			type: 'confirm',
			name: 'gitignore',
			message: '.gitignore File Needed?',
			default: false
		},
		{
			type: 'input',
			name: 'packages',
			message: 'NPM Package to Install:'
		},
		{
			type: 'input',
			name: 'usagepic',
			prefix: 'Usage',
			message: 'Image URL:',
			default: 'http://placehold.it/952x600'
		},
		{
			type: 'input',
			name: 'usagedesc',
			prefix: 'Usage',
			message: 'Image Description:'
		},
		{
			type: 'input',
			name: 'video',
			prefix: 'Walkthrough',
			message: 'Video Image URL:'
		},
		{
			type: 'input',
			name: 'videolink',
			prefix: 'Walkthrough',
			message: 'Video Link:'
		},
		{
			type: 'input',
			name: 'contributing',
			message: 'Contributing Instructions:'
		},
		{
			type: 'input',
			name: 'tests',
			message: 'Testing Instructions:'
		},
		{
			type: 'input',
			name: 'credits',
			message: 'Project Credits:'
		},
		{
			type: 'input',
			name: 'email',
			message: 'Email:'
		},
		{
			type: 'input',
			name: 'website',
			message: 'Portfolio Website:'
		},
		{
			type: 'input',
			name: 'github',
			message: 'Github Username:'
		},
		{
			type: 'number',
			name: 'year',
			prefix: 'License',
			message: 'Year:',
			default: '{Year}'
		},
		{
			type: 'input',
			name: 'name',
			prefix: 'License',
			message: 'Your Name:',
			default: '{Your Name}'
		},
		{
			type: 'list',
			name: 'license',
			prefix: 'License',
			message: 'License Type:',
			choices: [
				'None',
				'Apache License 2.0', 
				'GNU General Public License v3.0', 
				'MIT License', 
				'BSD 2-Clause "Simplified" License',
				'BSD 3-Clause "New" or "Revised" License',
				'Boost Software License 1.0',
				'Creative Commons Zero v1.0 Universal',
				'Eclipse Public License 1.0',
				'GNU Affero General Public License v3.0',
				'GNU General Public License v2.0',
				'GNU Lesser General Public License v2.1',
				'Mozilla Public License 2.0',
				'The Unlicense'
			]
		}
	]);
}

// adding the file formatting
function generateFile({ title, description, languages, projectimage, asa, iwant, sothat, functionality, installation, gitignore, packages, usagepic, usagedesc, video, videolink, contributing, tests, credits, email, website, github, year, name, license }) {	
	
	// split languages results into array
	const langArray = [];
	languages = `${languages}`.split(',');
	langArray.push(languages);
	
	// return badge if language is selected
	const html = (langArray[0].includes('HTML')) ? '![HTML Badge](https://img.shields.io/badge/-HTML-323795) ':'';
	const css = (langArray[0].includes('CSS')) ? '![CSS Badge](https://img.shields.io/badge/-CSS-01A990) ':'';
	const js = (langArray[0].includes('JavaScript')) ? '![JavaScript Badge](https://img.shields.io/badge/-JavaScript-539436) ':'';
	const api = (langArray[0].includes('API')) ? '![API Badge](https://img.shields.io/badge/-API-F58021) ':'';
	const nodejs = (langArray[0].includes('Node.JS')) ? '![Node.JS Badge](https://img.shields.io/badge/-Node.JS-CF1848) ':'';
	const express = (langArray[0].includes('Express.JS')) ? '![Express.JS Badge](https://img.shields.io/badge/-Express.JS-750460) ':'';
	const sql = (langArray[0].includes('MySQL')) ? '![MySQL Badge](https://img.shields.io/badge/-MySQL-61489C) ':'';
	
	// if we don't have a project image/screenshot, don't display the section
	const hasProjectImage = (projectimage) ? '\n\n![Application Screenshot](' + projectimage + ')':'';

	// if gitignore is true/Y, display gitignore instructions
	const needsGitIgnore = (gitignore) ? '\n* Create (or update) a \`.gitignore\` file and add \`node_modules/\` and \`.DS_Store/\` to it:\n```\nnode_modules/\n.DS_Store/\n```':'';
	
	// if a package name is entered, display this list item
	const hasPackage = (packages) ? '\n* Install the ' + packages + ' package through a command line npm install:\n```\nnpm install ' + packages.toLowerCase() + '\n```':'';
	
	// if we don't type anything for these sections, don't display them
	const hasInstallation = (installation) ? '\n\n\n## Installation\n* ' + installation + needsGitIgnore + hasPackage:'';
	const hasUsageDesc = (usagedesc) ? '\n' + usagedesc + '\n\n':'';
	const hasVideo = (video) ? '\n\n\n## Walkthrough\n[![Walkthrough Video Screenshot](' + video + ')](' + videolink + ')':'';
	const hasContributing = (contributing) ? '\n\n\n## Contributing\n' + contributing:'';
	const hasTests = (tests) ? '\n\n\n## Tests\n' + tests:'';
	const hasCredits = (credits) ? '\n\n\n## Credits\n' + credits:'';
	const hasWebsite = (website) ? '\n* Website: ' + website:'';
	const hasGithub = (github) ? '\n* Github: [@' + github + '](https://github.com/' + github + ')':'';
	const hasQuestions = (email) ? '\n\n\n## Questions\nIf you have any questions, feel free to find me at:\n* Email: ' + email + hasWebsite + hasGithub:'';
	
	// if any of the above section are hidden, also hide their links in the table of contents
	const installAnchor = (installation) ? '\n* [Install](#installation)':'';
	const videoAnchor = (video) ? '\n* [Walkthrough](#walkthrough)':'';
	const contributingAnchor = (contributing) ? '\n* [Contributing](#contributing)':'';
	const testsAnchor = (tests) ? '\n* [Tests](#tests)':'';
	const creditsAnchor = (credits) ? '\n* [Credits](#credits)':'';
	const questionsAnchor = (email) ? '\n* [Questions](#questions)':'';
	
	// license text to diplay if anything other than 'None' is selected
	const licenseText = (license === 'None') ? '\n\n## License\nCopyright (c) ' + year + ' ' + name +'.':'\n\n## License\nCopyright (c) ' + year + ' ' + name +'. Licensed under the ' + license + '.';
	
	return `# ${title}
${description}

${html}${css}${js}${api}${nodejs}${express}${sql} ${hasProjectImage}


## User Story` +
'\n```\n' +
`As a ${asa}
I want ${iwant}
So that ${sothat}` +
'\n```' +
`


## Functionality` +
'\n```\n' +
`${functionality}` +
'\n```' +
`


## Table of Contents ${installAnchor}
* [Usage](#usage) ${videoAnchor} ${contributingAnchor} ${testsAnchor} ${questionsAnchor} ${creditsAnchor}
* [Donate](#donate)
* [License](#license) ${hasInstallation}


## Usage ${usagedesc}
![Application Screenshot](${usagepic}) ${hasVideo} ${hasContributing} ${hasTests} ${hasCredits} ${hasQuestions}


## Donate
Appreciate this code? Say thanks with a coffee:

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/W7W21YVJJ)
${licenseText}`;
}

// writes the file based on the users answers and file formatting
async function init() {
	try {
		const answers = await prompts();
		const file = generateFile(answers);		
		await wfa('readme.md', file);
		console.log('Success: New README file has been generated.');
	} catch (err) {
		console.log(err);
	}
}
init();