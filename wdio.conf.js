exports.config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    capabilities: [{
        browserName: 'firefox',
    }],
    services: ['geckodriver'],
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
