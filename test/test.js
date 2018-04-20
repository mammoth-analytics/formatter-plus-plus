'use strict';

var expect = require('chai').expect;
var FormatterPP = require('../index');

var samples = [
    {
        "input": 0,
        "output": "0"
    },
    {
        "input": 342.0,
        "output": "342"
    },
    {
        "input": 1342.0,
        "output": "1,342"
    },
    {
        "input": 12452.0,
        "output": "12.4k"
    },
    {
        "input": 124342.0,
        "output": "124k"
    },
    {
        "input": 3324123.0,
        "output": "3.32M"
    },
    {
        "input": 42213456.12,
        "output": "42.2M"
    },
    {
        "input": -245123456.0,
        "output": "-245M"
    },
    {
        "input": 1245123456.0,
        "output": "1.25B"
    },
    {
        "input": 21321453146.0,
        "output": "21.3B"
    },
    {
        "input": 214967456243.0,
        "output": "214B"
    },
    {
        "input": 1214967456243.0,
        "output": "1.21 x10<sup>12</sup>"
    },
    {
        "input": 0.1,
        "output": "0.1"
    },
    {
        "input": 0.101121,
        "output": "0.1011"
    },
    {
        "input": 0.0112,
        "output": "0.0112"
    },
    {
        "input": 0.00123,
        "output": "0.00123"
    },
    {
        "input": 0.00123131,
        "output": "0.001231"
    },
    {
        "input": 0.00014322,
        "output": "1.43 x10<sup>-4</sup>"
    },
    {
        "input": 5.43e-06,
        "output": "5.43 x10<sup>-6</sup>"
    },
    {
        "input": 1.4e-16,
        "output": "1.4 x10<sup>-16</sup>"
    },

];

describe('#NumericPP', function() {
    it('should process the samples and give the expected val', function() {
        var npp = new FormatterPP();
        for(let i = 0; i < samples.length; i++){
            let result = npp.humanize(samples[i].input);
            console.log(result)
            expect(result).to.equal(samples[i].output);
        }
    });
});

