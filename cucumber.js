module.exports = {
    default: {
        require: [
            "tests/steps/**/*.js",
            "tests/utils/**/*.js"
        ],
        format: [
            "progress",
            "json:allure-results/cucumber-report.json"
        ],
        formatOptions: {
            resultsDir: "allure-results"
        },
        paths: ["tests/features/**/*.feature"],
        //publishQuiet: true,
        worldParameters: {},
        timeout: 10000
    }
};
