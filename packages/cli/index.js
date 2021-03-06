#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const extfs = require('extfs');
const spawn = require('cross-spawn');
const execSync = require('child_process').execSync;
const chalk = require('chalk');
const ora = require('ora');
const updateNotifier = require('update-notifier');
const pkg = require('./package.json');

updateNotifier({ pkg }).notify();

const corePackage = 'mercenary-core';
const devPackage = 'mercenary-dev';
const starterPackage = 'mercenary-starter';

const appName = process.argv[2];

if (!appName) {
  console.log();
  console.log(chalk.red('Please specify a project directory.'));
  console.log();

  process.exit(1);
}

const projectDirectory = path.join(process.cwd(), appName);

if (!extfs.isEmptySync(projectDirectory)) {
  console.log();
  console.log(chalk.red('The specified project directory is not empty.'));
  console.log();

  process.exit(1);
}

console.log();
console.log(`Creating a new mercenary app in ${chalk.green(projectDirectory)}`);
console.log();

fs.ensureDirSync(projectDirectory);

const packageJson = {
  name: appName,
  version: '0.1.0',
  private: true,
};

fs.writeFileSync(
  path.join(projectDirectory, 'package.json'),
  JSON.stringify(packageJson, null, 2)
);

const spinner = ora().start();
spinner.text = 'Initializing new Git repository';

// Initialize git repository
execSync(`git init "${projectDirectory}"`);

// Move into the project directory
process.chdir(projectDirectory);

function installCorePackage() {
  return new Promise((resolve) => {
    const args = ['install', '--save-exact', corePackage];
    const child = spawn('npm', args);

    child.on('close', resolve);
  });
}

function installDevPackage() {
  return new Promise((resolve) => {
    const args = ['install', '--save-exact', '--save-dev', devPackage];
    const child = spawn('npm', args);

    child.on('close', resolve);
  });
}

function installStarterPackage() {
  return new Promise((resolve) => {
    const args = ['install', '--no-save', starterPackage];
    const child = spawn('npm', args);

    child.on('close', resolve);
  });
}

function runSetup() {
  const setupPath = path.resolve(
    process.cwd(),
    'node_modules',
    'mercenary-core',
    'tasks',
    'setup.js'
  );

  // Run the setup task
  require(setupPath)(); // eslint-disable-line
}

(async function start() {
  spinner.text = 'Installing mercenary core dependencies';
  const coreExitCode = await installCorePackage();
  if (coreExitCode !== 0) {
    spinner.fail(`Failed to install ${corePackage}.`);
    process.exit(1);
  }

  spinner.text = 'Installing mercenary dev dependencies';
  const devExitCode = await installDevPackage();
  if (devExitCode !== 0) {
    spinner.fail(`Failed to install ${devPackage}.`);
    process.exit(1);
  }

  spinner.text = 'Installing mercenary starter kit';
  const starterExitCode = await installStarterPackage();
  if (starterExitCode !== 0) {
    spinner.fail(`Failed to install ${starterPackage}.`);
    process.exit(1);
  }

  spinner.succeed('Installation complete');
  runSetup();
}());
