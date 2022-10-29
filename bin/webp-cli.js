#!/usr/bin/env node

const chalk = require('chalk');

const converter = require('../src');

const { info } = console;

(() => {
	info(chalk.gray('> Starting WebP CLI'));
	info(chalk.blue('> Scanning for images'));

	try {
		converter();
	} catch (error) {
		info(chalk.red(error));
	}
})();
