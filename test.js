// eslint-disable-next-line import/no-unresolved
import test from 'ava';
import nock from 'nock';
import ghLatestCommit from './index.js';

const exampleCommit = {
	id: '9927771437',
	type: 'PushEvent',
	actor: {
		id: 14_054_353,
		login: 'knutkirkhorn',
		display_login: 'knutkirkhorn',
		gravatar_id: '',
		url: 'https://api.github.com/users/knutkirkhorn',
		avatar_url: 'https://avatars.githubusercontent.com/u/14054353?'
	},
	repo: {
		id: 194_443_339,
		name: 'knutkirkhorn/gh-latest-commit',
		url: 'https://api.github.com/repos/knutkirkhorn/gh-latest-commit'
	},
	payload: {
		push_id: 3_771_517_766,
		size: 1,
		distinct_size: 1,
		ref: 'refs/heads/main',
		head: 'b0e6e77d81766eb680b9bbeff47a6db932d24811',
		before: 'f1e8c8f06c75dc74871ed47f4ae8126990680e45',
		commits: [
			{
				sha: 'b0e6e77d81766eb680b9bbeff47a6db932d24811',
				author: {
					email: 'knutkirk@hotmail.com',
					name: 'Knut Kirkhorn'
				},
				message: 'Fix typo and check error type',
				distinct: true,
				url: 'https://api.github.com/repos/knutkirkhorn/gh-latest-commit/commits/b0e6e77d81766eb680b9bbeff47a6db932d24811'
			}
		]
	},
	public: true,
	created_at: '2019-07-01T17:39:38Z'
};

test.after(() => {
	// Clean all nocks
	nock.cleanAll();
});

test('returns latest commit', async t => {
	nock('https://api.github.com')
		.get('/users/knutkirkhorn/events/public')
		.reply(200, [
			exampleCommit
		]);

	try {
		const commit = await ghLatestCommit('knutkirkhorn');
		t.is(typeof commit, 'object');
	} catch {
		t.fail();
	}
});

test('returns latest commit with given email', async t => {
	nock('https://api.github.com')
		.get('/users/knutkirkhorn/events/public')
		.reply(200, [
			exampleCommit
		]);

	try {
		const commit = await ghLatestCommit('knutkirkhorn', 'knutkirk@hotmail.com');
		t.is(typeof commit, 'object');
	} catch {
		t.fail();
	}
});

test('throws when provided a non string email', async t => {
	const expectedValue = '`email` should be of type `string`';

	try {
		await ghLatestCommit('knutkirkhorn', 1337);
	} catch (error) {
		t.is(error.message, expectedValue);
		t.true(error instanceof TypeError);
	}
});

test('throws when provided an invalid email address', async t => {
	const expectedValue = '`email` should be an email address';

	try {
		await ghLatestCommit('knutkirkhorn', 'invalid-email');
	} catch (error) {
		t.is(error.message, expectedValue);
		t.true(error instanceof TypeError);
	}
});
