module.exports = {
  "prompts": {
    "name": {
      "type": "string",
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "message": "Project description",
      "default": "application created by thinkjs"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "babel": {
      "type": "confirm",
      "message": "Do you want to turn on babel?"
    }
  },
  "new": {
    "default": [
      ["src/bootstrap", "src/bootstrap"],
      ["src/config", "src/config"],
      ["src/controller/base.js", "src/controller/base.js"],
      ["src/controller/index.js", "src/controller/index.js"],
      ["src/logic", "src/logic"],
      ["src/model", "src/model"],
      ["client/build", "client/build"],
      ["client/config", "client/config"],
      ["client/src", "client/src"],
      ["client/static", "client/static"],
      ["client/test", "client/test"],
      ["client/.babelrc", "client/.babelrc"],
      ["client/.editorconfig", "client/.editorconfig"],
      ["client/.postcssrc.js", "client/.postcssrc.js"],
      ["client/eslintignore", "client/.eslintignore"],
      ["client/eslintrc.js", "client/.eslintrc.js"],
      ["client/index.html", "client/index.html"],
      ["client/package.json", "client/package.json"],
      ["client/README.md", "client/README.md"],
      ["view/index_index.html", "view/index_index.html"],
      ["development.js", "development.js"],
      ["eslintrc", ".eslintrc"],
      ["gitignore", ".gitignore"],
      ["nginx.conf", "nginx.conf"],
      ["package.json", "package.json"],
      ["pm2.json", "pm2.json"],
      ["production.js", "production.js"],
      ["README.md", "README.md"]
    ],
    "multiModule": [
      ["src/bootstrap", "src/common/bootstrap"],
      ["src/config", "src/common/config"],
      ["src/config/config.js", "src/[moduleName]/config/config.js"],
      ["src/controller/base.js", "src/[moduleName]/controller/base.js"],
      ["src/controller/index.js", "src/[moduleName]/controller/index.js"],
      ["src/logic", "src/[moduleName]/logic"],
      ["src/model", "src/[moduleName]/model"],
      ["client/build", "client/build"],
      ["client/config", "client/config"],
      ["client/src", "client/src"],
      ["client/static", "client/static"],
      ["client/test", "client/test"],
      ["client/.babelrc", "client/.babelrc"],
      ["client/.editorconfig", "client/.editorconfig"],
      ["client/.postcssrc.js", "client/.postcssrc.js"],
      ["client/eslintignore", "client/.eslintignore"],
      ["client/eslintrc.js", "client/.eslintrc.js"],
      ["client/index.html", "client/index.html"],
      ["client/package.json", "client/package.json"],
      ["client/README.md", "client/README.md"],
      ["view/index_index.html", "view/[moduleName]/index_index.html"],
      ["development.js", "development.js"],
      ["eslintrc", ".eslintrc"],
      ["gitignore", ".gitignore"],
      ["nginx.conf", "nginx.conf"],
      ["package.json", "package.json"],
      ["pm2.json", "pm2.json"],
      ["production.js", "production.js"],
      ["README.md", "README.md"]
    ]
  },
  "controller": {
    "default": [
      ["src/controller/index.js", "src/[moduleName]/controller/[action].js"],
      ["src/logic/index.js", "src/[moduleName]/logic/[action].js"]
    ],
    "rest": [
      ["src/controller/rest.js", "src/[moduleName]/controller/rest.js"],
      ["src/controller/restIndex.js", "src/[moduleName]/controller/[action].js"],
      ["src/logic/index.js", "src/[moduleName]/logic/[action].js"]
    ]
  },
  "model": [
    ["src/model/index.js", "src/[moduleName]/model/[action].js"]
  ],
  "service": [
    ["src/service/index.js", "src/[moduleName]/service/[action].js"]
  ],
  "middleware": [
    ["src/middleware/base.js", "src/[moduleName]/middleware/[action].js"]
  ],
  "adapter": [
    ["src/adapter/base.js", "src/[moduleName]/adapter/[type]/[action].js"]
  ],
  "module": [
    ["src/config/config.js", "src/[moduleName]/config/config.js"],
    ["src/controller/base.js", "src/[moduleName]/controller/base.js"],
    ["src/controller/index.js", "src/[moduleName]/controller/index.js"],
    ["src/logic/index.js", "src/[moduleName]/logic/index.js"],
    ["src/model/index.js", "src/[moduleName]/model/index.js"],
    ["view/index_index.html", "view/[moduleName]/index_index.html"]
  ],
  "skipCompile": [
    "client/src/assets/*.png",
    "client/src/**/*.vue"
  ],
  "completeMessage": "To get started:\n\n<% if (!inPlace) { %># enter path\n$ cd <%= destDirName %>\n\n<% } %># install dependencies:\n$ npm install\n\n# run the app\n$ npm start"
}
