//Task 1
function upperCase(str) {
    if (str.length === 0) {
        return "Empty string";
    }
    if (str[0] === str[0].toUpperCase()) {
        return `String's starts with uppercase character`;
    } else {
        return `String's not starts with uppercase character`;
    }
}
console.log(upperCase('regexp'));
console.log(upperCase('RegExp'));

//Task2
function checkEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
console.log(checkEmail('Qmail2@gmail.com'));

//Task3
const regex = /(d)(b+)(d)/gi;
const inputString = "cdbBdbsbz";
const matches = inputString.matchAll(regex);
const results = [];
for (const match of matches) {
    results.push(match[0]);
    results.push(match[2]);
    results.push(match[3]);
}
console.log(results);

//Task4
const inputString4 = "Java Script";
const regex4 = /(\w+)\s+(\w+)/;
const matches4 = inputString4.match(regex4);
const result4 = `${matches4[2]}, ${matches4[1]}`;
console.log(result4);

//Task5
function validateCreditCardNumber(cardNumber) {
    const regex = /^(\d{4}-){3}\d{4}$/;
    return regex.test(cardNumber);
}
console.log(validateCreditCardNumber("1234-5678-9012-3456"));
console.log(validateCreditCardNumber("1234-5678-9012-345"));

//Task6
function checkEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regex.test(email)) {
        console.log("Email is correct!");
    } else {
        console.log("Email is not correct!");
    }
}
checkEmail('my_mail@gmail.com');
checkEmail('#my_mail@gmail.com');
checkEmail('my_ma--il@gmail.com');

//Task7
function checkLogin(login) {
    const regex = /^(?!\d)[a-zA-Z\d]{2,10}$/;
    if (regex.test(login)) {
        console.log("True");
        const numbers = login.match(/\d+\.?\d*/g);
        console.log(numbers.join(', '));
    } else {
        console.log("False");
        const numbers = login.match(/\d+\.?\d*/g);
        console.log(numbers.join(', '));
    }
}
checkLogin('ee1.1ret3'); 
checkLogin('ee1*1ret3'); 