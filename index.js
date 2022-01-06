// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');



// TODO: Create an array of questions for user input
const questions = [
    { 
    type: 'input',
    name: 'title',
    message: 'What is the title of your application?'
    },
    {
      type: 'input', 
      name: 'description',
      message: 'What is the description of your application?'  
    },
    {
    type: 'input', 
    name: 'install',
    message: 'How do you install your application?'
    },
    {
        type: 'input', 
        name: 'usage', 
        message: 'Please enter instructions for application use.'
    },
    {
        type: 'input', 
        name: 'contributions',
        message: 'What are the guidelines for contributing to this application?'
    },
    {
        type: 'input',
        name: 'test', 
        message: 'Please enter test command instructions.'
    },
    {
        type: 'list',
        name: 'license', 
        message: 'This application is licensed under: ',
        choices: ['MIT', 'Mozilla', 'GNU', 'Apache', 'none']
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        fs.writeFileSync('README.md', generateMarkdown(data), err => {if (err) throw err})
    })

    
}

// Function call to initialize app
init();
