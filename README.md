# gh-latest-commit

> :octocat: Get a users latest GitHub commit

## Installation

```
$ npm install gh-latest-commit
```

## Usage

```js
const ghLatestCommit = require('gh-latest-commit');

ghLatestCommit('knutkirkhorn').then(commit => {
    console.log(commit);
    // => { message: ..., url: ..., time: ... }
});

// Check if the commit is authored with the given email
ghLatestCommit('knutkirkhorn', 'knutkirk@hotmail.com').then(commit => {
    console.log(commit);
    // => { message: ..., url: ..., time: ... }
});
```

## API

### ghLatestCommit(username, [email])

Returns the usernames latest GitHub commit. The author email of the commit needs to match if the email is set.
