const SemVar = require('./SemVar')

const input = process.argv

// Assume input will be a string containing \n for new lines
const inputLinesString = input[2]

const inputLinesArray = inputLinesString.split('\\n')

for (let i = 0; i < inputLinesArray.length; i++) {
    if (inputLinesArray[i].trim() === '') continue

    // Note as invalid if there are more than two semvar strings
    if (inputLinesArray[i].match(/\d\.\d\.\d/g).length > 2) {
        console.log('invalid')
        continue
    }

    // Note as invalid if one semvar is of invalid format
    if (inputLinesArray[i].match(/\d\.\d\.\d/g).length === 1) {
        console.log('invalid')
        continue
    }
    
    // convert semvar strings to SemVar data types (have SemVar ignore empty string parsings)
    // use compare method on SemVar class to judge 'before', 'after', 'equal'
}