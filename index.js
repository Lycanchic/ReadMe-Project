var fs = require("fs")
var inquirer = require('inquirer');
var path = require('path');
var fileGenerator = require("./fileGenerator");
// User questions //
let questions = [
    {
        type: "input",
        message: "What is the title of the Repo?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the link to the Repo?",
        name: "repo"
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is the link to your Github?",
        name: "GitHub"
    },
    {
        type: "input",
        message: "What technology did you use?",
        name: "technology"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the user story for this project?",
        name: "userstory"
    },
    {
         type: "input",
         message: "Please describe the app/assignment or project",
         name: "description"
    },
     {
    type: "input",
       message: "Please list what technology was used to create this app/assigment or project",
        name: "technology"
    },
   
    {
        type: "input",
        message: "Are there any future iterations?",
        name: "future"
    },
     {
        type: "input",
        message: "Do you need to list any licenses?",
        name: "license"
    },
    {
        type: "input",
        message: "Who can contribute?",
        name: "contribute"
    }
];

function writeNewFile(file, userData) {
    return fs.writeFileSync(path.join(process.cwd(), file), userData)
}

function start() {
    inquirer.prompt(questions).then((res) => {
        console.log('writing readme, please wait')
        writeNewFile('README.md', fileGenerator({ ...res }))
    })
}

start();
