exports.config = {
    // ====================
    // Runner Configuration
    // ====================
    hostname: '<CLOUD_URL>',
    protocol: 'https',
    port: 443,
    path: '/wd/hub',
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called.
    specs: [
        './test/specs/*.js'
    ],
    // ============
    // Capabilities
    // ============
    capabilities: [{
		'experitest:testName' : 'Demo Bank Example Test',
		'experitest:accessKey' : '<ACCESS_KEY>',
		browserName: 'chrome', // Change this to run your test on different browsers.
    }],

    mochaOpts: {
        ui: 'bdd',
        timeout: 600000
    },
}
