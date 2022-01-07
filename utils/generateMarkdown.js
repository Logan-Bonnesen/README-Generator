// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }else if (license === 'Mozilla'){
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  } else if (license === 'GNU'){
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license === 'Apache'){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else {
    return ''
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT'){
    return `This application is licensed by MIT`
    }else if (license === 'Mozilla'){
      return `This application is licensed by Mozilla`
    }else if (license === 'GNU'){
      return `This application is licensed by GNU`
    }else if (license === 'Apache'){
      return `This application is licensed by Apache`
    } else {
      return ``
    }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {

// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}  
## Description 
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributions)
* [Test Instructions](#test)
* [License](#license)
* [Questions](#questions)

## Installation
${data.install}

## Usage
${data.usage}

## Contributions
${data.contributions}

## Test
${data.test}

## License
${renderLicenseLink(data.license)}

## Questions
For any questions you can reach me at my email: ${data.email}
or find me on GitHub: ${data.github}
`;

}



module.exports = generateMarkdown;
