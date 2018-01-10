const Base = require('./base.js');

module.exports = class extends Base {
  async indexAction() {
    return this.display('admin');
  }
  /**
   * megic method
   */
  async __call() {
    return this.display('admin');
  }
};
