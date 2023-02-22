import {expectType} from 'tsd';
import ghLatestCommit, {GitHubCommit} from './index.js';

expectType<Promise<GitHubCommit>>(ghLatestCommit('knutkirkhorn'));
expectType<Promise<GitHubCommit>>(ghLatestCommit('knutkirkhorn', 'knutkirk@hotmail.com'));
