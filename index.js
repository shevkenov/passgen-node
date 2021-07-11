#!/usr/bin/env node
const program = require('commander');
const chalk = require('chalk');
const clipboardy = require('clipboardy');

const generatePassword = require('./utils/generatePassword');
const savePassword = require('./utils/savePassword');
const log = console.log

program
    .option('-l, --length <number>', 'password length', 8)
    .option('-s, --save', 'save password in password.tct')
    .option('-nn, --no-numbers', 'remove numbers')
    .option('-ns, --no-symbols', 'remoce symbols')
    .parse();

const { length, numbers, symbols, save } = program.opts();
const generatedPassword = generatePassword(length, symbols, numbers);

if(save){
    savePassword(generatedPassword);
}

clipboardy.writeSync(generatedPassword);

log(chalk.blue('Generated Passwword: ') + chalk.bold(generatedPassword));
log(chalk.yellow('Passord copied to clipboard!'));
