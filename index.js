// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const mdFile = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What do you want to name your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Tell us about your project.'
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter your email."
    },
    {
        type: 'input',
        name: 'gitName',
        message: "Enter GitHub username"
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you want your project to be installed?',
        default: "npm install"
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do you want to test your project?',
        default: "npm test"
    },
    {
        type: 'input',
        name: 'usage',
        message: "What is your project being used for?"
    },
    {
        type: 'input',
        name: 'contribution',
        message: "Can people contribue to your project and if so, how?"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license are you using?",
        choices: ["MIT", "GPL3.0", "Apache2.0", "BSD3Clause", "None"]
    },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Generating README...')
    );
}

// TODO: Create a function to initialize app
function init(prompts) {
    inquirer.prompt(prompts)
        .then((answers) => {

            const newFile = mdFile(answers)
            writeToFile("newREADME.md", newFile)
        })

}

// Function call to initialize app
init(questions);
