const PlaywrightEnvironment = require('jest-playwright-preset/lib/PlaywrightEnvironment')
  .default

  const { addAttach } = require("jest-html-reporters/helper");

class CustomEnvironment extends PlaywrightEnvironment {
  async setup() {
    await super.setup()
    // Your setup
  }

  async teardown() {
    // Your teardown
    await super.teardown()
  }

  async handleTestEvent(event) {
    await super.handleTestEvent(event);
    if (event.name === 'test_done' && event.test.errors.length > 0) {
      // const parentName = event.test.parent.name.replace(/\W/g, '-')
      // const specName = event.test.name.replace(/\W/g, '-')

      const data = await this.global.page.screenshot();

      await addAttach(data, "test", this.global);
    }
  }
}

module.exports = CustomEnvironment