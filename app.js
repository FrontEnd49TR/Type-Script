"use strict";
//  Eugene Kuzenko
Object.defineProperty(exports, "__esModule", { value: true });
const Rectangle_1 = require("./Rectangle");
const Square_1 = require("./Square");
const ShapeContainer_1 = require("./ShapeContainer");
const shapes = new ShapeContainer_1.ShapesContainer([
    new Rectangle_1.Rectangle(3, 4),
    new Square_1.Square(5),
    new ShapeContainer_1.ShapesContainer([new ShapeContainer_1.ShapesContainer([new Square_1.Square(10), new Square_1.Square(4)]),
        new Rectangle_1.Rectangle(6, 4)])
]);
const totalSquare = shapes.getSquare();
console.log(totalSquare);
//# sourceMappingURL=app.js.map