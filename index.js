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
        message: "Please describe the userStory?",
        name: "userStory"
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is the link to your github?",
        name: "GitHub"
    },
    {
        type: "input",
        message: "What is the link to the repo for this ReadMe?",
        name: "GitHUb"
     },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "list",
        message: "Can anyone contribute?",
        choices: [
            "yes",
            "No"
        ],
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
        type: "list",
        message: "Are there any screen shots of the app/assignment or project?",
        name: [
            "yes",
            "no"
        ],
    },
    {
        type: "input",
        message: "Are there any future iterations?",
        name: "Describe"
    },
    {
        type: "list",
        message: "Please select the Licence",
        choices: [
            "yes",
            "No"
        ],
    },
];

 {
    return fs.writeFileSync(path.join(process.cwd(), file), userData)
}

function start() {
    inquirer.prompt(questions).then((res) => {
        console.log('writing readme, please wait')
        writeNewFile('README.md', fileGenerator({ ...res }))
    })
}

start();