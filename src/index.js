const batchWebpConvert = require('./batchWebpConvert');
const validateOptions = require('./validateOptions');

/**
 * Converter instance
 *
 * @param options { Object }
 */
const converter = (options = null) => {
	batchWebpConvert(validateOptions(options));
};

module.exports = converter;
