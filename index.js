// eslint-disable-next-line import/no-unresolved
import got from 'got';
import isemail from 'isemail';

export default async function ghLatestCommit(username, email) {
	if (email && typeof email !== 'string') {
		throw new TypeError('`email` should be of type `string`');
	}

	if (email && !isemail.validate(email)) {
		throw new TypeError('`email` should be an email address');
	}

	const activities = await got(`https://api.github.com/users/${username}/events/public`).json();

	// eslint-disable-next-line no-restricted-syntax
	for (const activity of activities) {
		if (activity.type === 'PushEvent') {
			const commit = activity.payload.commits[activity.payload.commits.length - 1];

			// If email is provided and the email is not the one used for authoring the commit
			if (email && commit.author.email !== email) {
				throw new Error('Commit was not authored with given email');
			}

			return {
				message: commit.message,
				url: `https://github.com/${activity.repo.name}/commit/${commit.sha}`,
				time: activity.created_at
			};
		}
	}

	throw new Error('Could not find any recently commits for the given user');
}
