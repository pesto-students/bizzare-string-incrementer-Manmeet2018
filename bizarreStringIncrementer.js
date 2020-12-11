/**
 * Create a new bizarreStringIncrementer
 * @function bizarreStringIncrementer.
 * @param {String} - String to which 1 needs to be added. 
 * @return {String} - adds the number 1 if string does not end in a number
 * or increments by 1 the if the string ends with a number
 */

module.exports = (str) => {
    if (typeof str != "string")
        throw "Please enter a String."

    const NO_TO_ADD = 1;
    const temp = str.split('');
    const size = temp.length;

    let idx = size - 1;
    let carry = NO_TO_ADD;
    let bizarreString = "";

    /*
        Consider all the positions in reverse manner which is a
        number and add 1 to the resultant number.
     */
    while (idx >= 0 && temp[idx] - '0' >= 0 && temp[idx] - '0' <= 9) {
        const number = temp[idx] - '0' + carry;
        carry = (number >= 10) ? ((number) / 10) : 0;
        bizarreString += ((number) % 10).toString();
        idx--;
    }

    if (carry)
        bizarreString += NO_TO_ADD.toString();
    
    bizarreString = bizarreString.split('').reverse().join('');

    if (idx == 0)
        return bizarreString;
    
    let ans = str.substr(0, idx + 1) + bizarreString;
    return ans;
}
/*
/Test Case
console.log(bizarreStringIncrementer('foo'));
console.log(bizarreStringIncrementer("23"));
console.log(bizarreStringIncrementer("foo0041"));
console.log(bizarreStringIncrementer("foo9"));
console.log(bizarreStringIncrementer("foo099"));
console.log(bizarreStringIncrementer("f99oo"));
console.log(bizarreStringIncrementer("f99oo23"));
console.log(bizarreStringIncrementer("f99oo099"));
console.log(bizarreStringIncrementer("f99oo0099"));
console.log(bizarreStringIncrementer("f99oo0099"));

try {
    bizarreStringIncrementer();
}
catch (err) {
    console.log(err);
}
*/