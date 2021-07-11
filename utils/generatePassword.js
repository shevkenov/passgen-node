const letters = 'abcdefghijklmnqprstuvwxyzABCDEFGHIJKALMNPQRSTUVWXYZ';
const nums = '123456789';
const symbs = '!@#$%^&*()={}"|?><.'


const generatePassword = (length, symbols, numbers ) => {
    let chars = letters;
    numbers ? chars += nums : '';
    symbols ? chars += symbs : '';    

    return createPassword(chars, length);
}

const createPassword = (chars, length) => {
    let password = '';

    for (let index = 0; index < length; index++) {
        const symbol = chars.charAt(Math.floor(Math.random() * chars.length));
        password += symbol;
    }

    return password;
}

module.exports = generatePassword