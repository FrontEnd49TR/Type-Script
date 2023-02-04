"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CipherDecipher = void 0;
class CipherDecipher {
    constructor(minASCII, maxASCII, shift) {
        this.minASCII = minASCII;
        this.maxASCII = maxASCII;
        this.shift = shift;
        this.nCodes = maxASCII - minASCII + 1;
    }
    cipher(str) {
        return this.cipheringDeciphering(str, this.mapperCipher);
    }
    decipher(str) {
        return this.cipheringDeciphering(str, this.mapperDecipher);
    }
    cipheringDeciphering(str, mapper) {
        const arStr = Array.from(str);
        const arRes = arStr.map(symb => {
            let res = symb;
            if (symb.charCodeAt(0) <= this.maxASCII && symb.charCodeAt(0) >=
                this.minASCII) {
                res = mapper.call(this, symb);
            }
            return res;
        });
        return arRes.join('');
    }
    mapperCipher(symb) {
        const actualShift = (symb.charCodeAt(0) - this.minASCII
            + this.shift) % this.nCodes;
        return String.fromCharCode(this.minASCII + actualShift);
    }
    mapperDecipher(symb) {
        const actualShift = (this.maxASCII - symb.charCodeAt(0) + this.shift)
            % this.nCodes;
        return String.fromCharCode(this.maxASCII - actualShift);
    }
}
exports.CipherDecipher = CipherDecipher;
//# sourceMappingURL=CipherDecipher.js.map