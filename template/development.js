const Application = require('thinkjs');
const watcher = require('think-watcher');<% if (babel) { %>
const babel = require('think-babel');
const notifier = require('node-notifier');<% } %>

const instance = new Application({
  ROOT_PATH: __dirname,
  watcher: watcher,<% if (babel) { %>
  transpiler: [babel, {
    presets: ['think-node']
  }],
  notifier: notifier.notify.bind(notifier),<% } %>
  env: 'development'
});

instance.run();
