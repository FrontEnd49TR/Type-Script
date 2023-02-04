"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CipherDecipher_1 = require("./CipherDecipher");
const cipherDecipher = new CipherDecipher_1.CipherDecipher(32, 127, 10);
console.log(cipherDecipher.cipher("Hello World!"));
console.log(cipherDecipher.decipher("Rovvy*ay|vn+"));
//# sourceMappingURL=app.js.map