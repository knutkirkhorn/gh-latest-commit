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