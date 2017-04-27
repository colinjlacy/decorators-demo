This project is meant to be used as a demo for using decorators in JavaScript.  Each directory contains a different example.

### Setup

This project, at the time of this writing, requires Babel and Babel plugins to run.  The first thing you'll need to do is install all dependencies.
```
$ npm install
```

None of the generated output files have been included in this repo; the reason being that I wanted to make it clear that any changes have to be transpiled before they can be run.  

If you'd like to target an individual folder, you'd run against the number prefixing that folder's name:
```
# 01 - 06
$ npm run 01
```

### Browser vs Node

This repo comes packaged with two sets of demos.  One runs in the browser, and the other runs in the Node.

To run in the browser, checkout the `master` branch.  Each folder is set up to run against a Webpack dev server.  Run each folder to serve its contents using the number prefixing that folder's name:
```
# 01 - 06
$ npm run 01
```

Then open your browser to `http://localhost:8080` to see the things run.  Note that the dev server is watching for file changes, so you can play around with the files in the project to see how they work.

To run in Node, checkout the `node` branch and transpile all of the JS files with the following command:
```
$ npm run all
```

If you'd like to target an individual folder, you'd run against the number prefixing that folder's name:
```
# 01 - 06
$ npm run 01
```

In each folder, run the `bundle.js` file in Node:
```
# from the root, running the first generated file
$ node ./node 01-method-decorators/bundle.js
```
