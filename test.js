import test from 'ava';
import m from '.';

test('returns latest commit', async t => {
    try {
        const commit = await m('knutakir');
        t.is(typeof commit, 'object');
    } catch (e) {
        t.fail();
    }
});

test('returns latest commit with given email', async t => {
    try {
        const commit = await m('knutakir', 'knutkirk@hotmail.com');
        t.is(typeof commit, 'object');
    } catch (e) {
        t.fail();
    }
});

test('throws when provided a non string email', async t => {
    const expectedValue = '`email` should be of type `string`';

    try {
        await m('knutakir', 1337);
    } catch (e) {
        t.is(e.message, expectedValue);
    }
});

test('throws when provided a invalid email address', async t => {
    const expectedValue = '`email` should be a email address';

    try {
        await m('knutakir', 'invalid-email');
    } catch (e) {
        t.is(e.message, expectedValue);
    }
});