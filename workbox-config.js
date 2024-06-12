module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{ico,html,json,txt,js}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};