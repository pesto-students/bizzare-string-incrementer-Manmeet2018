// Start your implementation here
const bizarreStringIncrementer = (string) => {
    const temp = string.split('');
    const size = temp.length;
    let idx = size - 1;
    let carry = 1;
    let bizarreString = "";
    while(idx >= 0 && temp[idx]-'0' >= 0 && temp[idx]-'0' <= 9) {
        const number = temp[idx] -'0' + carry;
        carry = (number >= 10) ? ((number)/10) : 0;
        bizarreString +=  ((number)%10).toString();
        idx--;
    }
    if(carry)
        bizarreString += "1";
    bizarreString = bizarreString.split('').reverse().join('');
    if(idx == 0) return bizarreString;
    return string.substr(0, idx+1) + bizarreString;
}
/*
console.log(bizarreStringIncrementer("foo"));
console.log(bizarreStringIncrementer("foo23"));
console.log(bizarreStringIncrementer("foo0041"));
console.log(bizarreStringIncrementer("foo9"));
console.log(bizarreStringIncrementer("foo099"));
console.log(bizarreStringIncrementer("f99oo"));
console.log(bizarreStringIncrementer("f99oo23"));
console.log(bizarreStringIncrementer("f99oo099"));
console.log(bizarreStringIncrementer("f99oo0099"));
*/


