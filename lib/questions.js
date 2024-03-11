const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to three characters for your logo: ',
      },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter a text color for your logo (name or #Hex): ',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please select a shape for your logo: ',
        choices: ['triangle', 'square','circle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter a shape color for your logo (name or #Hex):',
    },
];

module.exports = questions