
import { CipherDecipher } from "./CipherDecipher";

const cipherDecipher: CipherDecipher = new CipherDecipher(32, 127, 10);

console.log(cipherDecipher.cipher("Hello World!"));
console.log(cipherDecipher.decipher("Rovvy*ay|vn+"))