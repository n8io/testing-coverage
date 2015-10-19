# testing-coverage

[![Codeship](https://img.shields.io/codeship/74269e70-5673-0133-2515-3a3b13774bac/master.svg)](https://codeship.com/projects/74269e70-5673-0133-2515-3a3b13774bac/status?branch=master)
[![node](https://img.shields.io/badge/node-%3E%3D4.2.1-lightgrey.svg)]()
[![npm](https://img.shields.io/badge/npm-%3E%3D2.14.7-lightgrey.svg)]()
[![dependencies](https://img.shields.io/david/n8io/testing-coverage.svg)]()
[![devDependencies](https://img.shields.io/david/dev/n8io/testing-coverage.svg)]()
[![Code Climate](https://codeclimate.com/github/n8io/testing-coverage/badges/gpa.svg)](https://codeclimate.com/github/n8io/testing-coverage)
[![Test Coverage](https://codeclimate.com/github/n8io/testing-coverage/badges/coverage.svg)](https://codeclimate.com/github/n8io/testing-coverage/coverage)

A test repo that demonstrates testing and code coverage.

## What cool things do you get?
1. `npm run test` # Runs all tests
2. `npm run test-unit` # Runs only unit tests
3. `npm run test-integration` # Runs only self-integration tests
4. `npm run coverage` # Runs istanbul coverage analysis
4. `npm run test-prod` # Runs all tests, coverage anyalysis, and uploads results to Code Climate
5. `npm run clean` # Removes node_modules and other temporary items so you can start the project fresh

For the above test commands it is more readable if you turn off logging with environment variables `BUNYAN_LOGLEVEL=OFF EXPRESS_LOG_FORMAT=OFF` when running them.

## OK, anything else neat about this?
1. Express logging with Morgan
  1. `EXPRESS_LOG_FORMAT` # defaults to "tiny", set to "OFF" to disable
1. Bunyan logging is built in
  1. `BUNYAN_LOGLEVEL` # defaults to "error", et to "OFF" to disable
2. Loggly support if you supply the creds in the env variables
  1. `LOGGLY_LOGLEVEL` # No default
  2. `LOGGLY_SUBDOMAIN` # No default
  3. `LOGGLY_TOKEN` # No default
3. Code Climate code coverage analysis
  1. `CODECLIMATE_REPO_TOKEN` # No default, used to upload coverage results when running `npm run test-prod`

## Getting started
1. `npm install`
2. `npm run dev`