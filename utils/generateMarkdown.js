// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
renderLicenseBadge = license => {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
renderLicenseLink = license => {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
renderLicenseSection = license => {}

// TODO: Create a function to generate markdown for README
generateMarkdown = data => {
  return `# ${data.title}
  
  ## Description 
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * *[Questions](#questions)
  
  ## Installation
  
  ## Usage 
    
  ## License
  
  ## Contributing
  
  ## Tests
  
  ## Questions
`;
}

module.exports = generateMarkdown;