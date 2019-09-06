# gh-latest-commit [![Build Status](https://travis-ci.org/Knutakir/gh-latest-commit.svg?branch=master)](https://travis-ci.org/Knutakir/gh-latest-commit)
> :octocat: Get a users latest GitHub commit

## Installation
```
$ npm install gh-latest-commit
```

## Usage
```js
const ghLatestCommit = require('gh-latest-commit');

ghLatestCommit('knutakir').then(commit => {
    console.log(commit);
    // => { message: ..., url: ..., time: ... }
});

// Check if the commit is authored with the given email
ghLatestCommit('knutakir', 'knutkirk@hotmail.com').then(commit => {
    console.log(commit);
    // => { message: ..., url: ..., time: ... }
});
```

## API
### ghLatestCommit(username, [email])
Returns the usernames latest GitHub commit. The author email of the commit needs to match if the email is set.

## License
MIT © [Knut Kirkhorn](LICENSE)
