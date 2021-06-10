// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require('./utils/generateMarkdown.js')

// });
// TODO: Create an array of questions for user input
const questions = userResponseData => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)'
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is you Github username? (Required)'
        
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address.'
        },
        {
            type: 'input', 
            name: 'description',
            message: 'Provide a description of this project.'
        },
        {
            type: 'checkbox',
            name: 'licenses',
            message: 'What licenses did you use? (Check all that apply)',
            choices: ['General Public License', 'Apache', 'Microsoft Public License', 'Berkeley Software Distrobution', 'Eclipse Public License']
        }
    ])
};

questions().then(answers => console.log(answers));

// TODO: Create a function to write README file
writeToFile = (fileName, data) => {
    
    fs.writeFile('./README.md', generateReadMe, err => {
        if (err) throw err;

        console.log('ReadMe generated!');
    });
};

// TODO: Create a function to initialize app
init = () => { }

// Function call to initialize app
init();
