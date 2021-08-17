module.exports = {
    verbose: true,
    preset: "jest-playwright-preset",
    testMatch: ["**/?(*.)+(spec|test).+(js)"],
    maxWorkers: 1,
    "testRunner": "jest-circus/runner",
    "testEnvironment": "./CustomEnvironment.js",
    testEnvironmentOptions:{
    "jest-playwright":{
        browsers: ["chromium"/*, "firefox", "webkit"*/],
        exitOnPageError: false, 
        //skipInitialization: true,
        launchOptions: {
          args: ['--start-maximized'],
          headless: false,
          //slowMo: 1000
        },
        contextOptions: {
          //ignoreHTTPSErrors: true,
          viewport: null
        },
     }
    },
    "reporters": [
        "default",
        ["jest-html-reporters", {
            "publicPath": "./html-report",
            "filename": "report.html"
        }]
      ]
};