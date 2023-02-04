export class CipherDecipher {
    nCodes: number;
    constructor(private minASCII: number, private maxASCII: number,
        private shift: number) {
        this.nCodes = maxASCII - minASCII + 1
    }
    cipher(str: string): string {
        return this.cipheringDeciphering(str,
            this.mapperCipher);
    }
    decipher(str: string): string {
        return this.cipheringDeciphering(str,
            this.mapperDecipher);
    }
    private cipheringDeciphering(str: string,
        mapper: (symb: string) => string): string {
        const arStr: Array<string> = Array.from(str);
        const arRes: Array<string> = arStr.map(symb => {
            let res: string = symb;
            if (symb.charCodeAt(0) <= this.maxASCII && symb.charCodeAt(0) >=
                this.minASCII) {
                res = mapper.call(this, symb);
            }
            return res;
        })

        return arRes.join('');
    }
    private mapperCipher(symb: string): string {
        const actualShift: number = (symb.charCodeAt(0) - this.minASCII
            + this.shift) % this.nCodes;
        return String.fromCharCode(this.minASCII + actualShift);
    }
    private mapperDecipher(symb: string): string {
        const actualShift: number = (this.maxASCII - symb.charCodeAt(0) + this.shift)
            % this.nCodes;
        return String.fromCharCode(this.maxASCII - actualShift);
    }
}