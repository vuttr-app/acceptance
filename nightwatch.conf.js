module.exports = {
  // src_folders : ['tests/specs'],
  // output_folder : 'tests/reports',
  use_xpath: true,
  detailed_output: process.env.DETAILED_OUTPUT || true,
  test_settings: {
    default: {
      selenium_host: 'hub',
      selenium_port: 4444,
      start_process: false,
      log_path: "logs",
      silent: true,
      live_output: false,
      desiredCapabilities: {
        loggingPrefs: { 'browser': 'ALL' },
        handlesAlerts: true,
        javascriptEnabled: true,
        acceptSslCerts: true
      },
      screenshots: {
        enabled: true,
        path: '.screenshots',
        on_failure: true,
        on_error: true
      }
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox'
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
      }
    }
  }
}
