const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const os = require('os');

const savePassword = (password) => {
    fs.open(path.join(__dirname, '../', 'passwords.txt'), 'a', 777, (e, id) => {
        fs.write(id, password + os.EOL, null, 'utf-8', () => {
            fs.close(id, () => {
                console.log(chalk.green('Password is saved!'))
            })
        })
    })
};

module.exports = savePassword;