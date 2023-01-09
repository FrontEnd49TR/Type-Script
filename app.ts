//  Eugene Kuzenko

// 1.	Write two TypeScript functions
// 1.1.	Function shiftCipher
// 1.1.1.	Takes two parameters
// 1.1.1.1.	string containing any ASCII symbols
// 1.1.1.2.	Integer number as the value on which the right shift should be done (default value 1)
// 1.1.2.	Functionality: 
// 1.1.2.1.	Code ASCII of each lower-case is increased on a given value, 
//                 but if the code is greater than code ASCII ‘z’ it will be right cycling shift 
//                 beginning from code ASCII ‘a’ (consider case the value equals 26, in this case 
//                 all lower-case letters won’t be changed – think why)
// 1.1.2.2.	Each symbol that is not a lower-case letter goes to a result string as is
// 1.1.3.	Returns the converted string with shifted lower-case letters
// 1.1.4.	Examples: shiftCipher(“abc”) returns “bcd”; shiftCipher(“abz”, 27) returns “bca”; 
//             for testing of right functionality shiftCipher(“abz”,1000) returns “mnl”
// 1.2.	Function shiftDecipher
// 1.2.1.	Takes two parameters
// 1.2.1.1.	string containing any ASCII symbols
// 1.2.1.2.	Integer number as the value on which the left shift should be done (default value 1)
// 1.2.2.	Functionality: 
// 1.2.2.1.	Code ASCII of each lower-case is decrease on a given value, but if the code is less 
//                 than code ASCII ‘a’ it will be left cycling shift beginning from code ASCII ‘z’ 
//                 (consider case the value equals 26, in this case all lower-case letters won’t be changed – think why)
// 1.2.2.2.	Each symbol that is not a lower-case letter goes to a result string as is
// 1.2.3.	Returns the converted string with shifted lower-case letters
// 1.2.4.	Examples: shiftDecipher(“bcd”) returns “abc”; shifDecipher(“bca”, 27) returns “abz” ;
//              for testing of right functionality shiftDecipher(“mnl”,1000) returns “abz”



const aCodeAscii: number = 'a'.charCodeAt(0);
const zCodeAscii: number = 'z'.charCodeAt(0);
const nEnglishLetters = zCodeAscii - aCodeAscii + 1;

function shiftCipher(str: string, shift: number = 1): string {
    const arStr = Array.from(str);
    const arRes = arStr.map(sym => {
        let res: string = sym;
        if (sym <= 'z' && sym >= 'a') {
            const actualShift = (sym.charCodeAt(0) - aCodeAscii + shift) % nEnglishLetters;
            res = String.fromCharCode(aCodeAscii + actualShift);
        }
        return res;
    })
    return arRes.join('');
}
function shiftDecipher(str: string, shift: number = 1): string {
    const arStr = Array.from(str);
    const arRes = arStr.map(sym => {
        let res: string = sym;
        if (sym <= 'z' && sym >= 'a') {
            const actualShift = (zCodeAscii - sym.charCodeAt(0) + shift) % nEnglishLetters;
            res = String.fromCharCode(zCodeAscii - actualShift);
        }
        return res;
    })
    return arRes.join('');
}

console.log(shiftCipher("\nabc"));
console.log(shiftCipher("abz", 27));
console.log(shiftCipher("abz\n", 1000));

console.log(shiftDecipher("dcd"));
console.log(shiftDecipher("bca", 27));
console.log(shiftDecipher("mnl\n", 1000));