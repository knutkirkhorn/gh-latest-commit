const got = require('got');

module.exports = (username, email) => {
    if (email && typeof email !== 'string') {
        throw TypeError('`email` should be of type `string`')
    }

    return new Promise((resolve, reject) => {
        got(`https://api.github.com/users/${username}/events/public`).then(res => {
            const activities = JSON.parse(res.body);
        
            for (let i = 0; i < activities.length; i++) {
                if (activities[i].type === 'PushEvent') {
                    const commit = activities[i].payload.commits[activities[i].payload.commits.length - 1];

                    // If email is provided and the email is not the one used for authoring the commit
                    if (email && commit.author.email !== email) {
                        reject(new Error('Commit was not authored with given email'));
                        return;
                    }
                    
                    resolve({
                        message: commit.message,
                        url: `https://github.com/${activities[i].repo.name}/commit/${commit.sha}`,
                        time: activities[i].created_at
                    });
                    return;
                }
            }
        
            reject(new Error('Could not find any recently commits for the given user'));
        });
    });
};