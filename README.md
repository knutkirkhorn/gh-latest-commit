# gh-latest-commit

> :octocat: Get a users latest GitHub commit

## Installation

```
npm install gh-latest-commit
```

## Usage

```js
import ghLatestCommit from 'gh-latest-commit';

console.log(await ghLatestCommit('knutkirkhorn'));
// => { message: ..., url: ..., time: ... }

// Check if the commit is authored with the given email
console.log(await ghLatestCommit('knutkirkhorn', 'knutkirk@hotmail.com'));
// => { message: ..., url: ..., time: ... }
```

## API

### ghLatestCommit(username, [email])

Returns the usernames latest GitHub commit. The author email of the commit needs to match if the email is set.
