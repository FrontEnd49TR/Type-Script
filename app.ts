//  Eugene Kuzenko

import { Rectangle } from "./Rectangle";
import { Square } from "./Square";
import { ShapesContainer } from "./ShapeContainer";

const shapes: ShapesContainer = new ShapesContainer([
    new Rectangle(3, 4),
    new Square(5),
    new ShapesContainer([new ShapesContainer([new Square(10), new Square(4)]),
    new Rectangle(6, 4)])
]);
const totalSquare: number = shapes.getSquare();
console.log(totalSquare);
