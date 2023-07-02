# CommunityCode-Web-WDIOStarterProject
Starter project with WebdriverIO.

## Run The Project
### Clone Starter Project

To get started with this project:
1. Clone the project.

    ```
    git clone https://github.com/ExperitestOfficial/CommunityCode-Web-WDIOStarterProject.git
    ```

2. Fetch all the necessary packages and dependencies.

    ```
    npm install
    ```

### Configuration Files

The project contains this configuration file:

- **wdio.conf.js** - Test configurations.


### Setting Up Continuous Testing Cloud Url And Authentication

To set up continuous testing, update the relevant properties in **wdio.conf.js**:

- hostname - Continuous Testing Cloud url.

- 'experitest:accessKey' - Access Key. For more information see: https://docs.experitest.com/display/TE/Obtaining+Access+Key

### Adding tests

The project already contains test for the Demo Bank Website. You can add new tests to your application.

- Add android test to test/specs/.

### Configuring Test Capabilities

You can add custom capabilities under capabilities in **wdio.conf.js**. For more information see https://docs.experitest.com/display/TET/Capabilities+In+Selenium+Tests. Continuous Testing Capabilities  must have 'experitest' prefix.

Examples:

**wdio.conf.js**
```
capabilities: [{
		'experitest:testName' : 'Demo Bank Example Test',
		'experitest:accessKey' : '<ACCESS_KEY>',
		browserName: 'chrome', // Change this to run your test on different browsers.
    }]
```

### Perform Test

To perform the test, run the relevant command.

```
npx wdio run wdio.conf.js
```

### Parallel Execution

To enable Parallel Execution, set the "**maxInstances**" parameter in **wdio.conf.js** to a value higher than one. For example:

**wdio.conf.js:**
  ```
  maxInstances: 3,
  ```

In this example, a maximum of 3 tests are spawned for every capability defined under capabilities in **wdio.conf.js:**. For more information about capabilities see  <a href="#WebDriverIo Capabilities"> WebDriverIo Capabilities</a>.

### Example: Running Tests on Different Devices

To test your website on different browsers, specify different browser names in every configuration.

```
capabilities: [{
        'browserName': 'firefox',
        <CONFIGURATION_1>
    },
    {
        'browserName': 'chrome',
        <CONFIGURATION_2>
    },
    .
    .
    .
    ,
    {
        'browserName': '<BROWSER_NAME>',
        <CONFIGURATION_n>
    }]
```

## Related Documentation

To find out more about CT usage, features and best practices, visit our online [documentation](https://docs.experitest.com/display/TE/Test+Execution+Home).

## Support

If you encounter an issue that is not covered here or in our online documentation, contact us at support@digital.ai


  

