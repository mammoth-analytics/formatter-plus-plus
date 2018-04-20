formatter-plus-plus
=========

A Javascript library to format numbers as HTML.

## Installation

  `npm install formatter-plus-plus`

## Usage

    var formatterPlusPlus = require("formatter-plus-plus")
    let fpp = new formatterPlusPlus();
    fpp.humanize(1244904) // output will be "1.24M"
    fpp.humanize(1244904) // output will be ""1.34 x10<sup>12</sup>""


  Output should be `"1.24M"`
  
  humanise should work with any number.


## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Submit PRs.
