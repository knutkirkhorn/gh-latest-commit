type GitHubCommit = {
	message: string,
	url: string,
	time: string
}

/**
Get a users latest GitHub commit

@param username - username to find commits for
@param email -
@returns the latest commit for the given GitHub user

@example
```
import ghLatestCommit from 'gh-latest-commit';

console.log(await ghLatestCommit('knutkirkhorn'));
// => { message: ..., url: ..., time: ... }

// Check if the commit is authored with the given email
console.log(await ghLatestCommit('knutkirkhorn', 'knutkirk@hotmail.com'));
// => { message: ..., url: ..., time: ... }
```
*/
export default function ghLatestCommit(username: string, email?: string): Promise<GitHubCommit>;
