/**
 * Create a new bizarreStringIncrementer
 * @function bizarreStringIncrementer.
 * @param {String} - String to which 1 needs to be added. 
 * @return {String} - resultant String which contain the addition of 1.
 */

const bizarreStringIncrementer = (str) => {
    if (typeof str != "string")
        throw "Please enter a String."

    const temp = str.split('');
    const size = temp.length;
    let idx = size - 1;
    let carry = 1;
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
        bizarreString += "1";
    
    bizarreString = bizarreString.split('').reverse().join('');

    if (idx == 0)
        return bizarreString;
    
    return string.substr(0, idx + 1) + bizarreString;
}

/*
Test Case
console.log(bizarreStringIncrementer("foo"));
console.log(bizarreStringIncrementer("foo23"));
console.log(bizarreStringIncrementer("foo0041"));
console.log(bizarreStringIncrementer("foo9"));
console.log(bizarreStringIncrementer("foo099"));
console.log(bizarreStringIncrementer("f99oo"));
console.log(bizarreStringIncrementer("f99oo23"));
console.log(bizarreStringIncrementer("f99oo099"));
console.log(bizarreStringIncrementer("f99oo0099"));
console.log(bizarreStringIncrementer("f99oo9999"));

try {
    bizarreStringIncrementer();
}
catch (err) {
    console.log(err);
}
*/