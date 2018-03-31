# Semantic_Versioning

## Setup

1) Git clone project at https://github.com/zubairnahmed/Semantic_Versioning.git
2) Run 'npm install' to install dependencies
3) Run 'npm test' to run tests

### SemVar Data Structures

const semvar = new SemVar('1', '2', '3', '-alpha', '+001')
- where arguments are (major, minor, patch, pre-release, metadata) in strings
- please add '-' in front of pre-release and '+' in front of metadata

#### Methods

getMajor(), getMinor(), getPatch(), getPreRelease(), getMetadata()
- these return the related section of the semantic version

convert()
- converts this SemVar into its string representation

#### Static Methods

parse(semvarString)
- converts a semvar string into a SemVar data type

compare(SemVar1, SemVar2) -- WIP
- compares two valid SemVar data types to return 'equal', 'before', 'after' as appropriate

### Comparing lines of semvar strings

- Run "node compare.js '1.2.3 1.2.4\n1.2 1.2.4\n      \n1.7.9 1.7.9 1.7.9\n4.2.3-beta      4.2.3-alpha\n'" to see results
- This has not yet been implemented and works to filter out invalid inputs.
