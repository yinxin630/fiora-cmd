#!/usr/bin/env node

const cp = require('child_process');
const path = require('path');

cp.execSync(
    `${path.resolve(__dirname, '../node_modules/.bin/ts-node')} ${path.resolve(
        __dirname,
        './index.ts',
    )}`,
    { stdio: 'inherit' },
);
