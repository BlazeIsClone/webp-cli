const webp = require('webp-converter');
const glob = require('glob');
const chalk = require('chalk');

const { info } = console;

/**
 * Scan options using glob and create webp files using webp-converter
 */
const batchWebpConvert = () => {
	webp.grant_permission();

	const globPattern = './images/**/*.{png,jpg}';

	glob(globPattern, { ignore: ['node_modules/**/*.*'] }, (err, res) => {
		if (err) {
			info(chalk.white.bgRed(`! Glob error: ${err}`));
		} else {
			if (res.length === 0) {
				info(
					chalk.red('> No files corresponded to the pattern '),
					chalk.yellow(globPattern)
				);
			}
			for (const filePath of res) {
				// mount destination path
				const filePathSplittedByDot = filePath.split('.');
				const fileExtension =
					filePathSplittedByDot[filePathSplittedByDot.length - 1];
				const destinationPath = filePath
					.replace(fileExtension, 'webp')
					.replace('images', 'webp');

				const result = webp.cwebp(filePath, destinationPath, '-q 80', '-v');
				result.then(() => {
					info(chalk.gray('>'), chalk.cyan('created', destinationPath));
				});
			}
		}
	});
};

module.exports = batchWebpConvert;
