var fileGenerator = require("./fileGenerator");
var fs = require("fs")
var inquirer = require('inquirer');

// User questions //
let questions = [
    {
        type: "input",
        message: "What is the title of the Repo?",
        name: "title"
    },
    {
        type: "input",
        message: "What is yourGthub user name?",
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
        message: "CAn anyone contribute?",
        choices: [
            "yes",
            "No"
        ],
    },
    {
        type: "input",
        message: "Please describe the app/assignment or project",
        name: "Describe"
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
        type: "input",
        message: "Do you need to list any license?",
        name: "license"
    }
];

//funciton to write the ReadMe.md file. //
inquirer.prompt(questions).then(function(response) {
 console.log(response);

 var content = fileGenerator(response);
 console.log(content);

 fs.writeFile("./ReadMe.md", content, function(err) {
    if (err) throw err
    console.log("success");
    
  });
});