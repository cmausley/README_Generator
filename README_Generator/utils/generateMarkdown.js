// Create badge depending on license type selected
function licenseBadge(data) {
  if (data.license === "MIT") {
    data.licenseType = "This project is licensed under the MIT license";
    data.badges =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (data.license === "GNU GPLv3") {
    data.licenseType = "This project is licensed under the GNU GPLv3 license";
    data.badges =
      "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)";
  } else if (data.license === "Unlicense") {
    data.licenseType = "This project is licensed under the Unlicense license";
    data.badges =
      "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
  } else {
    data.licenseType = "This project has no license information";
    data.badges =
      "[![Generic badge](https://img.shields.io/badge/License-NoLicense-red.svg)](https://shields.io/)";
  }
}

function generateMarkdown(data) {
  licenseBadge(data);
  return `
# ${data.title}

${data.badges}

${data.url}

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)

## Installation

To install the necessary dependencies, run ${data.install} on the commnand line.

## Usage

${data.usage}

## License

${data.licenseType}

## Contributing

${data.contribute}

## Tests

To test the project, run ${data.tests} on the command line.

## Final Product

A video demo of my project: ${data.product}

## Questions

If you have any questions please email me at ${data.contact}.

## Credits

${data.credits}

`;
}

module.exports = generateMarkdown;
