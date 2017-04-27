This project is meant to be used as a demo for using decorators in JavaScript.  Each directory contains a different example.

### Setup

This project, at the time of this writing, requires Babel and Babel plugins to run.  The first thing you'll need to do is install all dependencies.
```
$ npm install
```

None of the generated output files have been included in this repo; the reason being that I wanted to make it clear that any changes have to be transpiled before they can be run.  Run the following command to transpile all included JS files:
```
$ npm run all
```

If you'd like to target an individual folder, you'd run against the number prefixing that folder's name:
```
# 01 - 06
$ npm run 01
```

### Node vs HTML

This repo comes packaged with two sets of demos.  One runs in Node, and the other runs in the browser.

To run in Node, checkout the `master` branch and transpile all of the JS files with the `all` command listed above.  In each folder, run the `bundle.js` file in Node:
```
# from the root
$ node ./node 01-method-decorators/bundle.js
```

To run in the browser, checkout the `html` branch.  Again, transpile all of the JS files with the `all` command listed above.  This time, run the `index.html` file from each folder in a web server.
