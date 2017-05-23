#! /usr/bin/env node

var fs = require('fs-extra')
var program = require('commander');
var path = require('path');
var chalk = require('chalk');
var checkAppName = require('./utils/checkAppName')
var spawn = require( 'child_process' ).spawnSync

program
  .arguments('<project_directory>')
  .description('Bootstrap Microcosm application')
  .action(function(project_directory) {
    projectDirectory = project_directory
  })
  .parse(process.argv)

if (typeof projectDirectory === 'undefined') {
  console.error(chalk.red('  *  App name must be provided as the first argument.'));
  process.exit(1)
} else {
  checkAppName(projectDirectory)
}

fs.ensureDirSync(projectDirectory)
var templateDirectory = path.join(__dirname, '..', 'template')

console.log(chalk.green('  *  Copying template files'))
fs.copy(templateDirectory, projectDirectory)
