# Team-Profile-Generator

## Description

This application is a Node.js command-line tool designed to generate an HTML file. It uses the Inquirer package to prompt users for input, which is then utilised to create a webpage showcasing essential information about members of a software engineering team. The webpage provides quick access to team members' emails and GitHub profiles.


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)

## Installation

To install the application, follow these steps:

Clone the repository to your local machine using the command: **git clone** https://github.com/Naike-B/Team-Profile-Generator .  
⬇️  
Navigate to the cloned directory using the command: **cd Team-Profile-Generator**.  
⬇️  
Install the dependencies by running **npm install**.

## Usage

After installing the dependencies, you can start the application by running the command: **node index.js** in the terminal. This will start the application and you can interact with it through the console.
During the interaction, you'll be guided to provide information about your team members, including managers, engineers, and interns. Once you've provided all the necessary information, a team profile will be generated and saved to a file named 'team.html' in the output directory.  

This setup process involves installing the necessary dependencies using npm, which include **fs-extra** for file system operations, **inquirer** for creating interactive command line interfaces, and **jest** for testing the application.  


Below is an example of a webpage generated using the application:  
![Sample webpage](assets/sample%20-%20team%20file.png)

You can download a copy of the HTML file [here](https://drive.google.com/file/d/10hzadO2vK6vKG_LF1syV0bYA61kjuivb/view?usp=sharing).

## License
N/A

## Credits

Massive thanks to my instructor, teaching assistant, and study group for helping me completing this project.  🚀

**Resources:**
- [Stack overflow - validating email](https://stackoverflow.com/questions/65189877/how-can-i-validate-that-a-user-input-their-email-when-using-inquirer-npm)  
- [Stack overflow - regular expression email validation](https://stackoverflow.com/questions/940577/javascript-regular-expression-email-validation)  
- [Stack overflow - create a directory using Node.js](https://stackoverflow.com/questions/21194934/how-to-create-a-directory-if-it-doesnt-exist-using-node-js)  
- [Node.js - file paths](https://nodejs.org/en/learn/manipulating-files/nodejs-file-paths)  
- [GitHub - node-fs-extra ensureDir()](https://github.com/jprichardson/node-fs-extra/blob/HEAD/docs/ensureDir.md)  
