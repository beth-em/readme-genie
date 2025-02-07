// TODO: Include packages needed for this application

import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [ {
    type: 'input',
    name: 'title',
    message: 'What is the title of you project?',
},
{
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your project:',
},
{
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?',
},
{
    type: 'input',
    name: 'usage',
    message: 'What is the usage information?',
},
{
    type: 'input',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GNU v3.0', 'BSD 3-Clause', 'BSD 2-Clause', 'Boost Software License 1.0', 'None'],
},
{
    type: 'input',
    name: 'contributing',
    message: 'What are the guidelines for contributing?',
},
{
    type: 'input',
    name: 'tests',
    message: 'What are the test instructions?',
},
{
    type: 'input',
    name: 'GitHub',
    message: 'What is your GitHub username?:',
},
{
    type: 'input',
    name: 'sources',
    message: 'What resources did you use to help create this project?',
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.error(err) : console.log('README.md generated!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile('README.md', markdown);
    });
}

// Function call to initialize app
init();