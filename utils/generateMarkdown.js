// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub License](https://img.shields.io/badge/License-${license}-blue.svg)`
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let content;

  switch (license) {
    case "MIT":
      content = `For more information, visit this link: [MIT Info](https://opensource.org/licenses/MIT)`;
      break;
    case "Apache2.0":
      content = `For more information, visit this link: [Apache 2.0 Info](https://opensource.org/licenses/Apache2.0)`;
      break;
    case "GPL3.0":
      content = `For more information, visit this link: [GPL-3.0 Info](https://opensource.org/licenses/GPL-3.0)`;
      break;
    case "BSD3Clause":
      content = `For more information, visit this link: [BSD-3-Clause Info](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    default:
      content = "";
      break;
  }
  return content
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `This application is protected under the ${license} license.`
  } else {
    return "No license provided";
  } 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Test](#test)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Questions](#questions)
  
  ## Installation
  To install all necessary materials for this project, run the following command:
  \`\`\`bash
  ${data.installation}
\`\`\`
  ## Test
  To test this project, run the following command:
  \`\`\`bash
  ${data.test}
\`\`\`
  ## Usage
  ${data.usage}
  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  ## Contributing
  ${data.contribution}
  ## Questions
  If you have any questions, please reach out.
  * GitHub: [${data.gitName}](https://github.com/${data.gitName})
  * Email: ${data.email}
`;
}

module.exports = generateMarkdown;