const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = (answers) =>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <p class="lead">My favorite hobby is to ${answers.hobby}</p>
    <h3>If Any Questions <span class="badge badge-secondary">Contact Me at ${answers.email}</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">My contact Email: ${answers.email}</li>
      
    </ul>
  </div>
</div>
</body>
</html>`;

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'location',
      message: 'Where are you from?', 
    },
    {
        type: 'input',
        name:'hobby',
        message: 'What is your favorite hobby?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your contact Email',
    },
])
.then((answers) => {
    const htmlPage = generateHtml(answers);

    fs.writeFile('index.html', htmlPage, (err) => 
    err ? console.log('There is some Error') : console.log('Success!! You created index.html!')
    );
});