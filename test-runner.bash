#!/usr/bin/env bash

# Run tests in node and browser.
# dependencies:
#      browserify and tape should be installed globally

BROWSER_CMD=firefox

# node tests
tape test/*.spec.js | faucet

# browser tests
mkdir -p .tmp/
browserify test/*.spec.js > .tmp/bundle.js
echo '<script src="bundle.js"></script>' > .tmp/test.html
${BROWSER_CMD} .tmp/test.html
