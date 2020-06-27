


      "scripts": {
    "clean": "rm dist/bundle.js",
    "build-dev": "webpack -d --mode development",
    "build-prod": "webpack -p --mode production",
    "start": "webpack-dev-server --hot --mode development"
  },

        "scripts": {
    "clean": "rm dist/bundle.js",
    "build-dev": "webpack -d --mode development",
    "build-prod": "webpack -p --mode production",
    "start-client": "webpack-dev-server --hot --mode development",
    "start-server": "nodemon server.js",
    "start": "concurrently \"npm:start-client\" \"npm:start-server\""
  },