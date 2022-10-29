#!/usr/bin/env node

const { cosmiconfig } = require('cosmiconfig');
const chalk = require('chalk');

const converter = require('../src');

const { info } = console;

(() => {
	info(chalk.gray('> Starting WebP CLI'));
	info(chalk.blue('> Scanning for images'));

	const explorer = cosmiconfig('webp-converter');

	explorer
		.search()
		.then(result => {
			converter(result);
		})
		.catch(error => {
			info(chalk.red(error));
		});
})();
